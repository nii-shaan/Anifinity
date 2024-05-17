import GobackButton from "@/components/me/GobackButton";
import { useEffect, useState } from "react";
import AnimeBlock from "./AnimeBlock";

interface PagePropsType {
  url: string;
}

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
  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
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
      <button onClick={handlePreviousPage} className="text-white">
        Previous Page
      </button>
      <button onClick={handleNextPage} className="text-white">
        Next page
      </button>
    </div>
  );
}

export default Page;
