import React from "react";

export default function TestCard({ book }) {
  // Fallback image if actual image fails
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/285x301?text=No+Image";
  };

  return (
    <div className="w-[285px] h-[446px] bg-white shadow-md rounded-md overflow-hidden">
      <div className="flex flex-col items-center p-3">
        <h1 className="text-lg font-semibold mb-2 text-center">{book.title}</h1>
        <img
          className="w-[285px] h-[301px] object-cover rounded"
          src={
            book.image?.startsWith("http")
              ? book.image
              : `https://savefiles.org/${book.image}/?shareable_link=644`
          }
          alt={book.title}
          onClick={() => console.log("Clicked book ID:", book.id)}
          onError={handleImageError}
        />
      </div>
    </div>
  );
}
