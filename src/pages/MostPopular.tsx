import Page from "@/components/me/Page";

function MostPopular() {
  return <Page url={`${import.meta.env.VITE_API_ONE}/anime/zoro/most-popular`} />;
}

export default MostPopular;
