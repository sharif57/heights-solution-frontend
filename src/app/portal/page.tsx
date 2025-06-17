"use client"

import TestimonialsSection from "@/components/testimonials-section"
import type React from "react"
import { useState } from "react"

export default function ClientLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      console.log("Login submitted:", formData)
      setIsLoading(false)
      // Handle login logic here
    }, 1000)
  }

  return (
    <div>
        <div className=" bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        {/* Login Form Container */}
        <div className="bg-[#dae8f5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Client Login</h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200"
                required
              />
            </div>

            {/* Login Button */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1e40af] hover:bg-[#1d4ed8] disabled:bg-[#1e40af]/70 text-white font-semibold text-sm sm:text-base py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-md hover:shadow-lg disabled:transform-none disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Logging in...
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>


      </div>
    </div>
    <TestimonialsSection/>
    </div>
  )
}
