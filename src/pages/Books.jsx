"use client"

import { useState, useEffect, useMemo } from "react"
import { Footer } from "../components/Footer"
import BookCard from "../components/BookCard"
import BookModal from "../components/BookModal"
import { Search, Filter, Grid, List, Loader2, AlertCircle, BookOpen, Star, Calendar, User } from "lucide-react"
import axios from "axios"
import AddButton from "../components/AddBookButton"
import { Navbar } from "../components/Navbar"

const Books = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("title")
  const [activeBook, setActiveBook] = useState(null)

  const getBooks = async () => {
    try {
      const response = await axios.get("https://library-api-q24c.onrender.com/books")
      setBooks(response.data.books)
    } catch (error) {
      console.error(error)
      setError("Failed to fetch books. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  const filteredAndSortedBooks = useMemo(() => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title)
        case "author":
          return (a.author || "").localeCompare(b.author || "")
        case "year":
          return (b.year || 0) - (a.year || 0)
        default:
          return 0
      }
    })
  }, [books, searchTerm, sortBy])

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-7xl mx-auto px-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm border p-6 animate-pulse">
          <div className="bg-gray-200 h-32 rounded-lg mb-4"></div>
          <div className="bg-gray-200 h-4 rounded mb-2"></div>
          <div className="bg-gray-200 h-3 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  )

  const ErrorState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-red-50 rounded-full p-4 mb-4">
        <AlertCircle className="w-8 h-8 text-red-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h3>
      <p className="text-gray-600 text-center mb-6 max-w-md">{error}</p>
      <button
        onClick={getBooks}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
      >
        Try Again
      </button>
    </div>
  )

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-gray-50 rounded-full p-4 mb-4">
        <BookOpen className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No books found</h3>
      <p className="text-gray-600 text-center max-w-md">
        {searchTerm
          ? `No books match "${searchTerm}". Try adjusting your search.`
          : "No books available at the moment."}
      </p>
    </div>
  )

  // New List Item Component for better list view
  const BookListItem = ({ book, onOpen }) => (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-all duration-200 cursor-pointer group"
      onClick={() => onOpen(book)}
    >
      <div className="flex gap-4">
        {/* Book Cover */}
        <div className="flex-shrink-0">
          <div className="w-16 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Book Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                {book.title}
              </h3>

              <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                {book.author && (
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{book.author}</span>
                  </div>
                )}

                {book.year && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{book.year}</span>
                  </div>
                )}
              </div>

              {book.description && <p className="text-gray-600 text-sm mt-2 line-clamp-2">{book.description}</p>}
            </div>

            {/* Rating or Status */}
            <div className="flex items-center gap-1 ml-4">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{book.rating || "4.5"}</span>
            </div>
          </div>

          {/* Tags or Categories */}
          {book.genre && (
            <div className="flex items-center gap-2 mt-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {book.genre}
              </span>
              {book.status && (
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    book.status === "available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {book.status}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <>      <Navbar />
 <div className="min-h-screen  flex flex-col items-center ">
      {/* Hero */}
      <div className="relative w-[95%] mb-10 rounded-xl bg-cover bg-bottom text-white py-32 md:py-40 bg-[url('https://images.unsplash.com/photo-1434652917459-36f6692da944?q=80&w=978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        {/* Overlay */}
        <div className="absolute inset-0 rounded-xl bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Discover Amazing Books</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Explore our curated collection of books across all genres and find your next great read.
          </p>
          <div className="mt-8 flex justify-center">
            {/* <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">
              Browse Collection
            </button> */}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white w-full border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="title">Sort by Title</option>
                  <option value="author">Sort by Author</option>
                  <option value="year">Sort by Year</option>
                </select>
              </div>

              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === "grid" ? "bg-white shadow-sm text-blue-600" : "text-gray-500"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === "list" ? "bg-white shadow-sm text-blue-600" : "text-gray-500"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <AddButton />
            </div>
          </div>

          {!loading && !error && (
            <div className="mt-4 text-sm text-gray-600">
              {filteredAndSortedBooks.length} {filteredAndSortedBooks.length === 1 ? "book" : "books"} found
              {searchTerm && ` for "${searchTerm}"`}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-600">Loading amazing books...</p>
            <LoadingSkeleton />
          </div>
        )}

        {error && <ErrorState />}
        {!loading && !error && filteredAndSortedBooks.length === 0 && <EmptyState />}

        {!loading && !error && filteredAndSortedBooks.length > 0 && (
          <div>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredAndSortedBooks.map((book, index) => (
                  <div
                    key={book.id}
                    className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    <BookCard book={book} viewMode={viewMode} onOpen={setActiveBook} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredAndSortedBooks.map((book, index) => (
                  <div
                    key={book.id}
                    style={{
                      animationDelay: `${index * 30}ms`,
                      animation: "fadeInUp 0.4s ease-out forwards",
                    }}
                  >
                    <BookListItem book={book} onOpen={setActiveBook} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />

      {/* Modal */}
      {activeBook && <BookModal book={activeBook} onClose={() => setActiveBook(null)} setBook={setBooks} />}

      {/* Animation Style */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div></>
   
  )
}

export default Books
