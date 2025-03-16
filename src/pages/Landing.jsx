import React from "react";
import logo from "../assets/images/image.png";
import { Link } from "react-router";
import intro1 from "../assets/images/onboarding-slider-img-1.png";
import intro2 from "../assets/images/onboarding-slider-img-2.png";
import intro3 from "../assets/images/onboarding-slider-img-3.png";

export const Landing = () => {
  return (
    <div className="container mx-auto px-4 relative">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-4"
          src={logo}
          alt="Logo"
        />
      </div>

      <div className="relative">
        <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-green-200 to-blue-200 p-4">
          <div className="flex-1">
            <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" src={intro1} alt="" />
          </div>
          <div className="flex-1 text-center md:text-left p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Find Books That Steal Your Heart
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Explore our collection to discover captivating stories <br /> that
              resonate deeply and effortlessly capture your heart.
            </p>
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white p-4">
          <div className="flex-1 text-center md:text-left p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              The Ultimate Path to Enlightenment
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Dive into profound insights and elevate your consciousness. <br /> Each book in our library brings you closer to enlightenment.
            </p>
          </div>
          <div className="flex-1">
            <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" src={intro2} alt="" />
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white p-4">
          <div className="flex-1">
            <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" src={intro1} alt="" />
          </div>
          <div className="flex-1 text-center md:text-left p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Find Books That Steal Your Heart
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Explore our collection to discover captivating stories <br /> that
              resonate deeply and effortlessly capture your heart.
            </p>
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black p-4">
          <div className="flex-1">
            <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" src={intro3} alt="" />
          </div>
          <div className="flex-1 text-center md:text-left p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Find Books That Steal Your Heart
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Explore our collection to discover captivating stories <br /> that
              resonate deeply and effortlessly capture your heart.
            </p>
          </div>
        </div>
      </div>

      <Link to={"/books"}>
        <button className="bg-[#B9413F] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-full absolute bottom-10 right-4 sm:bottom-12 sm:right-6 md:bottom-14 md:right-8 lg:bottom-16 lg:right-10 cursor-pointer">
          Get All Books
        </button>
      </Link>
    </div>
  );
};

export default Landing;
