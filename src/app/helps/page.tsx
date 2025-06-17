    "use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Get in Touch with Heights Solutions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-2 sm:px-4">
            At Heights Solutions, we efficiently streamline healthcare management services to improve patient care and
            enhance the overall healthcare experience. Fill out the form below to connect with us and discover how we
            can help you reduce costs while delivering high-quality care.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#E5F3FE] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm sm:text-base font-semibold text-gray-800 mb-3 sm:mb-4"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your Full Name"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200"
                  required
                />
              </div>

              {/* Email Address Field */}
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-800 mb-3 sm:mb-4">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email Address"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200"
                  required
                />
              </div>

              {/* Contact Number Field */}
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm sm:text-base font-semibold text-gray-800 mb-3 sm:mb-4"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Your Contact Number"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-semibold text-gray-800 mb-3 sm:mb-4"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here"
                  rows={6}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-vertical min-h-[120px] sm:min-h-[140px] transition-all duration-200"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="w-full sm:w-auto mx-auto block bg-[#003F7F] hover:bg-[#1d4ed8] text-white font-semibold text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg hover:shadow-xl"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
