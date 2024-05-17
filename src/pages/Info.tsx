import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MdOutlineSlideshow } from "react-icons/md";

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
  console.log(data);

  const [desHidden, setDesHidden] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/anime/zoro/info?id=${slug}`
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log("in error");
      }
    };

    fetchData();
  }, []);

  return (
    <div id="container" className="text-white">
      <div className="flex flex-col items-center mt-8">
        <div
          id="poster"
          className="w-48 h-64 bg-cover bg-no-repeat rounded-md"
          style={{ backgroundImage: `url(${data?.image})` }}
        ></div>
        <div
          id="title"
          className={`w-[70%] text-center mt-5 ${
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
        <div
          id="descriptionContainer"
          className=" w-[80%] flex flex-col items-start mt-5 border p-6 border-[#2e2e2e] "
        >
          <div
            id="description"
            className={`text-sm w-full overflow-hidden text-[#909090] ${
              !desHidden ? " h-auto" : "max-h-36"
            }`}
          >
            {data?.description}
          </div>
          <div className="flex">
            {desHidden ? (
              <span
                onClick={() => {
                  setDesHidden(false);
                }}
                className="flex gap-2 items-center cursor-pointer"
              >
                More
                <FaArrowRightLong className="w-5 h-5 mt-0.5" />
              </span>
            ) : (
              <span
                onClick={() => {
                  setDesHidden(true);
                }}
                className="flex gap-2 items-center cursor-pointer"
              >
                <FaArrowLeftLong className="w-5 h-5 mt-0.5" />
                Less
              </span>
            )}
          </div>
        </div>
        <div id="infos">
          <div>Total Episodes: {data?.totalEpisodes}</div>
          <div>Sub: {data?.hasSub ? "Yes" : "No"}</div>
          <div>Dub: {data?.hasDub ? "Yes" : "No"}</div>
          <div className="flex ">
            <GoDot className="w-4 h-6" />
            {data?.type}
          </div>
        </div>
        <div id="watch">
          <Button
            variant="outline"
            className="w-full h-full bg-transparent px-28 py-2 flex justify-center items-center"
          >
            <Link to={`/`} className="flex items-center">
              Watch <MdOutlineSlideshow className="h-6 w-6 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Info;
