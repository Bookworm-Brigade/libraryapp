import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import TestCard from "../components/TestCard";

export const Test = () => {
  // define product state or variable store
  const [books, setBook] = useState([]);

  // define a function to fetch products fetch
  const getBooks = async () => {
    const response = await axios.get(
      "https://library-api-q24c.onrender.com/books"
    );
    setBook(response.data.books);
  };

  // execute fetcher call
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-[40px] font-[700] mb-[32px]">All Books</h1>
        <div className="grid grid-cols-4 gap-5">
          {books.map((book) => (
            <TestCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};
