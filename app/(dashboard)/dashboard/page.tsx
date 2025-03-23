'use client'

import InfoCard from '@/components/InfoCard'
import InfoChart from '@/components/InfoChart'
import InfoTable from '@/components/InfoTable'
import { DASHBOARD_CARDS, DASHBOARD_CHARTS } from '@/lib/constants'

export default function DashboardPage() {
  return (
    <section className="text-gray-900 flex flex-col flex-nowrap">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Overview of key metrics, info cards and charts.</p>

      {/* Info Cards */}
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {DASHBOARD_CARDS.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            icon={<card.icon className="h-6 w-6" />}
          />
        ))}
      </div>

      {/* Info Charts */}
      <div className="flex flex-wrap justify-around gap-6 bg-white rounded-xl shadow-soft p-6 mt-10">
        {DASHBOARD_CHARTS.map((chart, index) => (
          <InfoChart
            key={index}
            label={chart.label}
            value={chart.value}
            color={chart.color}
          />
        ))}
      </div>

      {/* Info Table */}
      <div className="flex flex-wrap justify-around gap-6 bg-white rounded-xl shadow-soft mt-10">
        <InfoTable />
      </div>
    </section>
  )
}