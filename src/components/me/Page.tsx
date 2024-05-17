import GobackButton from "@/components/me/GobackButton";
import { useEffect, useState } from "react";

interface PagePropsType {
  url: string;
}

interface Datas {
  id: string;
  title: string;
  url: string;
  image: string;
  duration: string;
  japaneseTitle: string;
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
  console.log(currentPage);

  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  const [totalPages, setTotalPages] = useState<number | null>(null);

  const [datas, setDatas] = useState<Datas[] | []>([]);
  console.log(datas);

  useEffect(() => {
    fetch(`${url}?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setHasNextPage(data.hasNextPage);
        setDatas(data.results);
        setTotalPages(data.totalPages)
      });
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
      <div id="gobackButton" className="w-full">
        <GobackButton />
      </div>
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
