'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const links = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: HomeIcon,
  },
  {
    href: '/user-settings',
    label: 'My Profile',
    icon: UserIcon,
  },
  {
    href: '/manage-facilities',
    label: 'Manage Practises',
    icon: BriefcaseIcon,
  },
  {
    href: '/logs',
    label: 'Logs',
    icon: DocumentTextIcon,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 min-h-screen bg-white p-6 shadow-sm hidden md:block">
      <div className="mb-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="My Fertility Journey"
            width={140}
            height={40}
            priority
          />
        </Link>
      </div>

      <nav className="space-y-4">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                active
                  ? 'bg-[#67ADB914] text-[#578388] font-semibold'
                  : 'text-[##414141] hover:bg-[#67ADB914]'
              }`}
            >
              <Icon className="h-5 w-5 text-[#578388] font-bold" />
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
