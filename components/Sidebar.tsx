'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* ✅ Desktop Sidebar */}
      <aside className="w-64 h-screen sticky top-0 bg-white p-6 shadow-sm hidden md:block">
      <div className="flex justify-between items-center mb-6">
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
        <SidebarContent pathname={pathname} />
      </aside>

      {/* ✅ Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden">
          <aside className="w-64 h-full bg-white p-6 shadow-xl absolute left-0 top-0">
            <div className="flex justify-between items-center mb-6">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="My Fertility Journey"
                  width={140}
                  height={40}
                  priority
                />
              </Link>
              <button onClick={onClose}>
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <SidebarContent pathname={pathname} onClose={onClose} />
          </aside>
        </div>
      )}
    </>
  )
}

function SidebarContent({
  pathname,
  onClose,
}: {
  pathname: string
  onClose?: () => void
}) {
  return (
    <nav className="space-y-4">
      {NAV_LINKS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              active
                ? 'bg-[#67ADB914] text-[#578388] font-semibold'
                : 'text-[#414141] hover:bg-[#67ADB914]'
            }`}
          >
            <Icon className="h-5 w-5 text-[#578388]" />
            <span>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
