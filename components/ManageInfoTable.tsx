'use client'

import { Switch } from '@headlessui/react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { FACILITIES as sampleData } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'

export default function ManageInfoTable() {
  const [tableData, setTableData] = useState(sampleData)

  const toggleStatus = (index: number) => {
    const updated = [...tableData]
    updated[index].status = !updated[index].status
    setTableData(updated)
  }

  return (
    <div className="bg-white w-full rounded-xl shadow-soft mt-10 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Practises</h2>
      </div>

      {/* 🖥️ Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
          <thead className="bg-gray-100 rounded-md">
            <tr className="text-gray-600">
              <th className="px-4 py-2">Practise Name</th>
              <th className="px-4 py-2">Tel No</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Date Created</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {tableData.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border-b last:border-none"
                >
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.tel}</td>
                  <td className="px-4 py-2">{row.email}</td>
                  <td className="px-4 py-2">{row.created}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={row.status}
                        onChange={() => toggleStatus(idx)}
                        className={`${row.status ? 'bg-teal-500' : 'bg-gray-300'} relative inline-flex h-5 w-10 items-center rounded-full transition-colors`}
                      >
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
                      </Switch>
                      <span className="text-sm">
                        {row.status ? 'Active' : 'Disabled'}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2 flex gap-3 text-sky-700">
                    <PencilIcon className="h-5 w-5 cursor-pointer hover:scale-110 hover:text-green-500 transition-transform" />
                    <TrashIcon className="h-5 w-5 cursor-pointer hover:scale-110 hover:text-red-500 transition-transform" />
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* 📱 Mobile Card View */}
      <div className="md:hidden space-y-4">
        <AnimatePresence>
          {tableData.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-300 rounded-lg p-4 shadow-sm text-sm space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-semibold">Practise:</span>
                <span>{row.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Tel:</span>
                <span>{row.tel}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span className="truncate">{row.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Created:</span>
                <span>{row.created}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Status:</span>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={row.status}
                    onChange={() => toggleStatus(idx)}
                    className={`${row.status ? 'bg-teal-500' : 'bg-gray-300'} relative inline-flex h-5 w-10 items-center rounded-full transition-colors`}
                  >
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
                  </Switch>
                  <span>{row.status ? 'Active' : 'Disabled'}</span>
                </div>
              </div>
              <div className="flex justify-end gap-4 text-sky-700 pt-2">
                <PencilIcon className="h-5 w-5 cursor-pointer hover:scale-110 hover:text-green-500 transition-transform" />
                <TrashIcon className="h-5 w-5 cursor-pointer hover:scale-110 hover:text-red-500 transition-transform" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      
    </div>
  )
}
