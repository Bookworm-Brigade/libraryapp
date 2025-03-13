import React from "react";
import { Navbar } from "../components/Navbar";
import BookCard from "../components/BookCard";
import { Footer } from "../components/Footer";

export const Books = () => {
  return (
    <>
      <Navbar/>
        <div className="bg-[#f1f1f1] w-full min-h-[90vh] flex flex-wrap gap-2 px-1 justify-center ">
          <BookCard  />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
     <Footer/>
    </>
  );
};
export default Books;
