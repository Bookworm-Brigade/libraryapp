import React from "react";
import PagesLayout from "../layouts/PagesLayout";
import image from "../assets/images/image1.png"

export const SingleBook = () => {
  return (
    <PagesLayout>
      {" "}
      <div className="border-2 border-[#800000] w-[800px] h-[400px] ml-20 rounded-lg">
        <div className="flex gap-5 mt-2 ml-2">
          <span className=" ">
          <img src={image} alt="" className="flex border-2 border-black p-2 "/>
          </span>
       
        <div className="flex flex-col pt-10 gap-4">
          <h1>Title:</h1>
          <p>Author:</p>
          <p>Year:</p>
          <p>Genre:</p>
          <span className="flex gap-3">
          <h1>Description:</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quisquam,
            voluptatum.
          </p>
          </span>
        </div>
        </div>
      </div>
    </PagesLayout>
  );
};
