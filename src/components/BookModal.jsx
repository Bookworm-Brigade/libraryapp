"use client"

import { useEffect, useState } from "react"
import { X, User, Calendar, BookOpen, Heart, Star } from "lucide-react"
import EditButton from "./EditBookButton"

const BookModal = ({ book, onClose, setBook }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!book) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full h-full flex flex-col lg:flex-row bg-white overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-gray-200"
          onClick={onClose}
        >
          <X className="w-6 h-6 text-gray-600 hover:text-red-500" />
        </button>

        {/* Left Section - Book Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-full bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl" />
          <div className="relative z-10 max-w-lg w-full">
            <img
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              src={
                imageError
                  ? "https://images.unsplash.com/photo-1519764340700-3db40311f21e?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  : `https://savefiles.org/${book.image}/?shareable_link=644`
              }
              alt={book.title || "Book cover"}
              onError={() => setImageError(true)}
            />
            {book.rating && (
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-bold text-gray-800">{book.rating}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Book Info */}
        <div className="w-full lg:w-1/2 h-full flex flex-col">
          <div className="flex-1 p-8 lg:p-16 overflow-y-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{book.title}</h2>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-blue-100 rounded-xl px-4 py-3 border border-blue-200">
                <User className="w-5 h-5 mr-3 text-blue-600" />
                <div>
                  <p className="text-xs text-blue-600 font-medium uppercase">Author</p>
                  <p className="font-bold text-gray-800">{book.author || "Unknown"}</p>
                </div>
              </div>

              {book.publishedYear && (
                <div className="flex items-center bg-purple-100 rounded-xl px-4 py-3 border border-purple-200">
                  <Calendar className="w-5 h-5 mr-3 text-purple-600" />
                  <div>
                    <p className="text-xs text-purple-600 font-medium uppercase">Published</p>
                    <p className="font-bold text-gray-800">{book.publishedYear}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              About This Book
            </h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-700 leading-relaxed text-base">
                {book.description ||
                  "No description available for this book. This could be an exciting read waiting to be discovered!"}
              </p>
            </div>

            {/* Details */}
            {/* <h4 className="text-lg font-bold text-gray-900 mb-4">Book Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Genre</p>
                <p className="font-semibold text-gray-800">
                  {book.genre || <span className="italic text-gray-400">Not specified</span>}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Pages</p>
                <p className="font-semibold text-gray-800">{book.pages || "Unknown"}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Language</p>
                <p className="font-semibold text-gray-800">{book.language || "English"}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">ISBN</p>
                <p className="font-semibold text-gray-800">{book.isbn || "Not available"}</p>
              </div>
            </div> */}
          </div>

          {/* Footer Actions */}
          <div className="bg-white border-t border-gray-200 p-6 flex flex-wrap gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-200 ${
                isLiked
                  ? "bg-red-100 border-red-300 text-red-600"
                  : "bg-gray-100 border-gray-300 text-gray-600"
              }`}
            >
              <Heart className={isLiked ? "fill-red-500" : ""} />
              {isLiked ? "Added to Favorites" : "Add to Favorites"}
            </button>

            <button className="bg-gradient-to-r flex items-center from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 shadow-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Reading
            </button>

            {setBook && (
              <div className="ml-auto">
                <EditButton book={book} setBook={setBook} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookModal
