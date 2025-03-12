import React from "react";
import image from "../assets/images/logo.png";
import Categories from "../pages/Categories";
import CrudModal from "./AddBookButton";

export const Navbar = () => {
  return (
    <div className="h-15 border-2 border-[#800000] flex justify-between items-center">
      <div className="">
        <img src={image} alt="" className="w-[100px] h-[60px]" />
      </div>
      <div className="navbar text-xl flex justify-end items-center text-[#800000] gap-10">
        <p>All Books</p>
        <Categories />

        <CrudModal />
      </div>
    </div>
  );
};
