import React from "react";
import image from "../assets/images/image.png";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="w-full h-30 justify-between flex bg-amber-200 ">
        <div >
          <h1 className="text-[#800000] flex flex-col text-xl justify-center">2025, By Group 4 Geniuses</h1>
        </div>

      <div>
        <img src={image} alt="" className=" w-70 " />
      </div>
    </div>
  );
};
