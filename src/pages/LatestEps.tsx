import { useSelector } from "react-redux";
import type { DataOfSections } from "@/store/types";
import { RootState } from "@/store/Store";
import AnimeBlock from "@/components/me/AnimeBlock";
import { CiSquareMore } from "react-icons/ci";

function LatestEps() {
  const latestEpsData: DataOfSections[] = useSelector(
    (state: RootState) => state.latestEp.data
  );
  console.log(latestEpsData);

  return (
    <>
      <div id="latestEps" className=" w-full  mt-5">
        <div id="title" className=" text-3xl text-white ml-5 py-2">
          Latest Episodes
        </div>
        <ul
          id="items"
          className="mt-2 pb-5 flex flex-wrap justify-evenly gap-y-8 border-t pt-6"
        >
          {latestEpsData.map((item) => (
            <li key={item.id}>
              <AnimeBlock data={item} />
            </li>
          ))}
        </ul>

        <div
          id="moreBtn"
          className=" h-12 flex items-center justify-start text-white cursor-pointer pb-1"
        >
          <span className="ml-12 flex items-center justify-center  gap-2 hover:text-[#968e8e] ">
            More. . .
            <CiSquareMore className="h-5 w-5  " />
          </span>
        </div>
      </div>
      ;
    </>
  );
}

export default LatestEps;
