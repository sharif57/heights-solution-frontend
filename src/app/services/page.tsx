
import Image from "next/image"
import {  Clock, DollarSign, Lock, Settings, Users, BarChart3, PencilOff } from 'lucide-react'

export default function HealthcareSolutions() {
  return (
    <main className="min-h-screen font-roboto">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-center mb-12 font-workSans">
            Comprehensive Healthcare Management Solutions
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left column with image on larger screens */}
            <div className="lg:col-span-1 relative h-64 sm:h-80 lg:h-[600px] rounded-2xl overflow-hidden">
              <Image 
                src="/service.avif" 
                alt="Healthcare professionals collaborating" 
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Right column with service cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Practice Operations */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <span className="text-blue-500">
                    <PencilOff className="size-10 "/>                    </span>
                  </div>
                  <h3 className="font-semibold text-2xl mb-2">Practice Operations</h3>
                  <p className="text- text-gray-600">Efficient, strategic operational support to enhance productivity</p>
                </div>
                
                {/* Revenue Cycle Management */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <span className="text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Revenue Cycle Management</h3>
                  <p className="text-xs text-gray-600">Optimize reimbursement, reduce costs while maintaining high quality patient care</p>
                </div>
                
                {/* Compliance */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mb-3">
                    <span className="text-teal-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Compliance</h3>
                  <p className="text-xs text-gray-600">HIPAA Compliance & Data Security, Workplace Safety & Medical & Legal compliance</p>
                </div>
                
                {/* Practice Ownership & Transition */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <span className="text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Practice Ownership & Transition</h3>
                  <p className="text-xs text-gray-600">Buy/Sell Advisory & Valuation, M&A Facilitation, Succession Planning & Practice Support</p>
                </div>
                
                {/* Practice Improvements */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                    <span className="text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Practice Improvements</h3>
                  <p className="text-xs text-gray-600">Implement Effective Billing & Collection Processes & Optimize Services for Cost Savings</p>
                </div>
                
                {/* Concierge Practice */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <span className="text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-2">Concierge Practice</h3>
                  <p className="text-xs text-gray-600">Buy/Sell Advisory & Valuation, Compensation Planning & Retirement Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Why Choose Heights Solutions?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Streamline Healthcare Management for Optimal Patient Care
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Enhanced Team Collaboration */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Enhanced Team Collaboration</h3>
              <p className="text-sm text-gray-600">Effortlessly streamline communication among healthcare providers to elevate patient care and operational efficiency</p>
            </div>
            
            {/* Data-Driven Insights */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Data-Driven Insights</h3>
              <p className="text-sm text-gray-600">Harness analytics to uncover opportunities for improvement and enhance overall service delivery</p>
            </div>
            
            {/* Cost Reduction */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Cost Reduction</h3>
              <p className="text-sm text-gray-600">Lower operational costs without compromising on the quality of patient care</p>
            </div>
            
            {/* Secure Data Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Secure Data Management</h3>
              <p className="text-sm text-gray-600">Adopt stringent security measures to protect patient data and ensure compliance with regulations</p>
            </div>
            
            {/* Customizable Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Customizable Solutions</h3>
              <p className="text-sm text-gray-600">Adapt our solutions to your specific operational needs and workflow requirements</p>
            </div>
            
            {/* Time-Saving Automation */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Time-Saving Automation</h3>
              <p className="text-sm text-gray-600">Leverage intelligent workflows for faster access to necessary administrative information</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
