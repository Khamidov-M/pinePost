import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import profile from "../assets/mardonbek.jpg";

const Header = () => {
  return (
    <div className="py-3 px-3 flex items-center">
      <div className="space-x-3 flex w-full">
        <input
          type="text"
          className="bg-white rounded py-2 px-3 outline-none border-gray-300 flex-1"
          placeholder="search post"
        />
        <button className=" h-10 w-10 text-white bg-black rounded font-bold text-xl">
          <i class="bx bx-plus"></i>
        </button>
        <div className="flex items-center gap-2">
          <img
            src={profile}
            alt="user profile picture"
            className="rounded-full border"
            width="40px"
            height="40px"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
