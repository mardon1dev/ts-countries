import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { search, setSearch } = useContext(Context);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname != "/") {
      setSearch("");
    }
  }, [location]);
  return (
    <div className="px-[40px] sticky top-[100px] py-[10px] bg-white z-[5]">
      <h2>Search any country.</h2>
      <input
        type="search"
        placeholder="Search..."
        className="w-full border py-[10px] px-[20px] rounded mt-[10px] outline-none"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
