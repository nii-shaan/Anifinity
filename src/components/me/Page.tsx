import GobackButton from "@/components/me/GobackButton";
import { useEffect, useState } from "react";
import AnimeBlock from "./AnimeBlock";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface PagePropsType {
  url: string;
}
import { Button } from "../ui/button";

export interface Datas {
  id: string;
  title: string;
  url: string;
  image: string;
  duration: string;
  japaneseTitle: string;
  nsfw: boolean;
  type: string;
  sub: number;
  dub: number;
  episodes: number;
}

interface Result {
  currentPage: number | null;
  hasNextPage: boolean;
  totalPages: number | null;
  results: Datas[];
}

function Page({ url }: PagePropsType) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  //   console.log(currentPage);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  //   console.log(totalPages);

  const [error, setError] = useState<string | null>(null);

  const [datas, setDatas] = useState<Datas[]>([]);
  //   console.log(datas);

  useEffect(() => {
    const fetchData = async (retryCount: number = 5) => {
      try {
        const response = await fetch(`${url}?page=${currentPage}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Result = await response.json();
        setHasNextPage(data.hasNextPage);
        setDatas(data.results);
        setTotalPages(data.totalPages);
        setError(null);
      } catch (err) {
        console.log("error:", err);
        if (retryCount > 0) {
          console.log("Retrying...");
          fetchData(retryCount - 1);
        } else {
          console.log("Failed after multiple times");
        }
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (totalPages !== null) {
      if (hasNextPage && currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    }
  };

  return (
    <div id="main" className="w-full">
      <div id="gobackButton" className="w-full my-4">
        <GobackButton />
      </div>
      <ul className="pt-8 w-full flex flex-col items-center desktop:flex-row desktop:flex-wrap gap-8 desktop:justify-center">
        {datas.map((item) => (
          <li
            key={item.id}
            className="w-full flex justify-center desktop:w-auto"
          >
            <AnimeBlock data={item} />
          </li>
        ))}
      </ul>

      <div
        id="paginateSec"
        className="my-10 w-full flex justify-center   text-white"
      >
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          className="px-3 py-1 flex border rounded-xl ml-5 bg-transparent  hover:border-black"
        >
          {" "}
          <IoIosArrowRoundBack className="h-6 w-6" />
        </Button>

        <div id="nums" className="  flex items-center ">
          <span
            className="cursor-pointer px-3 ml-2  rounded-lg hover:bg-[#4e4d4d]"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            {currentPage != 1 ? currentPage - 1 : null}
          </span>
          <span className="text-green-400 mx-7 text-2xl border px-3 rounded-full">
            {currentPage}
          </span>
          <span
            className="cursor-pointer px-3  rounded-lg hover:bg-[#4e4d4d]"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            {currentPage != totalPages ? currentPage + 1 : null}
          </span>
          {totalPages == null ? null : currentPage !== totalPages &&
            currentPage < totalPages - 2 ? (
            <span
              className="ml-2 cursor-pointer px-3  rounded-lg hover:bg-[#4e4d4d]"
              onClick={() => {
                setCurrentPage(totalPages);
              }}
            >
              {totalPages != null ? totalPages : null}
            </span>
          ) : null}
        </div>
        <Button
          variant="outline"
          onClick={handleNextPage}
          className="px-3 py-1 flex border rounded-xl ml-5 bg-transparent  hover:border-black"
        >
          <IoIosArrowRoundForward className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

export default Page;
