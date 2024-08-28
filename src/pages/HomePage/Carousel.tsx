import { Swiper, SwiperSlide } from "swiper/react";
import { LuArrowUpDown } from "react-icons/lu";
import { Navigation, Scrollbar, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";
import type { Data } from "@/store/slices/spotlight";
import { Skeleton } from "@/components/ui/skeleton";
import { ThreeDots } from "react-loader-spinner";
import { FaRegPlayCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MdOutlineSlideshow } from "react-icons/md";

function Carousel() {
  const { loaded, data } = useSelector((state: RootState) => state.spotlight);
  // console.log(data);

  if (loaded) {
    return (
      <>
        <Swiper
          cssMode={true}
          keyboard={true}
          modules={[Navigation, Scrollbar, Autoplay, Keyboard]}
          autoplay={{
            delay: 4000,
          }}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          loop={true}
          navigation
          spaceBetween={0}
          slidesPerView={1}
          className="h-full w-full"
        >
          {data.map((data: Data) => (
            <SwiperSlide key={data.id} className="h-full w-full ">
              <div
                className="relative h-full w-full bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${data.poster})` }}
              >
                <div className="absolute inset-0"></div>
                <div className="absolute inset-0 bg-vignette"></div>
                {/* <span className="relative font-f1 ">{data.id}</span> */}
                <div
                  id="secOne"
                  className="h-[60%] w-full text-white relative z-10 "
                >
                  <div
                    id="rank"
                    className=" flex justify-start gap-x-1 pl-8 pt-4 "
                  >
                    <LuArrowUpDown className="h-6 w-6 mt-2.5" />
                    <span className="text-5xl text-[#96e1a9]">{data.rank}</span>
                  </div>
                  <div
                    id="title"
                    className={`text-[#96e1a9] max-w-[300px] pl-8 pt-5 ${
                      data.name.length < 20
                        ? "text-4xl"
                        : data.name.length < 50
                        ? "text-2xl desktop:text-xl"
                        : "text-xl desktop:text-lg"
                    }`}
                  >
                    {data.name}
                  </div>
                  <div
                    id="description"
                    className="text-[#c4c2c2] desktop:text-sm max-w-[350px] pl-12 pt-2 "
                  >
                    {data.description.slice(0, 230) + "..."}
                  </div>
                </div>
                <div id="secTwo" className="h-[40%]  w-full  relative z-10">
                  <div
                    id="info"
                    className="text-white max-w-[300px] flex flex-col gap-y-5 pl-5 pt-2"
                  >
                    <div
                      id="epInfo"
                      className=" text-xl desktop:text-base h-full flex items-center justify-center border border-[#5a5858] px-4 gap-1 rounded-xl max-w-[100px] py-2 desktop:py-1"
                    >
                      <FaRegPlayCircle className="h-5 w-5 desktop:h-3  desktop:w-3  text-[#96e1a9] " />
                      {data.episodes.sub}
                    </div>
                    <div className="flex gap-x-4 text-sm">
                      {data.otherInfo.map((item) => (
                        <span key={item} className="text-lg desktop:text-base">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div id="watchBtn" className="max-w-[300px] pl-5 mt-10 ">
                    <Link to={`/info/${data.id}`} className="h-full w-full">
                      <Button
                        variant="outline"
                        className="w-full h-full bg-transparent text-white text-xl desktop:text-base"
                      >
                        Watch <MdOutlineSlideshow className="h-6 w-6 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  } else {
  }
  return (
    <div className="w-full h-[500px] flex justify-center ">
      <Skeleton className="w-[98%] h-[600px] bg-[#3b3a3a] flex items-center justify-center">
        <ThreeDots
          visible={true}
          height="120"
          width="120"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </Skeleton>
    </div>
  );
}

export default Carousel;
