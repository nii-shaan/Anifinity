import AnimeBlock from "@/components/me/AnimeBlock";
import type { RootState } from "@/store/Store";
import type { DataOfSections } from "@/store/types";
import { useSelector } from "react-redux";
import { CiSquareMore } from "react-icons/ci";
import { Skeleton } from "@/components/ui/skeleton";

function Sections() {
  const topAiringData: DataOfSections[] = useSelector(
    (state: RootState) => state.topAiring.data
  );

  const mostPopularData: DataOfSections[] = useSelector(
    (state: RootState) => state.mostPolpular.data
  );

  const mostFavsData: DataOfSections[] = useSelector(
    (state: RootState) => state.mostFav.data
  );
  // console.log(topAiringData);
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex justify-evenly ">
        <div id="topAiringSection" className="h-[950px] w-[310px] ">
          <div
            id="sectionTitle"
            className="h-10 text-3xl font-bold font-f1 flex items-center justify-center border-b border-[#565656] rounded-xl mb-5 py-6 text-white"
          >
            Top Airing
          </div>

          {topAiringData.length > 0 ? (
            <ul id="items" className="flex flex-col gap-8 items-center">
              {topAiringData.map((item: DataOfSections) => (
                <li key={item.id} className="">
                  <AnimeBlock data={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div className=" h-[835px]  w-full text-white flex flex-col gap-8 items-center">
              {[...Array(6)].map((_) => (
                <Skeleton className="w-72 h-28 min-w-[300px] bg-[#3b3a3a] " />
              ))}
            </div>
          )}

          <div className=" h-12 flex items-end justify-center text-white cursor-pointer pb-1 ">
            <span className="flex items-center justify-center gap-2 hover:text-[#968e8e] ">
              More. . .
              <CiSquareMore className="h-5 w-5  " />
            </span>
          </div>
        </div>

        <div id="mostPopular" className="h-[950px]  w-[310px]">
          <div
            id="sectionTitle"
            className="h-10 text-3xl font-bold font-f1 flex items-center justify-center border-b border-[#565656] rounded-xl mb-5 py-6 text-white"
          >
            Most Popular
          </div>
          {mostPopularData.length > 0 ? (
            <ul id="items" className="flex flex-col gap-8 items-center">
              {mostPopularData.map((item: DataOfSections) => (
                <li key={item.id} className="">
                  <AnimeBlock data={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div className=" h-[835px]  w-full text-white flex flex-col gap-8 items-center">
              {[...Array(6)].map((_) => (
                <Skeleton className="w-72 h-28 min-w-[300px] bg-[#3b3a3a] " />
              ))}
            </div>
          )}
          <div className=" h-12 flex items-end justify-center text-white cursor-pointer pb-1 ">
            <span className="flex items-center justify-center gap-2 hover:text-[#968e8e] ">
              More. . .
              <CiSquareMore className="h-5 w-5  " />
            </span>
          </div>
        </div>

        <div id="mostFavs" className="h-[950px]  w-[320px]">
          <div
            id="sectionTitle"
            className="h-10 text-3xl font-bold font-f1 flex items-center justify-center border-b border-[#565656] rounded-xl mb-5 py-6 text-white"
          >
            Most Favorite
          </div>
          {mostFavsData.length > 0 ? (
            <ul id="items" className="flex flex-col gap-8 items-center">
              {mostFavsData.map((item: DataOfSections) => (
                <li key={item.id} className="">
                  <AnimeBlock data={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div className=" h-[835px]  w-full text-white flex flex-col gap-8 items-center">
              {[...Array(6)].map((_) => (
                <Skeleton className="w-72 h-28 min-w-[300px] bg-[#3b3a3a] " />
              ))}
            </div>
          )}
          <div className=" h-12 flex items-end justify-center text-white cursor-pointer pb-1 ">
            <span className="flex items-center justify-center gap-2 hover:text-[#968e8e] ">
              More. . .
              <CiSquareMore className="h-5 w-5  " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
