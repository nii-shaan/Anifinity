import Page from "@/components/me/Page";

function TopAiring() {
  return <Page url={`${import.meta.env.VITE_API_ONE}/anime/zoro/top-airing`} />;
}

export default TopAiring;
