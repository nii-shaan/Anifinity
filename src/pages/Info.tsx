import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MdOutlineSlideshow } from "react-icons/md";
import { Skeleton } from "@/components/ui/skeleton";
import GobackButton from "@/components/me/GobackButton";

interface DataTypes {
  id: string;
  title: string;
  malID: number;
  alID: number;
  japaneseTitle: string;
  image: string;
  description: string;
  type: string;
  url: string;
  subOrDub: string;
  hasSub: boolean;
  hasDub: boolean;
  totalEpisodes: number;
  episodes: {
    id: string;
    number: number;
    title: string;
    isFiller: boolean;
    url: string;
  }[];

  recommendations: {
    id: string;
    title: string;
    url: string;
    image: string;
    duration: string;
    japaneseTitle: string;
    type: string;
    nsfw: false;
    sub: number;
    dub: number;
    episodes: number;
  }[];

  relatedAnime: {
    id: string;
    title: string;
    url: string;
    image: string;
    japaneseTitle: string;
    type: string;
    sub: number;
    dub: number;
    episodes: number;
  }[];
}

function Info() {
  const { slug } = useParams();

  const [data, setData] = useState<DataTypes | null>(null);

  const [desHidden, setDesHidden] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async (retry: number = 3) => {
      try {
        const response = await fetch(
          `http://localhost:3000/anime/zoro/info?id=${slug}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (retry > 0) {
          console.log("retrying");
          fetchData(retry - 1);
        }
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div id="container" className="text-white">
      <GobackButton />
      <div className="flex flex-col  mt-8">
        {data ? (
          <div
            id="poster"
            className="w-48 h-64 bg-cover bg-no-repeat rounded-md mx-auto"
            style={{ backgroundImage: `url(${data?.image})` }}
          ></div>
        ) : (
          <Skeleton className="w-48 h-64 bg-[#3b3a3a] mx-auto" />
        )}

        {data ? (
          <div
            id="title"
            className={`w-[70%] mt-5 mx-auto ${
              data == undefined
                ? ""
                : data?.title.length < 20
                ? "text-2xl"
                : data?.title.length < 30
                ? "text-xl"
                : "text-lg"
            }`}
          >
            {data?.title}
          </div>
        ) : (
          <Skeleton className="w-[70%] h-12 mt-5 mx-auto bg-[#3b3a3a]" />
        )}
        <div
          id="descriptionContainer"
          className=" w-[80%] flex flex-col  mt-5 mx-auto border p-6 border-[#2e2e2e] "
        >
          {data ? (
            <div
              id="description"
              className={`text-sm w-full overflow-hidden text-[#909090] ${
                !desHidden ? " h-auto" : "max-h-36"
              }`}
            >
              {data?.description}
            </div>
          ) : (
            <Skeleton className="bg-[#3b3a3a] mx-auto  w-full h-36" />
          )}
          <div className="flex ">
            {desHidden ? (
              <span
                onClick={() => {
                  setDesHidden(false);
                }}
                className="flex gap-2 cursor-pointer"
              >
                More
                <FaArrowRightLong className="w-5 h-5 mt-0.5" />
              </span>
            ) : (
              <span
                onClick={() => {
                  setDesHidden(true);
                }}
                className="flex gap-2  cursor-pointer"
              >
                <FaArrowLeftLong className="w-5 h-5 mt-0.5" />
                Less
              </span>
            )}
          </div>
        </div>
        {data ? (
          <div
            id="infos"
            className="my-5 mx-auto desktop:flex desktop:gap-x-10"
          >
            <div>Total Episodes: {data?.totalEpisodes}</div>
            <div>Sub: {data?.hasSub ? "Yes" : "No"}</div>
            <div>Dub: {data?.hasDub ? "Yes" : "No"}</div>
            <div className="flex ">
              <GoDot className="w-4 h-6" />
              {data?.type}
            </div>
          </div>
        ) : (
          <div className="my-5  mx-auto flex flex-col  gap-y-2 desktop:flex-row desktop:gap-x-10">
            <Skeleton className="bg-[#3b3a3a] w-40 h-8 " />
            <Skeleton className="bg-[#3b3a3a] w-28 h-8  " />
            <Skeleton className="bg-[#3b3a3a] w-32 h-8  " />
            <Skeleton className="bg-[#3b3a3a] w-16 h-8  " />
          </div>
        )}
        <div id="watch">
          <Button
            variant="outline"
            className="max-w-40 h-full bg-transparent mx-auto p-36  py-2 flex  hover:border-[#000]"
          >
            <Link to={`/`} className="flex ">
              Watch <MdOutlineSlideshow className="h-6 w-6 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full h-[500px] bg-red-400"></div>
    </div>
  );
}

export default Info;
