import React, { useEffect, useState } from "react";
import PagesLayout from "../layouts/PagesLayout";
import image from "../assets/images/image1.png"
import axios from "axios";
import BookCard from "../components/BookCard";

export const SingleBook = () => {
   // define product state or variable store
   const [products, setProducts] = useState([]);

   // define a function to fetch products fetch
   const getProducts = async () => {
     const response = await axios.get("https://library-api-q24c.onrender.com/books");
     setProducts(response.data);
   };
 
   // execute fetcher call
   useEffect(() => {
     getProducts();
   }, []);
 
  return (
    <PagesLayout>
      {" "}
      <div className="border-2 border-[#800000] w-[800px] h-[400px] ml-20 rounded-lg">
        <div className="flex gap-5 mt-2 ml-2">
          <span className=" ">
          <img src={image} alt="" className="flex border-2 border-black p-2 "/>
          </span>
       
          <div className="grid grid-cols-4 gap-5">
            {products.map((product) => {
              return (
                <BookCard
                  image={product.image}
                  title={product.title}
                  key={product.id}
                  author={product.author}
                  year={product.year}
                  genre={product.genre}
                  description={product.description}
                />
              );
            })}
          </div>

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
export default SingleBook;