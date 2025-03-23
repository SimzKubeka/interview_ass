'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6"
    >
      {/* Large SVG or Image */}
      <motion.img
        src="/404-illustration.svg"  // Replace with your own illustration
        alt="404 Illustration"
        className="w-90 h-auto mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
      />

      {/* Animated 404 Heading */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        className="text-3xl font-bold text-gray-800 mb-2"
      >
        404 - Page Not Found
      </motion.h1>

      {/* Subtext with a subtle fade */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-600 mb-6 text-center"
      >
        The page you are looking for could not be found.
      </motion.p>

      {/* Next.js <Link> to Home, with Framer Motion on the button */}
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition cursor-pointer"
        >
          Go Home
        </motion.div>
      </Link>
    </motion.div>
  )
}
