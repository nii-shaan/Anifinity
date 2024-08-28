import Page from "@/components/me/Page";

function MostFavorite() {
  return (
    <Page url={`${import.meta.env.VITE_API_ONE}/anime/zoro/most-favorite`} />
  );
}

export default MostFavorite;
