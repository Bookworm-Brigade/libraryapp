import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const EditButton = ({ bookToEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // For success feedback
  const titleInputRef = useRef(null);

  // Open/close modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSuccessMessage(""); // Reset success message on modal close/open
  };

  // Handle form input changes
  const handleInput = (event) => {
    const { id, value } = event.target;
    setPost((prevPost) => ({ ...prevPost, [id]: value }));
  };

  // Focus on the title input when the modal opens
  useEffect(() => {
    if (isOpen && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isOpen]);

  // Populate form fields if editing an existing book
  useEffect(() => {
    if (bookToEdit) {
      setPost(bookToEdit);
    }
  }, [bookToEdit]);

  // Validate form fields
  const validateForm = () => {
    const { title, author, isbn, genre } = post;
    if (!title || !author || !isbn || !genre) {
      alert("Please fill out all fields.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true); // Start loading
    try {
      const response = await axios.put(
        `https://library-api-q24c.onrender.com/books/${post.id}`,
        { ...post, isbn: String(post.isbn) },
        { timeout: 10000 }
      );
      console.log("Success:", response.data);

      // Show success message and reset form
      setSuccessMessage(`Book "${post.title}" has been updated successfully.`);
      setPost({ title: "", author: "", isbn: "", genre: "" }); // Clear form fields
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handle delete book
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    setLoading(true); // Start loading
    try {
      await axios.delete(`https://library-api-q24c.onrender.com/books/${post.id}`, { timeout: 10000 });
      console.log("Book deleted successfully");

      // Call the onDelete callback to remove the book from the UI
      onDelete(post.id);
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
      toggleModal(); // Close the modal
    }
  };

  return (
    <>
      {/* Modal Toggle Button */}
      <button
        onClick={toggleModal}
        className=" text-black text-xl font-[500] cursor-pointer flex justify-center items-center"
      >
         Edit
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
            d="M15.232 5.232l3.536 3.536M9 11l6-6 3.536 3.536-6 6H9v-3.536z"
          />
        </svg>
       
      </button>

      {/* Main Modal */}
      {isOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden={!isOpen}
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
          onClick={toggleModal}
        >
          <div
            className="relative w-full sm:w-1/2 lg:w-1/2 p-5 border border-gray-200 shadow bg-white"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Modal Content */}
            <div className="relative rounded-lg bg-white shadow-sm">
              {/* Modal Header */}
              <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold">Edit Book</h3>
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
                {successMessage && (
                  <div className="mb-4 text-green-600">{successMessage}</div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  {/* Title Field */}
                  <div className="col-span-2">
                    <label
                      htmlFor="title"
                      className="mb-2 block text-sm font-medium"
                    >
                      Title
                    </label>
                    <input
                      ref={titleInputRef}
                      type="text"
                      id="title"
                      value={post.title}
                      onChange={handleInput}
                      placeholder="Type book title here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                    />
                  </div>

                  {/* Author Field */}
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
                      value={post.author}
                      onChange={handleInput}
                      placeholder="Type author name here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                    />
                  </div>

                  {/* ISBN Field */}
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="isbn"
                      className="mb-2 block text-sm font-medium"
                    >
                      ISBN
                    </label>
                    <input
                      type="text"
                      id="isbn"
                      value={post.isbn}
                      onChange={handleInput}
                      placeholder="Type ISBN here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                    />
                  </div>

                  {/* Genre Field */}
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="genre"
                      className="mb-2 block text-sm font-medium"
                    >
                      Genre
                    </label>
                    <input
                      type="text"
                      id="genre"
                      value={post.genre}
                      onChange={handleInput}
                      placeholder="Type genre here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading} // Disable button during loading
                  className={`mt-4 inline-flex items-center rounded-lg ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-700 cursor-pointer"
                  } px-5 py-5 text-center text-sm font-medium text-white`}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
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
                  )}
                  {isLoading ? "Updating..." : "Update Book"}
                </button>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isLoading} // Disable button during loading
                  className={`mt-4 ml-4 inline-flex items-center rounded-lg ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-700 cursor-pointer"
                  } px-5 py-5 text-center text-sm font-medium text-white`}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
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
                  )}
                  {isLoading ? "Deleting..." : "Delete Book"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditButton;