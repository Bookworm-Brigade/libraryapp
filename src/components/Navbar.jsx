import React from "react";
import image from "../assets/images/logo.png";
import AddButton from "./AddBookButton";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <div className="h-25  flex justify-between items-center">
      <div className="ml-[20px]">
      <Link to="/"> <img src={image} alt="" className="w-[120px] " /> </Link>
      </div>
      <div className="navbar text-xl flex justify-end items-center text-[#800000] px-9 gap-10">
        <AddButton />
      </div>
    </div>
  );
};
