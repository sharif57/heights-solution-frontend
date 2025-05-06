import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="w-full  bg-[#f0f7ff] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-workSans">
              Transform Your <br className="hidden sm:inline" />
              Healthcare <br className="hidden sm:inline" />
              Management
            </h1>
            <p
              className="lg:w-[78%] text-lg text-gray-700 font-roboto"
            >
              Elevate your practice with Heights Solutions. Our innovative
              services streamline administrative tasks, allowing healthcare
              providers to focus on what truly matters—enhancing patient care.
              Experience efficient operations that reduce costs while
              maintaining high-quality standards.
            </p>
            <div className="pt-4">
              <Button className="bg-[#003F7F] hover:bg-[#003F7F] text-white px-6 py-3 h-auto text-xl">
                Discover How
              </Button>
            </div>

            <div className="mt-12 flex items-start space-x-4 pt-8">
              <div className="flex-shrink-0">
                <Image
                  src="/public.avif"
                  alt="Testimonial"
                  width={80}
                  height={80}
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-gray-700">
                  <span className="text-3xl font-roboto">&rdquo;</span>
                  Heights Solutions has revolutionized our operations, enhancing our efficiency and significantly
                  improving the patient experience.
                  <span className="text-3xl font-normal font-serif">&rdquo;</span>
                </blockquote>
                <p className="mt-2 text-lg font-medium font-roboto text-gray-900">
                  Jincy Abraham <span className="text-blue-600">(Practice Administrator at Quantum Health)</span>
                </p>
              </div>
            </div>
            
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/publicContain.svg"
              alt="Healthcare Management Illustration"
              width={500}
              height={500}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
