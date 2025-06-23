"use client"

import { useState } from "react"
import PropTypes from "prop-types"

const BookCard = ({ book, viewMode = "grid", onOpen }) => {
  const [imageError, setImageError] = useState(false)

  const handleOpen = () => {
    if (onOpen) onOpen(book)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={(e) => e.key === "Enter" && handleOpen()}
      className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all cursor-pointer outline-none"
      aria-label={`View details for ${book.title}`}
    >
      {/* Book Cover */}
      <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-t-xl">
        <img
          src={
            imageError
              ? "https://images.unsplash.com/photo-1519764340700-3db40311f21e?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : `https://savefiles.org/${book.image}/?shareable_link=644`
          }
          alt={book.title || "Book cover"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
          {book.title || <span className="italic text-gray-400">Untitled</span>}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{book.author || "Unknown Author"}</p>
      </div>
    </div>
  )
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  viewMode: PropTypes.string,
  onOpen: PropTypes.func,
}

export default BookCard
