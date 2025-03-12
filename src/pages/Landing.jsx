import React from "react";
import logo from "../assets/image.png/";

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

      <button className="bg-[#B9413F] font-[700] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-full absolute bottom-10 right-4 sm:bottom-12 sm:right-6 md:bottom-14 md:right-8 lg:bottom-16 lg:right-10">
        Get Started
      </button>
      {/* Uncomment and make the section below responsive if needed
        <section className="flex flex-col md:flex-row justify-center items-center my-12">
          <div className="w-full md:w-1/2 p-4 md:p-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Find Books <br /> That Steal Your Heart
            </h1>
            <p className="text-base md:text-lg">
              Discover captivating stories that resonate deeply and steal your
              heart effortlessly. Immerse yourself in a world of emotions,
              adventures, and unforgettable characters. Find your next favorite
              book today!
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <img className="w-full" src={img2} alt="Book illustration" />
          </div>
        </section>
        */}
    </div>
  );
};
