import { useSelector } from "react-redux";
import type { DataOfSections } from "@/store/types";
import { RootState } from "@/store/Store";
import AnimeBlock from "@/components/me/AnimeBlock";
import { CiSquareMore } from "react-icons/ci";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

function LatestEps() {
  const latestEpsData: DataOfSections[] = useSelector(
    (state: RootState) => state.latestEp.data
  );
  // console.log(latestEpsData);

  return (
    <>
      <div id="latestEps" className=" w-full  mt-5">
        <div id="title" className=" text-3xl text-white ml-5 py-2">
          Latest Episodes
        </div>

        {latestEpsData.length > 0 ? (
          <ul
            id="items"
            className="mt-2 pb-5 flex flex-col flex-wrap justify-evenly gap-y-8 border-t pt-6 desktop:flex-row"
          >
            {latestEpsData.map((item: DataOfSections) => (
              <li
                key={item.id}
                className="w-full flex justify-center desktop:w-auto"
              >
                <AnimeBlock data={item} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-2 pb-5 flex flex-wrap flex-col justify-evenly gap-y-8 border-t pt-6 desktop:flex-row">
            {[...Array(12)].map((_, i) => (
              <Skeleton
                key={i}
                className="w-72 h-40 min-w-[300px] bg-[#3b3a3a] "
              />
            ))}
          </div>
        )}

        <div
          id="moreBtn"
          className=" h-12 flex items-center justify-start text-white cursor-pointer pb-1"
        >
          <span className="ml-12 w-full flex items-center justify-center  gap-2  ">
          <Link to="/latest-episodes" className="flex hover:text-[#968e8e] text-3xl desktop:text-base">
              More. . .
              <CiSquareMore className="h-10 w-10 desktop:h-5 desktop:w-5  " />
              </Link>
          </span>
        </div>
      </div>
      ;
    </>
  );
}

export default LatestEps;
