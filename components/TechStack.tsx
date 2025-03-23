'use client'

import { motion } from 'framer-motion'
import { TECH_STACK } from '@/lib/constants'



export default function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-full mt-10 p-6 bg-white rounded-xl shadow-soft hover:shadow-md transition-shadow"
    >
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TECH_STACK.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.name}
              className="p-4 bg-gray-50 rounded-md shadow-sm flex gap-4 hover:bg-gray-100 hover:scale-105 transition items-center"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-sky-600  ">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-semibold mb-1">{item.name}</h2>
                <p className="text-sm text-gray-700 mb-1">{item.description}</p>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Use Case:</span> {item.useCase}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}
