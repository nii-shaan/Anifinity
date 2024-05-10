import Carousel from "./Carousel";

function Home() {
  const item: string[] = [
    "6DC5D1",
    "FDE49E",
    "FEB941",
    "FF0080",
    "7469B6",
    "1A4D2E",
    "121481",
  ];
  return (
    <div className="bg-[#0f1010] h-screen">
      <div id="carouselSection" className="w-full h-[500px] bg-white  ">
        <Carousel data={item} />
      </div>
    </div>
  );
}

export default Home;
