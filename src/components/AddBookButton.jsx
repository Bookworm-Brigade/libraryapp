import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    publishedYear: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const titleInputRef = useRef(null);

  // Open/close modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSuccessMessage("");
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

  // Validate form fields
  const validateForm = () => {
    const { title, author, description, image, publishedYear } = post;
    if (!title || !author || !description || !image || !publishedYear) {
      alert("Please fill out all fields.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("author", post.author);
      formData.append("description", post.description);
      formData.append("image", post.image);
      formData.append("publishedYear", post.publishedYear);
      const response = await axios.post(
        "https://library-api-q24c.onrender.com/books",
        formData
      );
      console.log("Success:", response.data);
      setSuccessMessage(`Book "${post.title}" has been added successfully.`);
      setPost({
        title: "",
        author: "",
        description: "",
        image: "",
        publishedYear: "",
      });
    } catch (error) {
      console.error("Error:", error.message);

      // Check if the error contains a response from the server
      if (error.response && error.response.status === 422) {
        const errorDetails = error.response.data;

        // Construct a user-friendly error message based on the server response
        let errorMessage = "Validation failed:\n";
        if (errorDetails.details) {
          for (const [, message] of Object.entries(errorDetails.details)) {
            errorMessage += `- ${message}\n`;
          }
        } else {
          errorMessage += errorDetails.error || "Unknown validation error.";
        }

        // Display the error message to the user
        alert(errorMessage);
      } else {
        // Handle other types of errors (e.g., network issues)
        alert("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
        <button
          onClick={toggleModal}
          className="block text-white text-[15px] font-[700] rounded-full bg-[#a82323] px-9 py-5 cursor-pointer sm:px-6 sm:py-3 text-sm"
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
          <div className="relative w-full sm:w-1/2 lg:w-1/2 p-5 border border-gray-200 shadow bg-white">
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

                  {/* Description Field */}
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
                      value={post.description}
                      onChange={handleInput}
                      placeholder="Type Description here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                    />
                  </div>

                  {/* Image Field */}
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="image"
                      className="mb-2 block text-sm font-medium"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      onChange={(event) => {
                        if (event.target.files && event.target.files[0]) {
                          setPost((prevPost) => ({
                            ...prevPost,
                            image: event.target.files[0],
                          }));
                        }
                      }}
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                    />
                  </div>

                  {/* Published Year Field */}
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
                      value={post.publishedYear}
                      onChange={handleInput}
                      placeholder="Type Published Year here"
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-5 text-sm"
                    />
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
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {isLoading ? "Adding..." : "Add New Book"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;
