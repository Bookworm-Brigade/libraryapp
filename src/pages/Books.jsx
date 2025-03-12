import React from "react";
import PagesLayout from "../layouts/PagesLayout";
import { Navbar } from "../components/Navbar";
import BookCard from "../components/BookCard";

export const Books = () => {
  return (
    <PagesLayout>
      {/* <Navbar /> */}
      <div className="grd -ml-5">
        {/* first card goes here */}
      <BookCard />
 


      
      </div>
    </PagesLayout>
  );
};
