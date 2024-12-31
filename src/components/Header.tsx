import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

const Header = () => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  return (
    <>
    <header className="max-w-screen-2xl flex text-center justify-between items-center py-4 px-5 text-black mx-auto max-sm:px-5 max-[400px]:px-3">
      <HiBars3 className="text-2xl max-sm:text-xl mr-24 max-lg:mr-10 cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
      <Link
        to="/"
        className="flex items-center text-3xl font-light tracking-[1.08px] max-sm:text-2xl max-[400px]:text-1xl"
      >{/*
      <img 
      src="./src/assets/logo.png" 
      alt="Logo" 
      className="w-8 h-8 mr-2 max-sm:w-6 max-sm:h-6"
    /> */}
    PACIFICA
      </Link>
      <div className="flex gap-8 items-center max-sm:gap-4">
        <Link to="/search">
          <HiOutlineMagnifyingGlass className="text-2xl max-sm:text-xl" />
        </Link>
        <Link to="/login">
          <HiOutlineUser className="text-2xl max-sm:text-xl" />
        </Link>
        <Link to="/cart">
          <HiOutlineShoppingBag className="text-2xl max-sm:text-xl" />
        </Link>
      </div>
    </header>
    <SidebarMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};
export default Header;
