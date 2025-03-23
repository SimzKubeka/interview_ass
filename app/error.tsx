
'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error caught:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-700 mb-4">
            An unexpected error occurred. Please try again later.
          </p>
          <button
            onClick={() => reset()}
            className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
          >
            Retry
          </button>
        </div>
      </body>
    </html>
  )
}
