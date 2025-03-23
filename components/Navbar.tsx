'use client'

import { useState } from 'react'
import {
  BellIcon,
  TrashIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const notifications = [
  {
    title: 'New Registration',
    user: 'Alex Fredricks',
    date: '07 Oct 2022',
    avatar: '/avatar1.jpg',
  },
  {
    title: 'New Consent Added',
    user: 'Blake Robertson',
    date: '07 Oct 2022',
    avatar: '/avatar2.jpg',
  },
]

export default function Navbar() {
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center relative z-20">
      <div />

      <div className="flex items-center gap-6 relative">
        {/* Notification Icon */}
        <div className="relative">
          <button
            onClick={() => {
              setNotifOpen(!notifOpen)
              setProfileOpen(false)
            }}
            className="relative text-gray-700 hover:text-gray-900 transition"
          >
            <BellIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              2
            </span>
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Notifications</h3>
                <p className="text-sm text-gray-500">You have 2 unread messages</p>
              </div>

              <ul>
                {notifications.map((n, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 border-b">
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
                    <TrashIcon className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                  </li>
                ))}
              </ul>

              <div className="p-3 text-center text-sm text-sky-600 hover:underline cursor-pointer">
                Clear All
              </div>
            </div>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setProfileOpen(!profileOpen)
              setNotifOpen(false)
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#67ADB914] text-[#578388] font-semibold flex items-center justify-center">
              AS
            </div>
            <p className="text-sm font-medium text-gray-700">Adrian Stefan</p>
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-4 border-b border-gray-300">
                <p className="font-semibold">Adrian Stefan</p>
                <p className="text-sm text-gray-500">adrian@mrfertility.co.za</p>
              </div>
              <div className="flex flex-col">
                <div className="flex w-full">
                  <button className="m-2 w-full text-left p-2 hover:bg-gray-100 rounded-md">Profile</button>
                </div>
                <div className="flex w-full border-t border-gray-300">
                  <button className="m-2 w-full text-left p-2 hover:bg-gray-100 rounded-md">Logout</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
