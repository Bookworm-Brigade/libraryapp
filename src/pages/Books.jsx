import React, { useState, useEffect, useMemo } from "react";
import { Navbar } from "../components/Navbar";
import BookCard from "../components/BookCard";
import { Footer } from "../components/Footer";
import axios from "axios";
export const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBooks = async () => {
    try {
      const response = await axios.get(
        "https://library-api-q24c.onrender.com/books"
      );
      setBooks(response.data.books);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch books. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) => a.title.localeCompare(b.title));
  }, [books]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="bg-[#ffffff] w-full min-h-[90vh] flex flex-wrap gap-10 px-1 justify-center">
        {sortedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Books;