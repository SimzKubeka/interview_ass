import { ReactNode } from 'react'

interface InfoCardProps {
  title: string
  value: number | string
  percentage: string
  icon: ReactNode
}

export default function InfoCard({ title, value, percentage, icon }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-soft p-4 flex justify-between items-center w-full max-w-sm">
      <div>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="flex items-center gap-2 text-green-500 text-xs font-medium mt-1">
          <span>▲</span>
          <span>{percentage}</span>
        </div>
        <div className="text-2xl font-bold text-gray-800 mt-2">{value}</div>
      </div>

      <div className="bg-sky-100 rounded-full w-12 h-12 flex items-center justify-center text-sky-700 text-xl">
        {icon}
      </div>
    </div>
  )
}
