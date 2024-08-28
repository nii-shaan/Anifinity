import store from "./Store";

import { loadLatestEpData } from "./slices/latestEp";
import { loadMostFavData } from "./slices/mostFav";
import { loadMostPopularData } from "./slices/mostPolpular";
import { loadSpotlightData } from "./slices/spotlight";
import { loadTopAiringData } from "./slices/topairing";
import { loadTopUpcommingData } from "./slices/topUpcomming";
import { loadTrendingData } from "./slices/trending";

export {
  store,
  loadLatestEpData,
  loadMostFavData,
  loadMostPopularData,
  loadSpotlightData,
  loadTopAiringData,
  loadTopUpcommingData,
  loadTrendingData,
};
