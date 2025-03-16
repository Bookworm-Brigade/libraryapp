import React from "react";
// import axios from "axios";

export default function TestCard({ book }) {
  return (
    <div className="w-[285px] h-[446px]">
      <div>
        <h1>{book.title}</h1>

        <img
          className="w-[285px] h-[301px] "
          src={`https://savefiles.org/${book.image}/?shareable_link=644`}
          alt={book.title}
          onClick={() => console.log(book.id)}
        />
      </div>
    </div>
  );
}


// single book card component
