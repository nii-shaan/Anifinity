import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCreative } from "swiper/modules";

interface Data {
  data: string[];
}

function Carousel({ data }: Data) {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCreative,
          Autoplay,
        ]}
        autoplay={{
          delay: 2000,
        }}
        scrollbar={{
          hide: false,
        }}
        loop={true}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="h-full"
      >
        {data.map((i: string) => (
          <SwiperSlide
            key={i}
            className="h-full"
            style={{ backgroundColor: `#${i}` }}
          >
            {i}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
