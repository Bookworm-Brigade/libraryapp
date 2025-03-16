import React from "react";
import image from "../assets/images/logo.png";
import AddButton from "./AddBookButton";

export const Navbar = () => {
  return (
    <div className="h-25  flex justify-between items-center">
      <div className="ml-[20px]">
        <img src={image} alt="" className="w-[190px] " />
      </div>
      <div className="navbar text-xl flex justify-end items-center text-[#800000] px-9 gap-10">
        <AddButton />
      </div>
    </div>
  );
};
