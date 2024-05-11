import { FaRegPlayCircle } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import type { DataOfSections } from "@/store/types";

interface AnimeBlockProps {
  data: DataOfSections;
}

function AnimeBlock({ data }: AnimeBlockProps) {
  return (
    <div className="w-72 h-28 flex  justify-center gap-2 bg-[#222831] rounded-lg shadow p-2 overflow-hidden font-f1 text-white cursor-pointer hover:border-b ">
      <div
        id="poster"
        className="flex gap-2 bg-neutral-500 w-20 h-5/5 shrink-0 rounded-lg bg-cover"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="flex w-full flex-col items-start justify-end">
        <span
          id="title"
          className={`ml-1 ${
            data.title.length < 20
              ? "mb-4"
              : data.title.length < 40
              ? "mb-2"
              : "mb-0"
          }`}
        >
          {data.title}
        </span>
        <div className="h-6 w-full  flex justify-between">
          <div
            id="epInfo"
            className=" h-full flex items-center border border-[#5a5858] px-4 gap-1 rounded-xl"
          >
            <FaRegPlayCircle className="h-3 w-3  text-[#96e1a9] " />
            {data.sub}
          </div>
          <div id="type" className="flex items-center gap-0.5">
            <GoDot className="h-3 w-3 mt-0.5 text-[#817f7f]" />
            <span className="text-[#d1cbcb]">{data.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeBlock;
