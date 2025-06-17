import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <section className="w-full py-16 md:py-20 font-roboto mt-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-6xl font-workSans
           font-bold text-gray-900 mb-4"
          >
            Our Vision for Healthcare
          </h2>
          <p className="text-gray-500 md:text-xl max-w-4xl mx-auto">
            Streamlining Healthcare Management with Excellence. At Heights
            Solutions, we efficiently streamline administrative processes for
            healthcare providers, improve patient care, and enhance the overall
            healthcare experience. Our mission is to reduce costs while
            delivering high-quality care to patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Article 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl">
              <Image
                src="/blog1.avif"
                alt="Practice Management Analytics"
                height={300}
                width={500}
                className="object-cover p-6 rounded-3xl "
              />
            </div>

            <div className="p-5 space-y-3">
              <div className="text-lg font-medium text-blue-600 uppercase tracking-wider">
                15 FEB 2023
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                What is Practice Management?
              </h3>
              <p className="text-sm text-gray-600">By Jimmy Mohan</p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                READ MORE <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/blog2.webp"
                alt="Patient Care Technology"
                height={300}
                width={500}
                className="object-cover p-6 rounded-3xl "
              />
            </div>
            <div className="p-5 space-y-3">
              <div className="text-lg font-medium text-blue-600 uppercase tracking-wider">
                20 FEB 2023
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Emerging Trends in Patient Care Technology
              </h3>
              <p className="text-sm text-gray-600">By Matthew Eagen</p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                READ MORE <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/blog3.avif"
                alt="Advanced Wound Care"
                height={300}
                width={500}
                className="object-cover p-6 rounded-3xl "
              />
            </div>
            <div className="p-5 space-y-3">
              <div className="text-lg font-medium text-blue-600 uppercase tracking-wider">
                20 FEB 2023
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Advanced Wound Care Techniques
              </h3>
              <p className="text-sm text-gray-600">By Vincent Varghese</p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                READ MORE <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
