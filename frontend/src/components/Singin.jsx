import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import bgVideo from "../assets/share.mp4";

const Singin = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full h-full relative">
        <video
          src={bgVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="flex absolute justify-center items-center top-0 left-0 w-full h-full bg-black/70"></div>
      </div>
    </div>
  );
};

export default Singin;
