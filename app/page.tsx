'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { ALLOWED_USERS } from '@/lib/constants'

// Zod Schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(5, 'Must be at least 5 characters'),
  rememberMe: z.boolean().optional(),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [loginError, setLoginError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  // login page snippet
const onLogin = (data: LoginFormData) => {
  // Find matching user from ALLOWED_USERS
  const match = ALLOWED_USERS.find(
    (u) => u.email === data.email && u.password === data.password
  )

  if (!match) {
    setLoginError('Invalid email or password')
    return
  }
  // Save user to localStorage
  localStorage.setItem('app-user', JSON.stringify(match))

  // Redirect
  router.push('/dashboard')
}


  return (
    <motion.section
      className="max-w-md w-full p-6 bg-white shadow-md rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1 className="text-2xl font-bold mb-4">Welcome Back</h1>
      <p className="text-gray-600 mb-6">Sign in to manage your dashboard</p>

      {/* Show login error if any */}
      {loginError && (
        <div className="bg-red-100 border border-red-400 text-red-700 p-2 rounded mb-4 text-sm">
          {loginError}
        </div>
      )}

      <form onSubmit={handleSubmit(onLogin)} className="space-y-5">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2
                       focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2
                       focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              id="rememberMe"
              type="checkbox"
              {...register('rememberMe')}
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-700">
              Remember Me
            </label>
          </div>
          <a
            href="#"
            className="text-sm text-sky-600 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-sky-600 text-white w-full py-2 mt-2 rounded-md hover:bg-sky-700 transition"
          >
            Login
          </button>
        </div>
      </form>
    </motion.section>
  )
}
