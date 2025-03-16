import React, { useState } from "react";
import EditButton from "./EditBookButton";

const BookCard = ({ book, setBook }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="cursor-pointer">
        <div className="w-[400px] h-[500px] flex justify-center items-center">
          <img
            className="w-full h-full object-contain"
            src={`https://savefiles.org/${book.image}/?shareable_link=644`}
            alt={book.title}
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h1 className="font-bold text-2xl">{book.title}</h1>
        <EditButton book={book} setBook={setBook} />
      </div>

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur bg-opacity-50">
          <div
            className="relative flex flex-col md:flex-row bg-white rounded-lg shadow w-11/12 max-w-5xl h-5/6 md:h-[700px] dark:bg-gray-200 p-2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="w-full md:w-1/2 h-full  md:h-auto">
              <img
                 className="w-full h-full object-contain"
                 src={`https://savefiles.org/${book.image}/?shareable_link=644`}
                 alt={book.title}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 relative">
              <button
                type="button"
                className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                onClick={() => setOpenModal(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <h1 className="font-[Archivo] text-7xl font-bold mb-4">
                {book.title}
              </h1>
              <p className=" mb-2">
                Author: <span className="font-semibold">{book.author}</span>
              </p>
              <p className=" mb-2">
                Published:{" "}
                <span className="font-semibold">{book.publishedYear}</span>
              </p>
              <div className="w-full">
                <h1 className=" text-5xl font[Archivo] font-semibold mb-2">
                  Description
                </h1>
                <p className="">{book.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
