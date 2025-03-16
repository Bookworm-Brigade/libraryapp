import React, { useState , useEffect} from "react";
import { Navbar } from "../components/Navbar";
import BookCard from "../components/BookCard";
import { Footer } from "../components/Footer";
import axios from "axios";

export const Books = () => {
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
    <>
      <Navbar/>
        <div className="bg-[#ffffff] w-full min-h-[90vh] flex flex-wrap gap-10 px-1 justify-center ">
        {books.map((book) => (
                  <BookCard key={book.id} book={book} setBook={setBook} />
                ))}
        </div>
     <Footer/>
    </>
  );
};
export default Books;
