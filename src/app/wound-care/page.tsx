import Image from "next/image";
import { Check, Mail, Phone, MapPin, MessageCircleMore } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";

export default function PartnerPage() {
  return (
    <div>
      <HeroBanner />
      <main className="min-h-screen bg-white font-roboto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="lg:text-6xl text-3xl font-workSans font-bold text-gray-900 mb-4">
                  Partner with Heights Solutions
                </h1>
                <p className="text-gray-700 font-roboto">
                  At Heights Solutions, we help independent clinical practices
                  identify high-integrity growth opportunities and implement
                  practical solutions to achieve their financial and clinical
                  ambitions. When you&rsquo;re a solo or small medical practice,
                  you&lsquo;re facing obstacles. That makes our approach to the
                  realities of running a practice, and our focus on outcomes,
                  especially valuable. We&rsquo;ve been in your shoes. Our team
                  of healthcare founders are especially aligned with
                  clinician-centered practices, high-potential groups that
                  exceed care standards, everything from solo practices with
                  strong values and clinicians. Practicing medicine is
                  challenging enough. With Heights Solutions as your partner,
                  you can focus on what matters: practice and excellent patient
                  experience, we&#39;re here to help. What are your goals?
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-[#785DC8] " />
                  </div>
                  <p className="ml-2 text-gray-700">
                    Dedicated to health and finance operations, and clinical
                    integration
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-[#785DC8] " />
                  </div>
                  <p className="ml-2 text-gray-700">
                    Commitment to set-up customized collaboration
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-[#785DC8] " />
                  </div>
                  <p className="ml-2 text-gray-700">
                    Personalized support from experienced healthcare founders
                  </p>
                </div>
              </div>

              {/* Consulting Options */}
              <div>
                <p className="text-gray-700 mb-2">
                  As a thank you for connecting, choose one of the
                  following—free of charge:
                </p>
                <div className="space-y-2 ml-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-green-500 " />
                    </div>
                    <p className="ml-2 text-gray-700">
                      A 60-minute initial financial health or practice health
                      check-in session
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-green-500 " />
                    </div>
                    <p className="ml-2 text-gray-700">
                      A strategy session with the founders to discuss
                      operational, financial, or clinical growth goals
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div>
                <p className="text-gray-700">
                  Together, we can craft innovative solutions that ensure
                  patient care and drive sustainable growth for your practice.
                </p>
              </div>

              {/* Button */}
              <div>
                <button className="bg-[#003F7F] hover:bg-blue-800 text-white font-medium py-2 px-5 rounded transition duration-300">
                  Schedule Your Consultation
                </button>
              </div>
            </div>

            {/* Right Column - Images and Form */}
            <div className="space-y-6">
              {/* Images */}
              <div className=" gap-4">
                <div className="">
                  <Image
                    src="/image.png"
                    alt="Healthcare professional with patient"
                    width={900}
                    height={900}
                    className="object-cover w-[700px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="container mx-auto p-4 sm:p-6 lg:p-2 font-roboto lg:mt-[100px]">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4">
                {/* Left Column - Blue Contact Info */}
                <div className="bg-[#00509E] text-white p-8">
                  <h2 className="text-xl font-bold mb-8">GET IN TOUCH</h2>

                  <div className="space-y-8">
                    {/* We're Here to Assist You */}
                    <div className="flex items-start">
                      <div className="mr-  rounded-full p-3">
                        <MessageCircleMore
                          color="#ebebeb"
                          className="size-[36px]"
                        />
                      </div>
                      <div>
                        <h3 className="lg:text-4xl text-3xl font-semibold leading-tight font-workSans">
                          We&#39;re Here to Assist You
                        </h3>
                      </div>
                    </div>

                    {/* Our Office */}
                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-800 bg-opacity-30 rounded-full p-3">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Our Office</h3>
                        <p className="mt-1">
                          Heights Solutions, Houston, Texas
                        </p>
                      </div>
                    </div>

                    {/* Contact Us Via Email */}
                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-800 bg-opacity-30 rounded-full p-3">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          Contact Us Via Email
                        </h3>
                        <p className="mt-1">info@heightssolutions.com</p>
                      </div>
                    </div>

                    {/* Call Us */}
                    <div className="flex items-start">
                      <div className="mr-4 bg-blue-800 bg-opacity-30 rounded-full p-3">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Call Us</h3>
                        <p className="mt-1">301-437-8600</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="md:col-span-3 p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-gray-700 mb-2"
                        >
                          Your First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full border-b border-gray-300 py-2 focus:border-blue-700 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-gray-700 mb-2"
                        >
                          Your Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full border-b border-gray-300 py-2 focus:border-blue-700 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full border-b border-gray-300 py-2 focus:border-blue-700 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 mb-2"
                        >
                          Your Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full border-b border-gray-300 py-2 focus:border-blue-700 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full border-b border-gray-300 py-2 focus:border-blue-700 focus:outline-none resize-none"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="bg-[#003F7F] hover:bg-blue-800 text-white font-medium py-2 px-5 rounded transition duration-300"
                      >
                        SEND YOUR MESSAGE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
