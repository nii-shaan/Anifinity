import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Track } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

interface Episodes {
  episodeId: string;
  isFiller: boolean;
  number: number;
  title: string;
}
interface WatchData {
  tracks: { file?: string; label?: string; kind?: string; default?: boolean }[];
  intro: { start: number; end: number };
  outro: { start: number; end: number };
  sources: { url: string; type: string }[];
  anilistID: number;
  malID: number;
}

function Watch() {
  /**
   * @param totalItems
   * @param itemsPerOption
   * @returns Array of strings which has ranges
   * @This_Function_is_used_to_get_the_ranges_of_array_item
   */
  const generateRanges = (
    totalItems: number,
    itemsPerOption: number
  ): string[] => {
    const ranges: string[] = [];
    for (let i = 1; i <= totalItems; i += itemsPerOption) {
      ranges.push(`${i}-${Math.min(i + itemsPerOption - 1, totalItems)}`);
    }
    return ranges;
  };

  const { slug } = useParams<{ slug: string }>();
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const RangeOptions = episodes ? generateRanges(episodes.length, 100) : [];
  const [selectedOption, setSelectedOption] = useState<string>(
    "" || RangeOptions[0]
  );
  const [dividedEps, setDividedEps] = useState<Episodes[] | []>([]);
  const [watchData, setWatchData] = useState<WatchData | null>(null);
  const [currentEp, setCurrentEp] = useState<Episodes | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setCurrentEp(dividedEps[0]);
  };

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_TWO}/anime/episodes/${slug}?provider=zoro`
    )
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.episodes);
        const rangeOptions = generateRanges(data.episodes.length, 100);
        setSelectedOption(rangeOptions[0] || "");
      });
  }, [slug]);

  useEffect(() => {
    if (selectedOption) {
      const [start, end] = selectedOption.split("-").map(Number);
      const Eps = episodes.slice(start - 1, end);
      setDividedEps(Eps);
      setCurrentEp(Eps[0]);
    }
  }, [selectedOption, episodes]);

  useEffect(() => {
    if (currentEp) {
      fetch(
        `${import.meta.env.VITE_API_TWO}/anime/episode-srcs?id=${
          currentEp.episodeId
        }?provider=zoro`
      )
        .then((res) => res.json())
        .then((data) => {
          setWatchData(data);
        });
    }
  }, [currentEp]);

  if (dividedEps) {
    return (
      <>
      

        <div
          id="container"
          className="text-white pt-10 w-full flex flex-col items-center bg-[#0f1010]"
        >
          <div id="video" className="w-[85%] ">
            {watchData ? (
              <MediaPlayer
                title={currentEp?.title}
                src={watchData.sources[0].url}
                autoPlay={true}
              >
                {watchData.tracks.map((track, index) => (
                  <Track
                    key={String(index)}
                    src={track.file}
                    kind={"subtitles"}
                    label={track.label}
                    default={track.default}
                  />
                ))}

                <MediaProvider />
                <DefaultVideoLayout
                  thumbnails={watchData.tracks[1].file}
                  icons={defaultLayoutIcons}
                />
              </MediaPlayer>
            ) : (
              <Skeleton className="w-full h-[400px] bg-[#3b3a3a] " />
            )}
          </div>
          <div id="animeTitle" className="mt-6 px-2">
            {currentEp ? (
              <>
                <span className="text-green-400 text-3xl desktop:text-base">
                  {currentEp.title}
                </span>
              </>
            ) : (
              <Skeleton className="h-8 w-64 bg-[#3b3a3a] " />
            )}
          </div>

          <div id="epsInfos" className="w-full flex flex-col mt-10 gap-2">
            <div id="range" className="ml-[2%]">
              <select
                name=""
                id=""
                value={selectedOption || ""}
                onChange={handleSelectChange}
                aria-label="Select"
                className="bg-black cursor-pointer text-lg desktop:text-base py-2 px-8 rounded-lg border"
              >
                {RangeOptions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            {dividedEps.length > 0 ? (
              <div
                id="epBoxs"
                className="w-[95%] flex flex-wrap border border-[#3d3b3b] justify-start ml-[2%] gap-4 p-5 desktop:max-w-[1500px]"
              >
                {dividedEps.map((episode, i) => (
                  <button
                    key={episode.episodeId}
                    className={` w-20 text-xl desktop:text-base p-8 desktop:p-2  border rounded-lg hover:border-green-400  hover:p-0 hover:border-2 ${
                      episode.isFiller ? "bg-[#702727]" : ""
                    } ${
                      episode.episodeId == currentEp?.episodeId
                        ? "bg-[#66cf56] text-[#000000] "
                        : ""
                    }`}
                    onClick={() => {
                      setCurrentEp(dividedEps[i]);
                    }}
                  >
                    {episode.number}
                  </button>
                ))}
              </div>
            ) : (
              <div className="w-[95%] flex flex-wrap border border-[#3d3b3b] justify-start ml-[2%] gap-2 p-5 desktop:max-w-[1500px]">
                {[...Array(40)].map((_, i) => (
                  <Skeleton key={i} className=" w-10 h-10 bg-[#3b3a3a]" />
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default Watch;
