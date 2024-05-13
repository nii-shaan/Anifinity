import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { MdOutlineSlideshow } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

interface Data {
  rank: number;
  name: string;
  id: string;
  poster: string;
}

function Trending() {
  const [data, setData] = useState<Data[] | []>([]);
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:4000/anime/home")
      .then((res) => res.json())
      .then((data) => setData(data.trendingAnimes));
  }, []);
  return (
    <>
      <div className="flex flex-col text-white">
        <div className="w-[500px] flex justify-center text-3xl mb-2">
          Trending
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          direction="vertical"
          className="h-[200px]  w-[500px]"
        >
          {data.map((item) => (
            <SwiperSlide className="px-2 py-2 flex bg-[#000000] border border-[#454444]">
              <div
                className="h-full  w-[120px] bg-cover rounded-lg"
                style={{ backgroundImage: `url(${item.poster})` }}
              ></div>

              <div className=" w-[380px] h-full">
                <div className="h-[150px] w-full  flex">
                  <div
                    className={`h-full w-[75%] text-lg flex items-center p-4  ${
                      item.name.length < 200 ? "text-sm" : ""
                    }`}
                  >
                    {item.name}
                  </div>
                  <div className="h-full w-[20%]  flex  gap-1">
                    <FaArrowTrendUp className="h-7 w-7 mt-2 ml-1 text-[#96e1a9]" />{" "}
                    <span className="text-4xl">{item.rank}</span>
                  </div>
                </div>
                <div className="h-[30px] w-full px-5 ">
                  <Button
                    variant="outline"
                    className="w-full h-full bg-transparent"
                  >
                    Watch <MdOutlineSlideshow className="h-6 w-6 ml-2 " />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Trending;
