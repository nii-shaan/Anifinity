import { useEffect } from "react";
import Carousel from "./Carousel";
import { UseDispatch, useDispatch } from "react-redux";
import { loadData } from "@/store/slices/spotlight";

function Home() {
 

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/anime/zoro/top-airing")
      .then((res) => res.json())
      .then((data) => dispatch(loadData(data.results)));
  }, []);
  return (
    <div className="bg-[#0f1010] h-screen">
      <div id="carouselSection" className="w-full h-[500px] bg-white  ">
        <Carousel/>
      </div>
    </div>
  );
}

export default Home;
