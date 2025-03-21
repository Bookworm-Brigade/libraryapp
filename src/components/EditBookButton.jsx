/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const EditButton = ({ book, setBook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    publishedYear: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoadingBook, setIsLoadingBook] = useState(false);
  const titleInputRef = useRef(null);

  // Fetch book data when modal opens
  useEffect(() => {
    if (isOpen && book.id) {
      fetchBookData();
    }
  }, [isOpen, book.id]);

  // Fetch existing book data
  const fetchBookData = async () => {
    setIsLoadingBook(true);
    try {
      const response = await axios.get(
        `https://library-api-q24c.onrender.com/books/${book.id}`
      );
      console.log("Book data:", response.data);
      const updatedBook = response.data.book;
      console.log("Updated Book:", updatedBook);
      setBookDetails(response.data);
      setBook((prevBook) =>
        prevBook.map((b) => (b.id === updatedBook.id ? updatedBook : b))
      );
    } catch (error) {
      console.error("Error fetching book:", error);
      alert("Failed to load book data. Please try again.");
    } finally {
      setIsLoadingBook(false);
    }
  };

  // Open/close modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSuccessMessage("");
  };

  // Handle form input changes
  const handleInput = (event) => {
    const { id, value } = event.target;
    setBookDetails((prevBook) => ({ ...prevBook, [id]: value }));
  };

  // Focus on the title input when the modal opens
  useEffect(() => {
    if (isOpen && titleInputRef.current && !isLoadingBook) {
      titleInputRef.current.focus();
    }
  }, [isOpen, isLoadingBook]);

  // Validate form fields
  const validateForm = () => {
    if (!bookDetails.title) {
      alert("Please provide a title.");
      return false;
    }
    return true;
  };

  // Handle form submission for updating
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const updateData = {
        title: bookDetails.title,
        author: bookDetails.author,
        description: bookDetails.description,
        publishedYear: bookDetails.publishedYear,
      };

      const response = await axios.patch(
        `https://library-api-q24c.onrender.com/books/${book.id}`,
        updateData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Update Success:", response.data);
      setSuccessMessage(
        `Book "${bookDetails.title}" has been updated successfully.`
      );
      setBookDetails(response.data);
    } catch (error) {
      console.error("Error:", error.message);
      if (error.response) {
        alert(
          `Update failed: ${error.response.data?.error || "Unknown error"}`
        );
      } else {
        alert("An error occurred while updating. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Edit Button */}
      <button
        onClick={toggleModal}
        className="text-white text-1xl font-bold bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded"
      >
        Edit
      </button>

      {/* Edit Modal */}
      {isOpen && (
        <div
          id="edit-modal"
          tabIndex="-1"
          aria-hidden={!isOpen}
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
        >
          <div className="relative w-full sm:w-1/2 lg:w-1/2 p-5 border border-gray-200 shadow bg-white">
            {/* Modal Content */}
            <div className="relative rounded-lg bg-white shadow-sm">
              {/* Modal Header */}
              <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4">
                <h3 className="text-lg font-bold">Edit Book</h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-gray-400 hover:bg-gray-200 hover:text-gray-900"
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
              {isLoadingBook ? (
                <div className="p-4 text-center">
                  Loading book information...
                </div>
              ) : (
                <form className="p-4" onSubmit={handleSubmit}>
                  {successMessage && (
                    <div className="mb-4 text-green-600">{successMessage}</div>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Title Field - Required */}
                    <div className="col-span-2">
                      <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium"
                      >
                        Title*
                      </label>
                      <input
                        ref={titleInputRef}
                        type="text"
                        id="title"
                        value={bookDetails.title}
                        onChange={handleInput}
                        placeholder="Type book title here"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                      />
                    </div>

                    {/* Author Field - Optional */}
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
                        value={bookDetails.author}
                        onChange={handleInput}
                        placeholder="Type author name here"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                      />
                    </div>

                    {/* Description Field - Optional */}
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        id="description"
                        value={bookDetails.description}
                        onChange={handleInput}
                        placeholder="Type Description here"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                      />
                    </div>

                    {/* Published Year Field - Optional */}
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="publishedYear"
                        className="mb-2 block text-sm font-medium"
                      >
                        Published Year
                      </label>
                      <input
                        type="text"
                        id="publishedYear"
                        value={bookDetails.publishedYear}
                        onChange={handleInput}
                        placeholder="Type Published Year here"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                      />
                    </div>

                    {/* Note about image updates */}
                    <div className="col-span-2">
                      <p className="text-sm text-gray-500">
                        Note: Image updates are not supported through this form
                        based on the API specification.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
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
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {isLoading ? "Updating..." : "Update Book"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditButton;
