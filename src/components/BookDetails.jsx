"use client";


export function BookDetails({ book, setOpenModal }) {
  return (
    <>
      {/* Button to toggle the modal */}

      {/* Modal */}

      {/* Modal content */}
      <div
        className="relative flex flex-col md:flex-row bg-white rounded-lg shadow w-11/12 max-w-4xl h-5/6 md:h-[700px] dark:bg-gray-200"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            className="w-full h-full object-cover"
            src={book.image || "https://images.unsplash.com/photo-1519764340700-3db40311f21e?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="Book Cover"
          />
        </div>
        <div className="w-full md:w-1/2 bg-blue-900 flex flex-col justify-center items-center p-6 md:p-10 relative">
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
          <h1 className="text-white text-xl font-bold mb-4">
            The Sex Therapist
          </h1>
          <p className="text-white mb-2">
            Author: <span className="font-semibold">Dr. Ruth Westheimer</span>
          </p>
          <p className="text-white mb-2">
            Published: <span className="font-semibold">1987</span>
          </p>
          <p className="text-white mb-4">
            ISBN: <span className="font-semibold">978-0-06-097649-2</span>
          </p>
          <div className="w-full">
            <h1 className="text-white text-lg font-semibold mb-2">Summary</h1>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, error nihil vitae cupiditate non aliquam numquam? Esse
              expedita tempora voluptatem iste dolore aut facere non, quas,
              quibusdam maxime aperiam voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
