import { PencilOff } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="font-roboto">
      <section className="w-full bg-gradient-to-b from-blue-50 to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-workSans font-bold text-gray-900 mb-6 leading-tight">
                Streamline IT Systems and Infrastructure
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Empowering Businesses with Cutting-Edge IT Services At Heights
                Solutions, we provide comprehensive IT solutions that ensure
                seamless operations, enhanced security, and long-term
                efficiency. Whether you need cloud support, vendor management,
                or business continuity planning, we deliver tailored technology
                solutions that drive success.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full">
              <Image
                src="/service2.avif"
                alt="Digital interface showing AI and technology solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-12 font-workSans">
            Comprehensive Healthcare Management Solutions
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
            {/* Left column with image on larger screens */}
            <div className="lg:col-span-1 relative h-64 sm:h-80 lg:h-[700px] rounded-2xl overflow-hidden">
              <Image
                src="/services.avif"
                alt="Healthcare professionals collaborating"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right column with service cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Practice Operations */}
                <div className="bg-white p-4 rounded-lg  flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <span className="text-blue-500">
                      <PencilOff className="size-10 " />{" "}
                    </span>
                  </div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Cloud Migration and Support
                  </h3>
                  <p className=" text-gray-600">
                    Seamlessly transition your healthcare infrastructure to the
                    cloud, ensuring scalable, secure, and efficient digital
                    transformation.
                  </p>
                </div>

                {/* Revenue Cycle Management */}
                <div className="bg-white p-4 rounded-lg  flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <span className="text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-2xl mb-2">
                    IT Vendor Management
                  </h3>
                  <p className=" text-gray-600">
                    Comprehensive IT vendor management to streamline healthcare
                    technology partnerships, ensuring compliance,
                    cost-effectiveness, and optimal performance.
                  </p>
                </div>

                {/* Compliance */}
                <div className="bg-white p-4 rounded-lg  flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <span className="text-teal-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-2xl mb-2">Tech Support</h3>
                  <p className=" text-gray-600">
                    24/7 expert IT support specifically designed for healthcare
                    providers. We diagnose and resolve technical issues quickly,
                    minimize system downtime, and maintain the highest standards
                    of data security and compliance.
                  </p>
                </div>

                {/* Practice Ownership & Transition */}
                <div className="bg-white p-4 rounded-lg  flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <span className="text-purple-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Software Procurement
                  </h3>
                  <p className=" text-gray-600">
                    Strategic software selection and acquisition tailored to
                    healthcare needs, ensuring optimal technology solutions that
                    enhance operational efficiency and patient care.
                  </p>
                </div>

                {/* Practice Improvements */}
                <div className="bg-white p-4 rounded-lg  flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <span className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Business Continuity
                  </h3>
                  <p className=" text-gray-600">
                    Comprehensive business continuity planning to safeguard your
                    healthcare operations. Our strategic approach includes:
                  </p>
                </div>

                {/* Concierge Practice */}
                <div className="bg-white p-4 rounded-lg  flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <span className="text-purple-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Backup & Recovery
                  </h3>
                  <p className=" text-gray-600">
                    Comprehensive data protection solutions designed
                    specifically for healthcare providers. Our advanced backup
                    and recovery services ensure: 99.99% Data Integrity and
                    Rapid Disaster Recovery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
