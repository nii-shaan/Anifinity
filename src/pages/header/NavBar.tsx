import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue !== "") {
      navigate(`/search/${searchValue}`);
      setSearchValue("");
    }
  };

  return (
    <header className="h-16  text-[#F2EFE9] flex justify-end sticky top-0 backdrop-blur-3xl  z-10 ">
      <div className="h-full w-full   flex justify-between items-center">
        <div id="searchBar" className=" text-[#F7F5FB] w-[50%]  h-9  ">
          <form
            action=" "
            className="w-full h-full bg-[#222831]  ml-10 flex items-center border-[#878787] border rounded-xl"
            onSubmit={handleSubmit}
          >
            <input
              value={searchValue}
              onChange={handleSearchValueChange}
              type="text"
              placeholder="Search"
              className="w-[90%]  h-full outline-none rounded-l-xl text-center bg-transparent"
            />
            <div className="w-[10%] h-full rounded-r-xl flex items-center justify-center hover:bg-[#3b3a3a] ">
              <button type="submit">
                <FaSearch className="w-6 h-full  cursor-pointer text-[#878787]" />
              </button>
            </div>
          </form>
        </div>
        <div
          id="userSection"
          className="mr-5 p-3 rounded-2xl cursor-pointer hover:bg-[#3b3a3a]"
        >
          <FaUser className="h-8 w-10 " />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
