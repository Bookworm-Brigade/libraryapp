import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="navbar text-xl flex justify-end">
      <p>All Books</p>
      <p>Categories</p>
      <IoIosAddCircleOutline />
      <p>Add Books</p>
    </div>
  );
};
