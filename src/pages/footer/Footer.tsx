import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="h-[300px] w-full bg-[#191919] text-[#96e1a9] flex flex-col items-center pt-6">
      <div className="text-2xl desktop:text-xl">
        <span>Made By</span>{" "}
        <span
          className="hover:underline hover:text-[#767bdf] cursor-pointer"
          onClick={() => {
            window.open("https://github.com/nishan812");
          }}
        >
          Nishan
        </span>
      </div>
      <div className="h-10 w-full mt-5 pl-8 text-4xl ">
        <div>Enjoy some</div>
        <ul className="text-2xl flex  gap-5 pt-6 flex-wrap">
          <li
            onClick={() => navigate("/search/one piece")}
            className="cursor-pointer hover:underline"
          >
            One Piece
          </li>
          <li
            onClick={() => navigate("/search/naruto")}
            className="cursor-pointer hover:underline"
          >
            Naruto
          </li>
          <li
            onClick={() => navigate("/search/bleach")}
            className="cursor-pointer hover:underline"
          >
            Bleach
          </li>
          <li
            onClick={() => navigate("/search/deathnote")}
            className="cursor-pointer hover:underline"
          >
            Deathnote
          </li>
          <li
            onClick={() => navigate("/search/attack on titan")}
            className="cursor-pointer hover:underline"
          >
            Attack on Titan
          </li>
          <li
            onClick={() => navigate("/search/demon slayer")}
            className="cursor-pointer hover:underline"
          >
            Demon Slayer
          </li>
          <li
            onClick={() => navigate("/search/jujutsu kaisen")}
            className="cursor-pointer hover:underline"
          >
            Jujutsu Kaisen
          </li>
          <li
            onClick={() => navigate("/search/chainsaw man")}
            className="cursor-pointer hover:underline"
          >
            Chainsaw man
          </li>
          <li
            onClick={() => navigate("/search/black clover")}
            className="cursor-pointer hover:underline"
          >
            Black Clover
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
