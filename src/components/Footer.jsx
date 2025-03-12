import React from "react";
import image from "../assets/images/logo.png";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="w-[60rem] h-[25rem] ml-[12rem] rounded-3xl border-4 border-[#800000] flex flex-col justify-center  ">
      <div className="flex ">
        <div className="flex flex-col ml-30">
          <div className="flex flex-row justify-center mt-50">
            <span className="border-2 bg-[#800000] w-35 h-13 flex pl-8 pb-5 text-white rounded-lg">
              <button>
                <span className="text-xs">Download on the </span> <br />
                <span className="text-sm flex flex-row">
                  {" "}
                  <FaApple />
                  App Store
                </span>
              </button>
            </span>
            <span className="border-2 bg-[#800000] w-35 h-13 flex pl-8 pb-5 text-white rounded-lg">
              <button>
                <span className="text-xs"> GET IT ON </span>
                <br />{" "}
                <span className="text-sm flex flex-row">
                  <FaGooglePlay />
                  Google Play{" "}
                </span>{" "}
              </button>
            </span>
          </div>

          <div className="text-[#800000] flex flex-col text-xl justify-center">
            <span className="flex flex-row">
              <IoLogoFacebook />
              <FaXTwitter />
              <FiInstagram />
            </span>
            <h1>@2025, By Group 4 Geniuses</h1>
          </div>
        </div>

        <div>
          <img src={image} alt="" className="  " />
        </div>
      </div>
    </div>
  );
};
