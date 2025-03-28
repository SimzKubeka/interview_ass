'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  BellIcon,
  TrashIcon,
  ChevronDownIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { NOTIFICATIONS as initialNotifications } from '@/lib/constants'
import Sidebar from '@/components/Sidebar'

export default function Navbar() {
  const router = useRouter()

  // Logged-in user state
  const [user, setUser] = useState<{
    name: string
    email: string
    initials: string
    facility: string
  } | null>(null)

  // Dropdown states
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifications, setNotifications] = useState(initialNotifications)
  const [mobileOpen, setMobileOpen] = useState(false)

  const notifRef = useRef<HTMLDivElement | null>(null)
  const profileRef = useRef<HTMLDivElement | null>(null)

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('app-user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Outside-click to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotifOpen(false)
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle notifications
  const handleDelete = (index: number) => {
    const updated = [...notifications]
    updated.splice(index, 1)
    setNotifications(updated)
  }
  const handleClearAll = () => setNotifications([])

  // Handle Profile => redirect to user-settings
  const goToProfile = () => {
    setProfileOpen(false)
    router.push('/user-settings')
  }

  // Handle logout => clear user => redirect to login
  const handleLogout = () => {
    localStorage.removeItem('app-user')
    setUser(null)
    router.push('/')
  }

  return (
    <>
      <nav className="bg-white shadow-sm p-4 flex justify-between md:justify-end items-center sticky top-0 z-30">
        {/* Hamburger for mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-6 relative">
          {/* 🔔 Notification Dropdown */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => {
                setNotifOpen(!notifOpen)
                setProfileOpen(false)
              }}
              className="relative text-gray-700 hover:text-gray-900 transition"
            >
              <BellIcon className="w-6 h-6" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {notifications.length}
                </span>
              )}
            </button>

            {notifOpen && (
              <div className="absolute right-0 mt-2 w-80 max-w-xs bg-white rounded-xl shadow-lg overflow-hidden z-30">
                <div className="p-4 border-b border-gray-300">
                  <h3 className="font-semibold">Notifications</h3>
                  <p className="text-sm text-gray-500">
                    {notifications.length > 0
                      ? `You have ${notifications.length} unread message(s)`
                      : 'No new notifications'}
                  </p>
                </div>

                <ul>
                  {notifications.map((n, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 p-4 border-b border-gray-300"
                    >
                      <img
                        src={n.avatar}
                        alt={n.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{n.title}</p>
                        <p className="text-sm text-gray-500">{n.user}</p>
                        <p className="text-xs text-gray-400 mt-1">🕒 {n.date}</p>
                      </div>
                      <TrashIcon
                        onClick={() => handleDelete(i)}
                        className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer"
                      />
                    </li>
                  ))}
                </ul>

                {notifications.length > 0 && (
                  <div
                    className="p-3 text-center text-sm text-sky-600 hover:underline cursor-pointer"
                    onClick={handleClearAll}
                  >
                    Clear All
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 👤 Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => {
                setProfileOpen(!profileOpen)
                setNotifOpen(false)
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              {/* Show user initials OR fallback '??' */}
              <div className="w-9 h-9 rounded-full bg-[#67ADB914] text-[#578388] font-semibold flex items-center justify-center">
                {user?.initials ?? '??'}
              </div>
              {/* Show user name OR fallback 'Guest' */}
              <p className="text-sm font-medium text-gray-700 hidden lg:inline">
                {user?.name ?? 'Guest'}
              </p>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 max-w-xs bg-white rounded-xl shadow-xl overflow-hidden z-30">
                {user ? (
                  <>
                    {/* Logged-in user info */}
                    <div className="p-4 border-b border-gray-300">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex w-full">
                        <button
                          onClick={goToProfile}
                          className="m-2 w-full text-left p-2 hover:bg-gray-100 rounded-md"
                        >
                          Profile
                        </button>
                      </div>
                      <div className="flex w-full border-t border-gray-300">
                        <button
                          onClick={handleLogout}
                          className="m-2 w-full text-left p-2 hover:bg-gray-100 rounded-md"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* If no user, show 'Login' button */}
                    <div className="p-4 border-b border-gray-300">
                      <p className="font-semibold">Not logged in</p>
                    </div>
                    <button
                      onClick={() => router.push('/')}
                      className="m-2 w-full text-left p-2 hover:bg-gray-100 rounded-md"
                    >
                      Go to Login
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && <Sidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />}
    </>
  )
}
