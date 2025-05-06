export default function FeaturesSection() {
    return (
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 font-workSans">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Unlock Seamless Healthcare Management
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Optimize your practice with Heights Solutions for better care delivery
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap- font-roboto">
            {/* Feature 1 */}
            <div className="bg-white  rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_4px_8px_rgba(0,0,0,0.1)] p-6  h-[400px] w-[300px] mx-auto relative">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl ">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-3">Integrate Your Systems</h3>
              <p className="text-gray-600 text-center">
                Effortlessly connect all your healthcare platforms, ensuring a unified approach to patient management and
                data access.
              </p>
            </div>
  
            {/* Feature 2 */}
            <div className="bg-white  rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_4px_8px_rgba(0,0,0,0.1)] p-6  h-[400px] w-[300px] mx-auto  relative">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Tailor Your Operations</h3>
              <p className="text-gray-600 text-center">
                Define specific workflows that cater to your team&lsquo;s needs, enhancing efficiency and reducing operational
                costs.
              </p>
            </div>
  
            {/* Feature 3 */}
            <div className="bg-white  rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_4px_8px_rgba(0,0,0,0.1)] p-6  h-[400px] w-[300px]  mx-auto relative">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Advanced Wound Care Services</h3>
              <p className="text-gray-600 text-center">
                Our meticulously selected, high-quality products and expert care coordination ensure faster healing,
                reduced complications, and enhanced patient satisfaction.
              </p>
            </div>
  
            {/* Feature 4 */}
            <div className="bg-white  rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_4px_8px_rgba(0,0,0,0.1)] p-6  h-[400px] w-[300px]  mx-auto relative">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Expert Practice Assessment</h3>
              <p className="text-gray-600 text-center">
                Leverage advanced Practice Analytics to drive strategic growth, optimize revenue cycles, and elevate your
                medical practice&lsquo;s market valuation with data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  