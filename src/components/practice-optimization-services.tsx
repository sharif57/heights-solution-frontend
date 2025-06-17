import Image from "next/image";

export default function Component() {
  return (
    <div>
      <div className="min-h-screen bg-[#E5F3FE] py-16 px-4 mt-[400px] lg:mt-[100px] font-workSans">
        <div className="container mx-auto">
          {/* Header */}
          <h1 className="lg:text-5xl text-2xl font-bold text-center text-gray-900 mb-16">
            Practice Optimization Services
          </h1>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className=" p-6 ">
              <div className="mb-6 h-96 flex items-center justify-center">
                <div className="w-full h-full   flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/publicContain (1).svg"
                    alt="Service 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your Practice Is a Business. Run It Like One.
              </h3>
              <div className="text-sm text-gray-700 space-y-3">
                <p>
                  Create strong financial framework in which to run your
                  business including timely financial forecasting / budgeting
                  tools and reporting.
                </p>
                <p>
                  Utilize financial strategies to measure progress and
                  efficiently manage operational workflows.
                </p>
                <p className="font-semibold underline">
                  Create reporting that gives you answers / insight that you
                  need:
                </p>
                <p>Where should you focus your growth / investment?</p>
                <p>
                  How do we position you best for success now and in the future?
                </p>
                <p>
                  What are areas of risk that we need to proactively monitor /
                  measure?
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-6">
              <div className="mb-6 h-96 flex items-center justify-center">
                <div className="w-full h-full   flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/publicContain (2).svg"
                    alt="Service 1"
                    fill
                    className="object-cover h-full "
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Optimization of Operations.
              </h3>
              <div className="text-sm text-gray-700 space-y-3">
                <p>
                  Review of your operations including advise on operational and
                  human resource initiatives to manage / reduce your fixed costs
                  and optimize marginal profitability of services.
                </p>
                <p>
                  Financial success in clinic based business isn&lsquo;t just
                  about operational success but understanding what makes your
                  practice bespoke.
                </p>
                <p>
                  How does your fixed cost basis compare against your
                  competitors?
                </p>
                <p>Against the best version of yourself?</p>
                <p>What are your unit economics by service? By payor type?</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-6">
              <div className="mb-6 h-96 flex items-center justify-center">
                <div className="w-full h-full   flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/public (1).svg"
                    alt="Service 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Actionable Insights.
              </h3>
              <div className="text-sm text-gray-700 space-y-3">
                <p>Standing monthly review of performance against budget</p>
                <p>In-depth analysis of financial & operational KPIs</p>
                <p>
                  Strategic advice to hit profit, utilization, and capacity
                  goals.
                </p>
                <p className="font-semibold underline">
                  We view your business as owners / operator not accountants.
                </p>
                <p>
                  For us the value of analysis is not in a pretty report but in
                  how that reporting translates into improvements and cashflow.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-6">
              <div className="mb-6 h-96 flex items-center justify-center">
                <div className="w-full h-full   flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/public (2).svg"
                    alt="Service 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI-Powered Operational Integrations
              </h3>
              <div className="text-sm text-gray-700 space-y-3">
                <p>
                  We embed intelligent technology into your existing systems to
                  streamline workflows and reduce overhead:
                </p>
                <div className="space-y-1">
                  <p>✅ Automated clinical note-taking</p>
                  <p>✅ Revenue Cycle Management (RCM) tools including:</p>
                  <p className="ml-4">Code validation & error detection</p>
                  <p className="ml-4">Prior auth tracking & alerts</p>
                  <p className="ml-4">Automated claim submission & appeals</p>
                  <p className="ml-4">
                    Denial prevention and AR aging insights
                  </p>
                  <p>✅ Compliance support for documentation and audits</p>
                  <p>✅ Operational checklists & AI-driven diagnostics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#CCE7FD]">
        <div className="container mx-auto px-4 md:px-6 h-screen bg-[#CCE7FD]">
          <h1 className="lg:text-5xl text-2xl py-14 px-2 lg:w-2/3 text-start font-normal  font-workSans">
            Better Financial Reporting / Insights To Secure Your Practice&apos;s
            Financial Health
          </h1>
          <Image
            src="/axiom_budgeting_healthcare_preview.png"
            alt="Business professional with wooden blocks showing skills and growth concepts"
            width={1000}
            height={1000}
            className="object-cover p-4"
          />
        </div>
      </div>
    </div>
  );
}
