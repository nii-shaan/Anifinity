import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Episodes {
  id: string;
  number: number;
  title: string;
  isFiller: boolean;
  url: string;
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
  const RangeOptions = generateRanges(episodes.length, 100);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [dividedEps, setDividedEps] = useState<Episodes[] | []>([]);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setCurrentEp(dividedEps[0]);
  };

  const [currentEp, setCurrentEp] = useState<Episodes | null>(null);
  console.log(currentEp);

  useEffect(() => {
    fetch(`http://localhost:3000/anime/zoro/info?id=${slug}`)
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

  return (
    <div
      id="container"
      className="text-white mt-10 w-full flex flex-col items-center"
    >
      <div id="video" className="w-[80%] h-72 bg-red-400"></div>
      <div id="animeTitle" className="mt-6 px-2">
        {currentEp ? (
          <>
            <span className="text-green-400">{currentEp.title}</span>
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
            className="bg-black cursor-pointer py-2 px-4 rounded-lg"
          >
            {RangeOptions.map((d, i) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        {dividedEps.length > 0 ? (
          <div
            id="epBoxs"
            className="w-[95%] flex flex-wrap border border-[#3d3b3b] justify-start ml-[2%] gap-2 p-5 desktop:max-w-[1500px]"
          >
            {dividedEps.map((episode, i) => (
              <Button
                variant={"ghost"}
                key={episode.id}
                className={` w-10 border hover:bg-[#919191] ${
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
            {[...Array(40)].map((_,i)=>(
                <Skeleton className=" w-10 h-10 bg-[#3b3a3a]"/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Watch;
