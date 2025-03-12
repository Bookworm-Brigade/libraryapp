import React from "react";
import PagesLayout from "../layouts/PagesLayout";
import BookCard from "../components/BookCard";

export const Books = () => {
  return (
    <PagesLayout>
      <div className="grd -ml-5 container mx-auto px-4 relative">
        <BookCard />
      </div>
    </PagesLayout>
  );
};

export default Books;
