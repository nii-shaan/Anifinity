import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimeBlock from "@/components/me/AnimeBlock";
import type { DataOfSections } from "@/store/types";

function Search() {
  const { slug } = useParams();
  const [results, setResults] = useState<DataOfSections[] | []>([]);
  console.log(results);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      });
  }, [slug]);

  return (
    <>
      {window.scrollTo(0, 0)}
      <div className="py-5 bg-[#0f1010] min-h-screen">
        <div id="text" className="text-white text-4xl desktop:text-2xl">
          {" "}
          Showing results for: <span className="text-[#96e1a9]">{slug}</span>
        </div>
        <ul
          id="results"
          className=" mt-10 flex flex-col gap-8 desktop:flex-row desktop:flex-wrap desktop:justify-center"
        >
          {results!
            ? results.map((item) => (
                <li
                  key={item.id}
                  className="w-full flex justify-center desktop:w-auto"
                >
                  <AnimeBlock data={item} />
                </li>
              ))
            : ""}
        </ul>
      </div>
    </>
  );
}

export default Search;
