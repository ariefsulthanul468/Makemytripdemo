import React from "react";
import { BRAND_LOGO_URL } from "../constants";

const Header = () => {
  const navItems = ["Home", "About", "Flight"];

  return (
    <header className="flex items-center justify-between px-2 md:px-12 pt-8 pb-[300px] bg-gradient-to-b from-red-600 to-red-800">
      <div className="">
        <img className="w-[100px] md:w-[150px]" src={BRAND_LOGO_URL} alt="Brand-logo" />
      </div>
      <div>
        <ul className="flex items-center gap-4 md:gap-12 cursor-pointer text-white font-medium">
          {navItems.map((items) => (
            <li className=" hover:underline">{items}</li>
          ))}
        </ul>
      </div>
      <div>
        <button className="bg-black bg-opacity-30 hover:bg-opacity-40 rounded-lg px-4 md:px-12 py-2 text-white">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
