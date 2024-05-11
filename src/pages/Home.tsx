import { useEffect } from "react";
import Carousel from "./Carousel";
import { useDispatch } from "react-redux";

import {
  loadSpotlightData,
  loadTopAiringData,
  loadMostFavData,
  loadMostPopularData,
} from "../store/index";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/anime/zoro/top-airing")
      .then((res) => res.json())
      .then((data) => dispatch(loadSpotlightData(data.results)));

    fetch("http://localhost:3000/anime/zoro/top-airing")
      .then((res) => res.json())
      .then((taData) => dispatch(loadTopAiringData(taData.results)));

    fetch("http://localhost:3000/anime/zoro/most-popular")
      .then((res) => res.json())
      .then((data) => dispatch(loadMostPopularData(data.results)));

    fetch("http://localhost:3000/anime/zoro/most-favorite")
      .then((res) => res.json())
      .then((data) => dispatch(loadMostFavData(data.results)));
  }, []);
  return (
    <div className="bg-[#0f1010] h-screen">
      <div id="carouselSection" className="w-full h-[500px] bg-white  ">
        <Carousel />
      </div>
      <div id="sections" className="bg-white h-80">
        <div id="topairing" className="h-[500px]"></div>
      </div>
    </div>
  );
}

export default Home;
