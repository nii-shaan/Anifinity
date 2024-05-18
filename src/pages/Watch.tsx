import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Episodes {
  id: string;
  number: number;
  title: string;
  isFiller: boolean;
  url: string;
}

function Watch() {
  const { slug } = useParams<{ slug: string }>();

  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const itemPerSection = 100;
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/anime/zoro/info?id=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.episodes);
      });
  }, [slug]);

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
    for (let i = 1; i < totalItems; i += itemsPerOption) {
      ranges.push(`${i}-${Math.min(i + itemsPerOption - 1, totalItems)}`);
    }
    return ranges;
  };

  const RangeOptions = generateRanges(episodes.length, itemPerSection);

  return (
    <div
      id="container"
      className="text-white mt-10 w-full flex flex-col items-center"
    >
      <div id="video" className="w-[80%] h-72 bg-red-400"></div>
      <div id="animeTitle"></div>

      <div id="epsInfos">
        <div id="range" className="">
          <select
            name=""
            id=""
            value={selectedOption}
            onChange={handleSelectChange}
            aria-label="Select"
            className="bg-black cursor-pointer py-3 px-6 rounded-lg"
          >
            {RangeOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Watch;
