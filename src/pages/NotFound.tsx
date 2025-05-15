import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-7xl font-bold text-teal-600 mb-6">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
