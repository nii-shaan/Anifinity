import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/HomePage/Home.tsx";
import "./index.css";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";
import TopAiring from "./pages/TopAiring.tsx";
import MostPopular from "./pages/MostPopular.tsx";
import MostFavorite from "./pages/MostFavorite.tsx";
import LatestEpisodes from "./pages/LatestEpisodes.tsx";
import TopUpcomming from "./pages/TopUpcomming.tsx";
import Info from "./pages/Info.tsx";
import Watch from "./pages/Watch.tsx";
import Search from "./pages/Search.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/top-airing" element={<TopAiring />} />
      <Route path="/most-popular" element={<MostPopular />} />
      <Route path="/most-favorite" element={<MostFavorite />} />
      <Route path="/latest-episodes" element={<LatestEpisodes />} />
      <Route path="/top-upcoming" element={<TopUpcomming />} />
      <Route path="/info/:slug" element={<Info />} />
      <Route path="/watch/:slug" element={<Watch />} />
      <Route path="/search/:slug" element={<Search />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
