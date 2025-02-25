import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MdOutlineSlideshow } from "react-icons/md";
import { Skeleton } from "@/components/ui/skeleton";
import GobackButton from "@/components/me/GobackButton";
import AnimeBlock from "@/components/me/AnimeBlock";

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
  const navigate = useNavigate();

  const [data, setData] = useState<DataTypes | null>(null);

  const [desHidden, setDesHidden] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async (retry: number = 3) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ONE}/anime/zoro/info?id=${slug}`
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
    <div id="container" className="text-white bg-[#0f1010] py-10">
      <GobackButton />
      <div className="flex flex-col items-center  mt-8">
        {data ? (
          <div
            id="poster"
            className="w-72 h-96 desktop:w-48 desktop:h-64 bg-cover bg-no-repeat rounded-md mx-auto"
            style={{ backgroundImage: `url(${data?.image})` }}
          ></div>
        ) : (
          <Skeleton className="w-72 h-96 desktop:w-48 desktop:h-64 bg-[#3b3a3a] mx-auto" />
        )}

        {data ? (
          <div
            id="title"
            className={`w-[70%] mt-5 flex justify-center text-3xl  ${
              data == undefined || data?.title == undefined
                ? ""
                : data?.title.length < 20
                ? "desktop:text-2xl"
                : data?.title.length < 30
                ? "desktop:text-xl"
                : "desktop:text-lg"
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
              className={`text-2xl desktop:text-sm w-full overflow-hidden text-[#909090] ${
                !desHidden ? " h-auto" : "max-h-40 desktop:max-h-36"
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
                className="flex gap-2 cursor-pointer text-3xl  desktop:text-base"
              >
                More
                <FaArrowRightLong className="w-5 h-5 mt-0.5" />
              </span>
            ) : (
              <span
                onClick={() => {
                  setDesHidden(true);
                }}
                className="flex gap-2  cursor-pointer text-3xl  desktop:text-base"
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
            className="my-5 mx-auto desktop:flex desktop:gap-x-10 text-3xl desktop:text-base"
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
            disabled={!data}
            variant="outline"
            className="max-w-40 h-full bg-transparent mx-auto text-3xl desktop:text-base p-36  py-2 flex  hover:border-[#000]"
            onClick={() => {
              navigate(`/watch/${data?.id}`);
            }}
          >
            <span className="flex items-center">
              Watch{" "}
              <MdOutlineSlideshow className="h-10 w-10 desktop:h-6 desktop:w-6 ml-2 " />
            </span>
          </Button>
        </div>
      </div>
      <div id="recommendations" className="w-full mt-10 ">
        <div id="heading" className="text-2xl  pl-5 border-b">
          Recommended for you
        </div>
        {data ? (
          <ul className="flex flex-col items-center gap-y-5 pt-5 desktop:flex-row desktop:flex-wrap desktop:gap-5 desktop:justify-center">
            {data?.recommendations?.map((item) => (
              <li
                key={item.id}
                className="w-full flex justify-center desktop:w-auto"
              >
                <AnimeBlock data={item} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-y-5 pt-5 desktop:flex-row desktop:flex-wrap desktop:gap-5 desktop:justify-center">
            {[...Array(20)].map((_, i) => (
              <Skeleton
                key={i}
                className="w-[80%] h-40   bg-[#3b3a3a] rounded-lg   desktop:w-[300px]"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Info;
