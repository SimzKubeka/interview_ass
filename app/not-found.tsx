

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">
        The page you are looking for could not be found.
      </p>
      <a
        href="/"
        className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
      >
        Go Home
      </a>
    </div>
  )
}
