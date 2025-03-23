'use client'

import { Switch } from '@headlessui/react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const sampleData = [
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    created: '04/10/2021',
    status: true,
  },
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    created: '04/10/2021',
    status: true,
  },
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    created: '04/10/2021',
    status: false,
  },
]

export default function InfoTable() {
  const [tableData, setTableData] = useState(sampleData)

  const toggleStatus = (index: number) => {
    const updated = [...tableData]
    updated[index].status = !updated[index].status
    setTableData(updated)
  }

  return (
    <div className="bg-white w-full rounded-xl shadow-soft p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Newest Practises</h2>
      </div>
      <div className="overflow-x-auto">
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
            {tableData.map((row, idx) => (
              <tr key={idx} className="bg-white border-b last:border-none">
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
                  <PencilIcon className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform" />
                  <TrashIcon className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="my-2 border-1 border-gray-300" />
      <div className="w-full flex justify-end mt-4">
      <a href="#" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
          See All
          <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  )
}
