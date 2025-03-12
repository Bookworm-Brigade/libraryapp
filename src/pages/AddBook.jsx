import React, { useState } from "react";
import PagesLayout from "../layouts/PagesLayout";
import axios from "axios";

const CrudModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [post, setPost] = useState({
    title: "",
    author: "",
    isbn: "",
    description: "",
  });

  const handleInput = (event) => {
    setPost({
      ...post,
      [event.target.id]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://library-api-q24c.onrender.com/books", post)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <PagesLayout>
        {" "}
        {/* Modal Toggle Button */}
        <button
          onClick={toggleModal}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Book
        </button>
        {/* Main Modal */}
        {isOpen && (
          <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
          >
            <div className="relative w-200 p-5 border border-gray-200  shadow ">
              {/* Modal Content */}
              <div className="relative rounded-lg bg-white shadow-sm ">
                {/* Modal Header */}
                <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 ">
                  <h3 className="text-lg font-semibold">Add Book</h3>
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                {/* Modal Body */}
                <form className="p-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="col-span-2">
                      <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        onChange={handleInput}
                        placeholder="Type book title here"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                      />
                    </div>

                    {/* Price Field */}
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="author"
                        className="mb-2 block text-sm font-medium"
                      >
                        Author
                      </label>
                      <input
                        type="text"
                        id="author"
                        onChange={handleInput}
                        placeholder="Type author name here"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                      />
                    </div>

                    {/* Category Field */}
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="isbn"
                        className="mb-2 block text-sm font-medium "
                      >
                        ISBN
                      </label>
                      <input
                        type="number"
                        id="isbn"
                        onChange={handleInput}
                        placeholder="Type ISBN number here"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                      />
                    </div>

                    {/* Description Field */}
                    <div className="col-span-2">
                      <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        onChange={handleInput}
                        placeholder="Write book description here"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-4 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="mr-2 -ml-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add New Book
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </PagesLayout>
    </>
  );
};

export default CrudModal;
