import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { MdOutlineSlideshow } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { loadTrendingData } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/Store";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

function Trending() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.trending.data);
  // console.log(data);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_TWO}/anime/home`)
      .then((res) => res.json())
      .then((data) => dispatch(loadTrendingData(data.trendingAnimes)))
      .catch(() => {
        fetch(`${import.meta.env.VITE_API_TWO}/anime/home`)
          .then((res) => res.json())
          .then((data) => dispatch(loadTrendingData(data.trendingAnimes)))
          .catch(() => {
            fetch(`${import.meta.env.VITE_API_TWO}/anime/home`)
              .then((res) => res.json())
              .then((data) => dispatch(loadTrendingData(data.trendingAnimes)));
          });
      });
  }, []);
  return (
    <>
      <div className="flex flex-col text-white w-full items-center ">
        <div className="w-[500px] flex justify-center text-3xl mb-2">
          Trending
        </div>

        <div className="h-[300px] w-[80%] desktop:w-[800px] desktop:h-[200px]">
          {data.length > 0 ? (
            <div className="h-full w-full ">
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
                className="h-full w-full"
              >
                <div className="">
                  {data.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="px-2 py-2 flex bg-[#000000] border border-[#454444]"
                    >
                      <div
                        className="h-full  w-[250px] bg-cover rounded-lg desktop:w-[120px]"
                        style={{ backgroundImage: `url(${item.poster})` }}
                      ></div>

                      <div className=" w-full h-full">
                        <div className="h-[150px] w-full  flex ">
                          <div
                            className={`h-full w-[75%] text-2xl flex items-center p-8  ${
                              item.name.length < 200 ? "desktop:text-sm" : ""
                            }`}
                          >
                            {item.name}
                          </div>
                          <div className="h-full w-[20%]   flex justify-end gap-1">
                            <FaArrowTrendUp className="h-7 w-7 mt-2 ml-1 text-[#96e1a9]" />{" "}
                            <span className="text-4xl">{item.rank}</span>
                          </div>
                        </div>
                        <div className="h-[50px] w-full px-5 desktop:h-[30px]" >
                          <Button
                            variant="outline"
                            className="w-full h-full bg-transparent"
                          >
                            <Link
                              className=" w-full flex items-center justify-center text-3xl desktop:text-base"
                              to={`/info/${item.id}`}
                            >
                              Watch{" "}
                              <MdOutlineSlideshow className="h-6 w-6 ml-2 " />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          ) : (
            <Skeleton className="bg-[#3b3a3a] h-full w-full" />
          )}
        </div>
      </div>
    </>
  );
}

export default Trending;
