import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function CarouselDisplay() {
  const item: any = [
    "6DC5D1",
    "FDE49E",
    "FEB941",
    "FF0080",
    "7469B6",
    "1A4D2E",
    "121481",
  ];
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        orientation="vertical"
        className="w-full "
      >
        <CarouselContent className="  h-[500px]  ">
          {item.map((i: string) => (
            <CarouselItem
              key={i}
              className=" flex items-center justify-center"
              style={{ backgroundColor: `#${i}` }}
            >
              <span className="text-3xl font-semibold text-white">#{i}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </>
  );
}

export default CarouselDisplay;
