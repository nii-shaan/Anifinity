import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

import type { Data } from "@/store/slices/spotlight";

function Carousel() {
  const { loaded, data } = useSelector((state: RootState) => state.spotlight);
  console.log(loaded);

  if (loaded) {
    return (
      <>
        <Swiper
          cssMode={true}
          keyboard={true}
          modules={[Navigation, Scrollbar, Autoplay, Keyboard]}
          autoplay={{
            delay: 2000,
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
          {data.map((data: Data) => (
            <SwiperSlide key={data.id} className="h-full w-full">
              <div className="h-full w-full ">{data.id}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
  return <div className="h-full bg-red-400">Loading</div>;
}

export default Carousel;
