import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import bgVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { client } from "../client";

const Singin = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    if (!response.profileObj) return;
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };
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
        <div className="flex absolute justify-center items-center top-0 left-0 w-full h-full bg-black/70">
          <div className="flex justify-center items-center flex-col space-y-5">
            <img src={logo} alt="logo" width="130px" />
            <GoogleLogin
              clientId="361448180827-11ag44tb01emh7fpeis6h0iq76350i2j.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-white flex items-center justify-center px-4 py-3 rounded-md"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-2" /> Registrate with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
