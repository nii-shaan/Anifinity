import { useParams } from "react-router-dom";

function Watch() {
  const { slug } = useParams();

  return (
    <div id="container" className="text-white">
      <div></div>
      <div></div>
    </div>
  );
}

export default Watch;
