'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FACILITIES } from '@/lib/constants'

// Extended schema
const userSettingsSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  phoneNumber: z.string().optional(),
  occupation: z.string().optional(),
  facility: z.string().min(1, 'Select a facility'),
  facilityPhone: z.string().optional(),
  facilityManager: z.string().optional(),
})

type UserSettingsFormData = z.infer<typeof userSettingsSchema>

// Our facility objects might look like:
// { name: 'Cape Town Practice', tel: '123-4567', manager: 'Alice' }
// Make sure your constants have those fields if you want them auto-populated.

export default function UserSettingsPage() {
  const [submitted, setSubmitted] = useState(false)

  // Setup form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<UserSettingsFormData>({
    resolver: zodResolver(userSettingsSchema),
    // Start with all blank/empty. We'll load actual values from localStorage in useEffect.
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      occupation: '',
      facility: '',
      facilityPhone: '',
      facilityManager: '',
    },
  })

  // Load the user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('app-user')
    if (storedUser) {
      const parsed = JSON.parse(storedUser)
      // Populate form fields with user data
      setValue('name', parsed.name || '')
      setValue('email', parsed.email || '')
      // If you stored phoneNumber/occupation for user, set them here too:
      setValue('phoneNumber', parsed.phoneNumber || '')
      setValue('occupation', parsed.occupation || '')
      setValue('facility', parsed.facility || '')
    }
  }, [setValue])

  // Watch the selected facility name
  const watchFacility = watch('facility')

  // Each time facility changes, find that facility's details and auto-update
  useEffect(() => {
    const selectedFacility = FACILITIES.find((f) => f.name === watchFacility)
    if (selectedFacility) {
      // Auto-update phone & manager fields
      setValue('facilityPhone', selectedFacility.tel ?? '')
      setValue('facilityManager', selectedFacility.manager ?? '')
    } else {
      // If no facility or invalid, reset to blank
      setValue('facilityPhone', '')
      setValue('facilityManager', '')
    }
  }, [watchFacility, setValue])

  // Handle form submission
  const onSubmit = (data: UserSettingsFormData) => {
    console.log('User settings updated:', data)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)

    // Optionally, store updated info back in localStorage:
    localStorage.setItem('app-user', JSON.stringify(data))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-3xl w-full mt-10"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-soft p-6 hover:shadow-md transition-shadow"
        >
          <h1 className="text-2xl font-bold mb-2">User Settings</h1>
          <p className="mb-6 text-sm text-gray-600">
            Manage account details and preferences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                {...register('phoneNumber')}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500 mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Occupation */}
            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                Occupation
              </label>
              <input
                id="occupation"
                type="text"
                {...register('occupation')}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
              />
              {errors.occupation && (
                <p className="text-sm text-red-500 mt-1">{errors.occupation.message}</p>
              )}
            </div>
          </div>

          {/* Facility */}
          <div className="mt-6">
            <label htmlFor="facility" className="block text-sm font-medium text-gray-700">
              Facility
            </label>
            <select
              id="facility"
              {...register('facility')}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
            >
              <option value="">-- Select a facility --</option>
              {FACILITIES.map((f) => (
                <option key={f.name} value={f.name}>
                  {f.name}
                </option>
              ))}
            </select>
            {errors.facility && (
              <p className="text-sm text-red-500 mt-1">{errors.facility.message}</p>
            )}
          </div>

          {/* If user hasn't selected a facility, show Save button here */}
          {!watchFacility && (
            <div className="pt-6">
              <button
                type="submit"
                className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
              >
                Save Changes
              </button>
              {submitted && (
                <p className="text-green-600 text-sm mt-2">Settings updated successfully!</p>
              )}
            </div>
          )}
        </motion.div>

        {/* Conditional Facility Section */}
        {watchFacility && (
          <motion.div
            key="facility-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-soft p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2">{watchFacility} Details</h2>
            <p className="text-sm text-gray-600 mb-4">
              You can edit additional info about <strong>{watchFacility}</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="facilityPhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Facility Phone
                </label>
                <input
                  id="facilityPhone"
                  type="text"
                  {...register('facilityPhone')}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm 
                             focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="facilityManager"
                  className="block text-sm font-medium text-gray-700"
                >
                  Facility Manager
                </label>
                <input
                  id="facilityManager"
                  type="text"
                  {...register('facilityManager')}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm 
                             focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Save button once facility is chosen */}
            <div className="pt-6">
              <button
                type="submit"
                className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
              >
                Save Changes
              </button>
              {submitted && (
                <p className="text-green-600 text-sm mt-2">
                  Settings updated successfully!
                </p>
              )}
            </div>
          </motion.div>
        )}
      </form>
    </motion.section>
  )
}
