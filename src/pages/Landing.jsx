import React from "react";
import logo from "../assets/images/image.png";
import { Link } from "react-router";

export const Landing = () => {
  return (
    <div className="container mx-auto px-4 relative">
      <div className="flex flex-col items-center justify-center min-h-[100vh] text-center">
        <img
          className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] mt-4"
          src={logo}
          alt="Logo"
        />
      </div>

     <Link to={'/books'}><button className="bg-[#B9413F] font-[700] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-full absolute bottom-10 right-4 sm:bottom-12 sm:right-6 md:bottom-14 md:right-8 lg:bottom-16 lg:right-10 cursor-pointer">
        Get Started
      </button></Link> 
    </div>
  );
};
