export default function HealthcareSolution() {
    return (
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 h-screen font-roboto">
        <div className="container mx-auto bg-[#e6f3fa] h-[500px] rounded-3xl py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 lg:w-3/5 mx-auto font-workSans">
              Elevate Your Practice with Innovative Solutions
            </h1>
            <p className="text-base md:text-lg lg:text-xl  mx-auto text-gray-700">
              Utilize cutting-edge strategies to enhance operational efficiency and deliver unparalleled patient
              experiences.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-28">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-16 relative space-y-6 " >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#e6f3fa] flex items-center justify-center text-3xl font-bold text-gray-700">
                  1
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-4">Enhance</h2>
              <p className="text-center text-gray-700">
                Optimize your patient engagement strategies to foster a supportive and communicative healthcare
                environment.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-16 relative space-y-6 " >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#e6f3fa] flex items-center justify-center text-3xl font-bold text-gray-700">
                  2
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-4">Streamline</h2>
              <p className="text-center text-gray-700">
              Implement efficient workflows that reduce administrative burdens and enhance service delivery.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-16 relative space-y-6 " >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-[#e6f3fa] flex items-center justify-center text-3xl font-bold text-gray-700">
                  3
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-4">Achieve</h2>
              <p className="text-center text-gray-700">
              Work collectively with your team to reach strategic goals and enhance the quality of patient care.

              </p>
            </div>
  
           
          </div>
        </div>
      </section>
    )
  }
  