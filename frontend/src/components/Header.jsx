import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3 px-3 flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="logo of this site" width="130px" />
        </Link>
      </div>
      <div className="space-x-3 flex">
        <input
          type="text"
          className="bg-gray-200 rounded py-2 px-3 outline-none border border-gray-300"
          placeholder="search post"
        />
        <button className=" h-10 w-10 text-white bg-black rounded font-bold text-xl">
          <i class="bx bx-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
