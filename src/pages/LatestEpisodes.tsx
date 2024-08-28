import Page from "@/components/me/Page";

function LatestEpisodes() {
  return (
    <Page url={`${import.meta.env.VITE_API_ONE}/anime/zoro/recent-episodes`} />
  );
}

export default LatestEpisodes;
