import Image from "next/image";
import Link from "next/link";

export default function HealthcareSections() {
  return (
    <div className="w-full font-roboto">
      {/* First Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="bg-[#f0f7ff] rounded-3xl flex items-center justify-center">
              <Image
                src="/helth.svg"
                alt="Healthcare Calendar Illustration"
                width={1000}
                height={300}
                className="max-w-full lg:h-[850px]"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 font-workSans">
                  Elevate Your Healthcare Delivery
                </h2>
                <p className="text-lg md:text-2xl text-gray-700">
                  Heights Solutions transforms healthcare management by
                  streamlining administrative processes, allowing providers to
                  focus on patient care. Our innovative approach not only
                  enhances operational efficiency but also significantly
                  improves the overall patient experience while reducing costs.
                </p>
              </div>
              {/* <ul className="space-y-3 list-disc pl-5">
                <li className="flex items-start list-disc">
                  <span className="text-sm md:text-2xl">
                    Seamlessly connect various healthcare platforms to create a
                    unified management system
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sm md:text-2xl">
                    Customize workflows to meet the specific needs of your
                    practice, enhancing productivity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sm md:text-2xl">
                    Facilitate secure access to patient data, promoting
                    collaboration and engagement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sm md:text-2xl">
                    Implement advanced security measures to safeguard sensitive
                    information and ensure compliance
                  </span>
                </li>
              </ul> */}
              <ul className="list-disc pl-5 space-y-3">
                <li className="text-sm md:text-2xl">
                  Seamlessly connect various healthcare platforms to create a
                  unified management system
                </li>
                <li className="text-sm md:text-2xl">
                  Customize workflows to meet the specific needs of your
                  practice, enhancing productivity
                </li>
                <li className="text-sm md:text-2xl">
                  Facilitate secure access to patient data, promoting
                  collaboration and engagement
                </li>
                <li className="text-sm md:text-2xl">
                  Implement advanced security measures to safeguard sensitive
                  information and ensure compliance
                </li>
              </ul>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center text-xl justify-center rounded bg-[#003F7F] px-4 py-4  font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  Start Transforming Today!
                </Link>
              </div>

              {/* Testimonial */}
              <div className="flex items-start space-x-3 pt-4 border-t border-gray-200">
                <Image
                  src="/user.avif"
                  alt="Testimonial"
                  width={400}
                  height={400}
                  className="rounded-full size-16 object-cover"
                />
                <div className="text-xs md:text-lg text-gray-600">
                  <p>
                    &quot;Heights Solutions has fundamentally changed how we
                    operate. Their focus on better care for our patients and
                    streamlined processes has saved time and resources.&ldquo;
                  </p>
                  <p className="mt-1 font-medium">
                    Michael Thompson{" "}
                    <span className="text-[#0070F3]">
                      (Operations Director at Urban Health Care)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Optimize Your Healthcare Management with Heights Solutions
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                  Transform your healthcare practice by streamlining
                  administrative tasks with our specialized services. Heights
                  Solutions empowers healthcare providers to enhance patient
                  care while improving operational efficiency and reducing
                  costs.
                </p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#0070F3] mr-2">•</span>
                  <span className="text-sm md:text-base">
                    Integrate multiple healthcare platforms effortlessly to
                    create a cohesive management system
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0070F3] mr-2">•</span>
                  <span className="text-sm md:text-base">
                    Customize workflows tailored to your practice&lsquo;s unique
                    requirements, driving efficiency
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0070F3] mr-2">•</span>
                  <span className="text-sm md:text-base">
                    Facilitate secure, real-time access to patient information,
                    promoting collaboration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0070F3] mr-2">•</span>
                  <span className="text-sm md:text-base">
                    Implement advanced security protocols to ensure patient data
                    protection and regulatory compliance
                  </span>
                </li>
              </ul>

              <div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded bg-[#0070F3] px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  Start Your Journey to Better Care!
                </Link>
              </div>

              {/* Testimonial */}
              <div className="flex items-start space-x-3 pt-4 border-t border-gray-200">
                <Image
                  src="/helth1.svg"
                  alt="Testimonial"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-xs md:text-sm text-gray-600">
                  <p>
                    &ldquo;Heights Solutions has significantly enhanced our
                    administrative efficiency, allowing us to focus on providing
                    exceptional care for our patients.&ldquo;
                  </p>
                  <p className="mt-1 font-medium">
                    Dr. Sarah Johnson{" "}
                    <span className="text-[#0070F3]">
                      (Healthcare Administrator at Riverside Clinic)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="bg-[#f0f7ff] rounded-lg p-6 md:p-8 flex items-center justify-center order-1 md:order-2">
              <Image
                src="/helth1.svg"
                alt="Healthcare Management Illustration"
                width={800}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
