import React from "react"
import { BookOpen, Heart, Lightbulb, Sparkles } from "lucide-react"
import { Link } from "react-router"

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="BookWorm Logo" width={50} />
            <span className="text-xl font-bold text-gray-900">BookWorm</span>
          </div>
          <Link to="/books">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
              Explore Library
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Discover Your Next <span className="text-red-600 block">Great Adventure</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Embark on literary journeys that transport you to new worlds and unlock the magic hidden within every page.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/books">
                  <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold text-lg px-8 py-3 rounded-lg">
                    Start Reading
                  </button>
                </Link>
               
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-3xl rotate-3 opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1519764340700-3db40311f21e?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Beautiful bookshelf"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose BookWorm?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience reading like never before with our curated collection and personalized recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8 text-red-600" />}
              title="Transform Your Mind"
              text="Unlock wisdom from the greatest minds in history. Every book is a gateway to personal growth and enlightenment."
              bg="bg-red-100"
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8 text-red-700" />}
              title="Stories That Touch Your Soul"
              text="Experience emotions that linger long after the final chapter. Find tales that speak directly to your heart."
              bg="bg-red-50"
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-gray-800" />}
              title="Curated Collection"
              text="Discover handpicked books across all genres, carefully selected to provide you with the best reading experience."
              bg="bg-gray-100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Your Literary Journey Awaits</h2>
              <p className="text-xl text-red-100 max-w-2xl mx-auto">
                Step into a world where every book opens new possibilities. Begin your adventure through our curated collection today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/books">
                <button className="bg-white cursor-pointer text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-3 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Library
                </button>
              </Link>
              {/* <button className="border border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-3 rounded-lg">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8  text-gray-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/logo.png" alt="BookWorm Logo" width={40} height={40} className="w-8 h-8" />
              <span className="text-lg font-semibold">BookWorm</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} BookWorm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const FeatureCard = ({ icon, title, text, bg }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
    <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
)
