import AnimeBlock from "@/components/me/AnimeBlock";
import type { RootState } from "@/store/Store";
import type { DataOfSections } from "@/store/types";
import { useSelector } from "react-redux";
import { CiSquareMore } from "react-icons/ci";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

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
      <div className="w-full h-full flex flex-col items-center desktop:flex-row ">
        <div id="topAiringSection" className="min-h-[950px] w-full mb-10  ">
          <div
            id="sectionTitle"
            className="h-10 text-3xl font-bold font-f1 flex items-center justify-center border-b border-[#565656] rounded-xl mb-5 py-6 text-white"
          >
            Top Airing
          </div>

          {topAiringData.length > 0 ? (
            <ul id="items" className="w-full flex flex-col gap-y-8   ">
              {topAiringData.map((item: DataOfSections) => (
                <li key={item.id} className="w-full  flex justify-center ">
                  <AnimeBlock data={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="   w-full text-white flex flex-col gap-8 items-center">
              {[...Array(6)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="w-72 h-40 min-w-[300px] bg-[#3b3a3a] "
                />
              ))}
            </div>
          )}

          <div
            id="moreBtn"
            className=" h-12 flex items-center justify-start text-white cursor-pointer pb-1 mt-6"
          >
            <span className="ml-12 w-full flex items-center justify-center  gap-2  ">
              <Link
                to="/latest-episodes"
                className="flex hover:text-[#968e8e] text-3xl desktop:text-base"
              >
                More. . .
                <CiSquareMore className="h-10 w-10 desktop:h-5 desktop:w-5  " />
              </Link>
            </span>
          </div>
        </div>

        <div id="mostPopular" className="min-h-[950px] w-full mb-10">
          <div
            id="sectionTitle"
            className="h-10 text-3xl font-bold font-f1 flex items-center justify-center border-b border-[#565656] rounded-xl mb-5 py-6 text-white"
          >
            Most Popular
          </div>
          {mostPopularData.length > 0 ? (
            <ul
              id="items"
              className=" w-full flex flex-col gap-8 items-center "
            >
              {mostPopularData.map((item: DataOfSections) => (
                <li key={item.id} className=" w-full flex justify-center">
                  <AnimeBlock data={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="  w-full text-white flex flex-col gap-8 items-center">
              {[...Array(6)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="w-72 h-40 min-w-[300px] bg-[#3b3a3a] "
                />
              ))}
            </div>
          )}
          <div
          id="moreBtn"
          className=" h-12 flex items-center justify-start text-white cursor-pointer pb-1 mt-6"
        >
          <span className="ml-12 w-full flex items-center justify-center  gap-2  ">
          <Link to="/latest-episodes" className="flex hover:text-[#968e8e] text-3xl desktop:text-base">
              More. . .
              <CiSquareMore className="h-10 w-10 desktop:h-5 desktop:w-5  " />
              </Link>
          </span>
        </div>
        </div>

        <div id="mostFavs" className="min-h-[950px] w-full mb-10">
          <div
            id="sectionTitle"
            className="h-10 text-3xl font-bold font-f1 flex items-center justify-center border-b border-[#565656] rounded-xl mb-5 py-6 text-white"
          >
            Most Favorite
          </div>
          {mostFavsData.length > 0 ? (
            <ul id="items" className="w-full flex flex-col gap-8 items-center ">
              {mostFavsData.map((item: DataOfSections) => (
                <li key={item.id} className="w-full flex justify-center">
                  <AnimeBlock data={item} />
                </li>
              ))}
            </ul>
          ) : (
            <div className=" w-full text-white flex flex-col gap-8 items-center">
              {[...Array(6)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="w-72 h-40 min-w-[300px] bg-[#3b3a3a] "
                />
              ))}
            </div>
          )}
          <div
            id="moreBtn"
            className=" h-12 flex items-center justify-start text-white cursor-pointer pb-1 mt-6"
          >
            <span className="ml-12 w-full flex items-center justify-center  gap-2  ">
              <Link
                to="/latest-episodes"
                className="flex hover:text-[#968e8e] text-3xl desktop:text-base"
              >
                More. . .
                <CiSquareMore className="h-10 w-10 desktop:h-5 desktop:w-5  " />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
