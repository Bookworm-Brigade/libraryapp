import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const CrudModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "",  // Added genre to the state
  });

  const titleInputRef = useRef(null);

  // Open/close modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Handle form input
  const handleInput = (event) => {
    setPost({
      ...post,
      [event.target.id]: event.target.value,
    });
  };

  // Set focus to the title input when the modal opens
  useEffect(() => {
    if (isOpen && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!post.title || !post.author || !post.isbn || !post.genre) {
      alert("Please fill out all fields.");
      return;
    }

    // Ensure ISBN is a string
    const postData = {
      ...post,
      isbn: String(post.isbn),
    };

    // Axios request
    axios
      .post("", postData, { timeout: 10000 })
      .then((response) => {
        console.log("Success:", response.data);
        // Optionally, reset the form or close the modal here
        toggleModal();
      })
      .catch((error) => {
        console.error("Axios Error:", error.message);
        if (error.response) {
          console.error("Response Data:", error.response.data);
          console.error("Status Code:", error.response.status);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error Message:", error.message);
        }
      });
  };

  return (
    <>
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
          aria-hidden={!isOpen}
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
        >
          <div className="relative w-full sm:w-1/2 lg:w-1/3 p-5 border border-gray-200 shadow bg-white">
            {/* Modal Content */}
            <div className="relative rounded-lg bg-white shadow-sm">
              {/* Modal Header */}
              <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4">
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
                  {/* Title Field */}
                  <div className="col-span-2">
                    <label htmlFor="title" className="mb-2 block text-sm font-medium">
                      Title
                    </label>
                    <input
                      ref={titleInputRef}
                      type="text"
                      id="title"
                      onChange={handleInput}
                      placeholder="Type book title here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    />
                  </div>

                  {/* Author Field */}
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="author" className="mb-2 block text-sm font-medium">
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      onChange={handleInput}
                      placeholder="Type author name here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    />
                  </div>

                  {/* ISBN Field */}
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="isbn" className="mb-2 block text-sm font-medium">
                      ISBN
                    </label>
                    <input
                      type="text" // Changed to text to handle ISBN as a string
                      id="isbn"
                      onChange={handleInput}
                      placeholder="Type ISBN here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    />
                  </div>

                  {/* Genre Field */}
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="genre" className="mb-2 block text-sm font-medium">
                      Genre
                    </label>
                    <input
                      type="text"
                      id="genre"
                      onChange={handleInput}
                      placeholder="Type genre here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    />
                  </div>

                  {/* Description Field
                  <div className="col-span-2">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      onChange={handleInput}
                      placeholder="Write book description here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                    ></textarea>
                  </div> */}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg className="mr-2 -ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
    </>
  );
};

export default CrudModal;
