import React from "react";
import logo from "../assets/logo.png";
import pfp from "../assets/mardonbek.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen px-3 py-4 relative">
      <img src={logo} alt="this is a logo of this site" width="130px" />
      <div className="w-full h-5/6 my-3 overflow-y-scroll bar">
        <Link className="py-2 inline-block w-full hover:bg-gray-200 px-2 rounded transition-all">
          Home
        </Link>
        <p className="font-bold">Post categories</p>
      </div>

      <div className="flex items-center justify-center gap-2 absolute bottom-0 left-0 w-full py-2">
        <img
          src={pfp}
          alt="pfp of user"
          className="rounded-full"
          width={"40px"}
          height={"40px"}
        />
        <p>Mardonbek Khamidov</p>
      </div>
    </aside>
  );
};

export default Sidebar;
