
import React from "react";
import { BookDetails } from "./BookDetails";
import EditButton from "./EditBookButton";

const BookCard = () => {
  return (
    <div className="w-[350px] h-[400px] flex flex-col justify-center px-5  mt-10">
      <BookDetails></BookDetails>
      <div className="flex justify-between">
        <p className="font-[600] text-xl">The Sex Therapist</p>
        <EditButton />
      </div>
    </div>
  );
};

export default BookCard;
