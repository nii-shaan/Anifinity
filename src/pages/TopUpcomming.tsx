import { useSelector } from "react-redux";
import type { DataOfSections } from "@/store/types";
import { RootState } from "@/store/Store";
import AnimeBlock from "@/components/me/AnimeBlock";
import { CiSquareMore } from "react-icons/ci";
import { Skeleton } from "@/components/ui/skeleton";

function TopUpcomming() {
  const topUpcommingData: DataOfSections[] = useSelector(
    (state: RootState) => state.topUpcomming.data
  );
  console.log(topUpcommingData);

  return (
    <>
      <div id="topUpcomming" className=" w-full  mt-5">
        <div id="title" className=" text-3xl text-white ml-5 py-2">
          Top Upcomming
        </div>

        {topUpcommingData.length > 0 ? (
          <ul
            id="items"
            className="mt-2 pb-5 flex flex-wrap flex-col justify-evenly gap-y-8 border-t pt-6 desktop:flex-row"
          >
            {topUpcommingData.map((item: DataOfSections) => (
              <li
                key={item.id}
                className="w-full flex justify-center desktop:w-auto "
              >
                <AnimeBlock data={item} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-2 pb-5 flex flex-wrap justify-evenly gap-y-8 border-t pt-6 flex-col desktop:flex-row">
            {[...Array(12)].map((_, i) => (
              <Skeleton
                key={i}
                className="w-72 h-28 min-w-[300px] bg-[#3b3a3a] "
              />
            ))}
          </div>
        )}

        <div
          id="moreBtn"
          className=" h-12 flex items-center justify-start text-white cursor-pointer pb-1"
        >
          <span className=" w-full ml-12 flex items-center justify-center  gap-2 hover:text-[#968e8e] ">
            More. . .
            <CiSquareMore className="h-5 w-5  " />
          </span>
        </div>
      </div>
      ;
    </>
  );
}

export default TopUpcomming;
