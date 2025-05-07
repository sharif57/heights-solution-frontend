import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden font-roboto mb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.avif"
          alt="Business professional with wooden blocks showing skills and growth concepts"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl leading-10">
          <h1 className="text-3xl md:text-4xl font-workSans  lg:text-4xl font-semibold text-white leading-tight mb-4">
            HOW DO YOU MAXIMIZE VALUE WHILE MINIMIZING RISK?
          </h1>
          <p className="text-xl md:text-3xl text-white font-semibold mb-8">
            REPUTATION OVER PROFIT.
          </p>
          <Link
            href="#discover"
            className="inline-block bg-[#00509E] rounded-lg hover:bg-blue-800 text-white font-medium py-1  px-6 transition duration-300 ease-in-out"
          >
            Discover More
          </Link>
        </div>
      </div>

      {/* Custom Arrows Overlay - These would be better as SVGs in a real implementation */}
    </div>
  );
}
