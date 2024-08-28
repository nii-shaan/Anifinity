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
import { Toaster } from "@/components/ui/toaster";
import ErrorPage from "./pages/ErrorPage.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="" element={<Home />} errorElement={<ErrorPage />} />
      <Route
        path="/top-airing"
        element={<TopAiring />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/most-popular"
        element={<MostPopular />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/most-favorite"
        element={<MostFavorite />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/latest-episodes"
        element={<LatestEpisodes />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/top-upcoming"
        element={<TopUpcomming />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/info/:slug"
        element={<Info />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/watch/:slug"
        element={<Watch />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/search/:slug"
        element={<Search />}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
  </Provider>
  // </React.StrictMode>
);
