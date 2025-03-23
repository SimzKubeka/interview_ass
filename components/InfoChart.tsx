import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface InfoChartProps {
  label: string
  value: number
  color: string // Tailwind color class or hex
}

export default function InfoChart({ label, value, color }: InfoChartProps) {
  const chartData = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, '#E5E7EB'], // muted gray background
        borderWidth: 0,
      },
    ],
  }

  const options = {
    cutout: '75%',
    responsive: true,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  }

  return (
    <div className="flex flex-col items-center justify-center w-40">
      <div className="relative w-24 h-24">
        <Doughnut data={chartData} options={options} />
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
          {value}%
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="text-lg font-semibold">{value}%</p>
        <p className="text-gray-500 text-sm">{label}</p>
      </div>
    </div>
  )
}
