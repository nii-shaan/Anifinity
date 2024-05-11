import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

import type { DataOfSections } from "@/store/types";

function Carousel() {
  const { loaded, data } = useSelector((state: RootState) => state.spotlight);
  // console.log(loaded);

  if (loaded) {
    return (
      <>
        <Swiper
          cssMode={true}
          keyboard={true}
          modules={[Navigation, Scrollbar, Autoplay, Keyboard]}
          autoplay={{
            delay: 2500,
          }}
          scrollbar={{
            hide: false,
          }}
          loop={true}
          navigation
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="h-full w-full"
        >
          {data.map((data: DataOfSections) => (
            <SwiperSlide key={data.id} className="h-full w-full ">
              <div
                className="relative h-full w-full bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${data.image})` }}
              >
                <div className="absolute inset-0"></div>
                <div className="absolute inset-0 bg-vignette"></div>
                <span className="relative font-f1 ">{data.id}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
  return <div className="h-full bg-red-400">Loading</div>;
}

export default Carousel;
