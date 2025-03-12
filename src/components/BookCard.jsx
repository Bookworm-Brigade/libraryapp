
import React from "react";
import image from "../assets/images/image1.png";

const BookCard = () => {
  return (
    <div className="w-[350px] h-[400px] flex flex-col justify-center px-10 bg-white border-2 border-[#800000] mt-10">
      <img src={image} alt="" className="h-[195px] w-[200px]" />
      <div className="flex justify-between">
        <p>sex therapy</p>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default BookCard;
