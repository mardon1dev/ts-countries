import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between  items-center h-[100px] px-[40px] sticky top-0 z-[10] bg-white w-full">
      <Link to="/" className="text-[30px]">
        Country
      </Link>
      <Link to="/wishlist" className="p-[10px] bg-red-600 text-white rounded">
        Wishlist
      </Link>
    </header>
  );
};

export default Header;
