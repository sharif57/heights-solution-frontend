import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-sky-500 font-semibold text-sm tracking-wide uppercase">CLIENT TESTIMONIALS</h2>

            <blockquote className="space-y-6">
              <p className="text-slate-800 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-normal">
                Heights Solutions has transformed our approach to healthcare management, ensuring streamlined processes
                that enhance patient care and reduce costs without compromising quality.
              </p>

              <footer className="space-y-1">
                <div className="text-slate-900 font-semibold text-lg">Michael Johnson</div>
                <div className="text-slate-600 text-base">Healthcare Administrator</div>
              </footer>
            </blockquote>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/publicContain (3).svg"
                alt="Healthcare professionals using digital interface"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
