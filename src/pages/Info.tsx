import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface DataTypes {
  id: string;
  title: string;
  malID: number;
  alID: number;
  japaneseTitle: string;
  image: string;
  description: string;
  type: string;
  url: string;
  subOrDub: string;
  hasSub: boolean;
  hasDub: boolean;
  totalEpisodes: number;
  episodes: {
    id: string;
    number: number;
    title: string;
    isFiller: boolean;
    url: string;
  }[];

  recommendations: {
    id: string;
    title: string;
    url: string;
    image: string;
    duration: string;
    japaneseTitle: string;
    type: string;
    nsfw: false;
    sub: number;
    dub: number;
    episodes: number;
  }[];

  relatedAnime: {
    id: string;
    title: string;
    url: string;
    image: string;
    japaneseTitle: string;
    type: string;
    sub: number;
    dub: number;
    episodes: number;
  }[];
}

function Info() {
  const { slug } = useParams();

  const [data, setData] = useState<DataTypes | null>(null);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/anime/zoro/info?id=${slug}`
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log("in error");
      }
    };

    fetchData();
  }, []);

  return <div className="text-white">{slug}</div>;
}

export default Info;
