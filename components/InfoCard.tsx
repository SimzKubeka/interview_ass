'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface InfoCardProps {
  title: string
  value: number | string
  percentage: string
  icon: ReactNode
}

export default function InfoCard({ title, value, percentage, icon }: InfoCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' }) 

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-soft hover:shadow-md transition-shadow p-4 flex sm:flex-row justify-between items-start sm:items-center w-full max-w-sm gap-4 sm:gap-0"
    >
      {/* Left: Text */}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="flex items-center gap-2 text-green-500 text-xs font-medium mt-1">
          <span>▲</span>
          <span>{percentage}</span>
        </div>
        <div className="text-2xl font-bold text-gray-800 mt-2">{value}</div>
      </div>

      {/* Right: Animated Icon */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
        className="bg-sky-100 rounded-full w-12 h-12 flex items-center justify-center text-sky-700 text-xl shrink-0"
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}
