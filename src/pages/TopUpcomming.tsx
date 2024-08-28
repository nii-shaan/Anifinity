import Page from "@/components/me/Page";
function TopUpcomming() {
  return (
    <Page url={`${import.meta.env.VITE_API_ONE}/anime/zoro/top-upcoming`} />
  );
}
export default TopUpcomming;
