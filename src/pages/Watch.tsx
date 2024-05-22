import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { isHLSProvider, MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import Hls from "hls.js";
interface Episodes {
  id: string;
  number: number;
  title: string;
  isFiller: boolean;
  url: string;
}
interface WatchData {
  sources: { url: string; type: string; isM3U8: boolean }[];
  subtitles: { url: string; lang: string }[];
  intro: { start: number; end: number };
  outro: { start: number; end: number };
}
function onProviderChange(provider: any) {
  if (isHLSProvider(provider)) {
    provider.library = Hls;
  }
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

  // const proxyUrl = (url: any) => {
  //   const encodedUrl = encodeURIComponent(url);
  //   return `http://localhost:3001/proxy?url=${encodedUrl}`;
  // };

  const { slug } = useParams<{ slug: string }>();
  const [episodes, setEpisodes] = useState<Episodes[]>([]);

  const RangeOptions = episodes ? generateRanges(episodes.length, 100) : [];
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [dividedEps, setDividedEps] = useState<Episodes[] | []>([]);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setCurrentEp(dividedEps[0]);
  };
  const [watchData, setWatchData] = useState<WatchData | null>(null);

  const [currentEp, setCurrentEp] = useState<Episodes | null>(null);

  const [videoUrl, setVideoUrl] = useState<string | "">("");
  console.log(videoUrl);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/info?id=${slug}`)
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
        `${import.meta.env.VITE_API_ONE}/anime/zoro/watch?episodeId=${
          currentEp.id
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setWatchData(data);

          if (data.sources && data.sources.length > 0) {
            const url = data.sources[0].url;
            setVideoUrl(url);
          } else {
            // Handle the case when no video source is available
            console.error("No video source found");
          }
        })
        .catch((error) => {
          // Handle fetch errors
          console.error("Error fetching video data:", error);
        });
    }
  }, [currentEp]);

  useEffect(() => {
    if (currentEp && watchData && watchData.sources.length > 0) {
      const url = watchData.sources[0].url;
      setVideoUrl(url);
    }
  }, [currentEp, watchData]);

  if (dividedEps) {
    return (
      <div
        id="container"
        className="text-white pt-10 w-full flex flex-col items-center bg-[#0f1010]"
      >
        <div id="video" className="w-[85%] ">
          {watchData && (
            <MediaPlayer
              title={currentEp?.title}
              src={`https://m3u8proxy.lw-nishan.workers.dev/?url=${encodeURIComponent(
                videoUrl || ""
              )}&referer=${encodeURIComponent(
                videoUrl ? `https://${new URL(videoUrl).hostname}` : ""
              )}&origin=${encodeURIComponent(
                videoUrl ? `https://${new URL(videoUrl).hostname}` : ""
              )}`}
              onProviderChange={onProviderChange}
            >
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
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
              value={selectedOption}
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
                <Button
                  variant={"ghost"}
                  key={episode.id}
                  className={` w-10 text-xl desktop:text-base p-8 desktop:p-2  border hover:bg-[#919191] ${
                    episode.isFiller ? "bg-[#702727]" : ""
                  } ${episode.id == currentEp?.id ? "bg-green-300 " : ""}`}
                  onClick={() => {
                    setCurrentEp(dividedEps[i]);
                  }}
                >
                  {episode.number}
                </Button>
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
    );
  }
}
export default Watch;
