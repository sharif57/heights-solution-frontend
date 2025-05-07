import Image from "next/image";

export default function ServiceBanner() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden font-roboto mb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/service3.avif"
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
          <h1 className="text-3xl md:text-3xl font-workSans  lg:text-6xl font-semibold text-white leading-tight mb-4">
            Smarter Financial Strategy for Independent Healthcare Practices
          </h1>
          <p className="text-xl text-white font-semibold mb-8">
            Forecast Better. Operate Smarter. Grow Sustainably.
          </p>
        </div>
      </div>

      {/* Custom Arrows Overlay - These would be better as SVGs in a real implementation */}
    </div>
  );
}
