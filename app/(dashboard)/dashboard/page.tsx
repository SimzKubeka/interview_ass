'use client'

import InfoCard from "@/components/InfoCard";
import InfoChart from "@/components/InfoChart";
import {
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  DocumentIcon,
  LightBulbIcon,
  HeartIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'

export default function DashboardPage() {
  return (
    <section className="text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Overview of key metrics and info cards.</p>
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <InfoCard title="Total Practices" value={11} percentage="+15%" icon={<BuildingOffice2Icon className="h-6 w-6" />} />
        <InfoCard title="Total Subscribers" value={261} percentage="+15%" icon={<UserGroupIcon className="h-6 w-6" />} />
        <InfoCard title="Total Treatments" value={135} percentage="+15%" icon={<HeartIcon className="h-6 w-6" />} />
        <InfoCard title="Total Consents" value={135} percentage="+15%" icon={<DocumentIcon className="h-6 w-6" />} />
        <InfoCard title="Total Consents Signed" value={2159} percentage="+15%" icon={<ClipboardDocumentCheckIcon className="h-6 w-6" />} />
        <InfoCard title="Total Fact Sheets Read" value={2159} percentage="+15%" icon={<LightBulbIcon className="h-6 w-6" />} />
      </div>

      <div className="flex flex-wrap justify-around gap-6 bg-white rounded-xl shadow-soft p-6 mt-10">
        <InfoChart label="Pending" value={24} color="#FB923C" />
        <InfoChart label="Registered" value={56} color="#22C55E" />
        <InfoChart label="Post Treatment" value={20} color="#3B82F6" />
      </div>

    </section>
  )
}