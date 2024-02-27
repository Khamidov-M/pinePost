import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-[15%]">
        <Sidebar />
      </div>
      <div className="w-[85%]">
        <Header />
      </div>
    </div>
  );
};

export default Home;
