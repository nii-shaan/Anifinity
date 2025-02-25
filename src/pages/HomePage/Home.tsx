import { useEffect } from "react";
import Carousel from "./Carousel";
import { useDispatch } from "react-redux";

import {
  loadSpotlightData,
  loadTopAiringData,
  loadMostFavData,
  loadMostPopularData,
  loadLatestEpData,
  loadTopUpcommingData,
} from "../../store/index";
import LatestEps from "./LatestEps";
import Sections from "./Sections";
import TopUpcomming from "./TopUpcomming";
import Trending from "./Trending";


function Home() {
  const dispatch = useDispatch();

  /**
   * Tried Fetching Api 3 times
   */

  //TODO: need to optimize this fetching method
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_TWO}/anime/home`)
      .then((res) => res.json())
      .then((data) => dispatch(loadSpotlightData(data.spotlightAnimes)))
      .catch(() => {
        fetch(`${import.meta.env.VITE_API_TWO}/anime/home`)
          .then((res) => res.json())
          .then((data) => dispatch(loadSpotlightData(data.spotlightAnimes)))
          .catch(() => {
            fetch(`${import.meta.env.VITE_API_TWO}/anime/home`)
              .then((res) => res.json())
              .then((data) =>
                dispatch(loadSpotlightData(data.spotlightAnimes))
              );
          });
      });

    fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/top-airing`)
      .then((res) => res.json())
      .then((taData) => dispatch(loadTopAiringData(taData.results)))
      .catch(() => {
        fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/top-airing`)
          .then((res) => res.json())
          .then((taData) => dispatch(loadTopAiringData(taData.results)))
          .catch(() => {
            fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/top-airing`)
              .then((res) => res.json())
              .then((taData) => dispatch(loadTopAiringData(taData.results)));
          });
      });

    fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/most-popular`)
      .then((res) => res.json())
      .then((data) => dispatch(loadMostPopularData(data.results)))
      .catch(() => {
        fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/most-popular`)
          .then((res) => res.json())
          .then((data) => dispatch(loadMostPopularData(data.results)))
          .catch(() => {
            fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/most-popular`)
              .then((res) => res.json())
              .then((data) => dispatch(loadMostPopularData(data.results)));
          });
      });

    fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/most-favorite`)
      .then((res) => res.json())
      .then((data) => dispatch(loadMostFavData(data.results)))
      .catch(() => {
        fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/most-favorite`)
          .then((res) => res.json())
          .then((data) => dispatch(loadMostFavData(data.results)))
          .catch(() => {
            fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/most-favorite`)
              .then((res) => res.json())
              .then((data) => dispatch(loadMostFavData(data.results)));
          });
      });

    fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/recent-episodes`)
      .then((res) => res.json())
      .then((data) => dispatch(loadLatestEpData(data.results)))
      .catch(() => {
        fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/recent-episodes`)
          .then((res) => res.json())
          .then((data) => dispatch(loadLatestEpData(data.results)))
          .catch(() => {
            fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/recent-episodes`)
              .then((res) => res.json())
              .then((data) => dispatch(loadLatestEpData(data.results)));
          });
      });

    fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/top-upcoming`)
      .then((res) => res.json())
      .then((data) => dispatch(loadTopUpcommingData(data.results)))
      .catch(() => {
        fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/top-upcoming`)
          .then((res) => res.json())
          .then((data) => dispatch(loadTopUpcommingData(data.results)))
          .catch(() => {
            fetch(`${import.meta.env.VITE_API_ONE}/anime/zoro/top-upcoming`)
              .then((res) => res.json())
              .then((data) => dispatch(loadTopUpcommingData(data.results)));
          });
      });
  }, []);

  

  return (
    <div className="bg-[#0f1010] w-full  ">
     
      <div id="carouselSection" className="w-full  h-[600px] ">
        <Carousel />
      </div>
      <div className=" w-full h-[400px] mt-4 flex justify-center items-center">
        <Trending />
      </div>
      <div id="Sections" className="w-full ">
        <Sections />
      </div>
      <div className="w-full ">
        <LatestEps />
      </div>
      <div className="w-full">
        <TopUpcomming />
      </div>
    </div>
  );
}

export default Home;
