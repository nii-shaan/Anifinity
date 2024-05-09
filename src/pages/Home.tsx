import CarouselDisplay from "./CarouselDisplay";

function Home() {
  return (
    <div className="bg-[#0f1010] h-screen">
      <div id="carouselSection" className="w-full h-[500px]  ">
        <CarouselDisplay />
      </div>
    </div>
  );
}

export default Home;
