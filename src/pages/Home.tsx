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
} from "../store/index";
import LatestEps from "./LatestEps";

import Sections from "./Sections";
import TopUpcomming from "./TopUpcomming";

function Home() {
  const dispatch = useDispatch();

  /**
   * Tried Fetching Api 3 times
   */
  useEffect(() => {
    fetch("http://localhost:3000/anime/zoro/top-airing")
      .then((res) => res.json())
      .then((data) => dispatch(loadSpotlightData(data.results)))
      .catch(() => {
        fetch("http://localhost:3000/anime/zoro/top-airing")
          .then((res) => res.json())
          .then((data) => dispatch(loadSpotlightData(data.results)))
          .catch(() => {
            fetch("http://localhost:3000/anime/zoro/top-airing")
              .then((res) => res.json())
              .then((data) => dispatch(loadSpotlightData(data.results)));
          });
      });

    fetch("http://localhost:3000/anime/zoro/top-airing")
      .then((res) => res.json())
      .then((taData) => dispatch(loadTopAiringData(taData.results)))
      .catch(() => {
        fetch("http://localhost:3000/anime/zoro/top-airing")
          .then((res) => res.json())
          .then((taData) => dispatch(loadTopAiringData(taData.results)))
          .catch(() => {
            fetch("http://localhost:3000/anime/zoro/top-airing")
              .then((res) => res.json())
              .then((taData) => dispatch(loadTopAiringData(taData.results)));
          });
      });

    fetch("http://localhost:3000/anime/zoro/most-popular")
      .then((res) => res.json())
      .then((data) => dispatch(loadMostPopularData(data.results)))
      .catch(() => {
        fetch("http://localhost:3000/anime/zoro/most-popular")
          .then((res) => res.json())
          .then((data) => dispatch(loadMostPopularData(data.results)))
          .catch(() => {
            fetch("http://localhost:3000/anime/zoro/most-popular")
              .then((res) => res.json())
              .then((data) => dispatch(loadMostPopularData(data.results)));
          });
      });

    fetch("http://localhost:3000/anime/zoro/most-favorite")
      .then((res) => res.json())
      .then((data) => dispatch(loadMostFavData(data.results)))
      .catch(() => {
        fetch("http://localhost:3000/anime/zoro/most-favorite")
          .then((res) => res.json())
          .then((data) => dispatch(loadMostFavData(data.results)))
          .catch(() => {
            fetch("http://localhost:3000/anime/zoro/most-favorite")
              .then((res) => res.json())
              .then((data) => dispatch(loadMostFavData(data.results)));
          });
      });

    fetch("http://localhost:3000/anime/zoro/recent-episodes")
      .then((res) => res.json())
      .then((data) => dispatch(loadLatestEpData(data.results)))
      .catch(() => {
        fetch("http://localhost:3000/anime/zoro/recent-episodes")
          .then((res) => res.json())
          .then((data) => dispatch(loadLatestEpData(data.results)))
          .catch(() => {
            fetch("http://localhost:3000/anime/zoro/recent-episodes")
              .then((res) => res.json())
              .then((data) => dispatch(loadLatestEpData(data.results)));
          });
      });

    fetch("http://localhost:3000/anime/zoro/top-upcoming")
      .then((res) => res.json())
      .then((data) => dispatch(loadTopUpcommingData(data.results)))
      .catch(() => {
        fetch("http://localhost:3000/anime/zoro/top-upcoming")
          .then((res) => res.json())
          .then((data) => dispatch(loadTopUpcommingData(data.results)))
          .catch(() => {
            fetch("http://localhost:3000/anime/zoro/top-upcoming")
              .then((res) => res.json())
              .then((data) => dispatch(loadTopUpcommingData(data.results)));
          });
      });
  }, []);

  return (
    <div className="bg-[#0f1010] w-full  ">
      <div id="carouselSection" className="w-full min-h-[500px] h-[500px] ">
        <Carousel />
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
