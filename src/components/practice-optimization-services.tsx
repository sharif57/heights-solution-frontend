import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen bg-[#e8f4f8] py-12 px-4 font-workSans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-16">Practice Optimization Services</h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className=" p-6 ">
            <div className="mb-6 h-64 flex items-center justify-center">
              <div className="w-full h-full   flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/publicContain (1).svg"
                  alt="Service 1"
                  fill                  
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Practice Is a Business. Run It Like One.</h3>
            <div className="text-sm text-gray-700 space-y-3">
              <p>
                Create strong financial framework in which to run your business including timely financial forecasting /
                budgeting tools and reporting.
              </p>
              <p>Utilize financial strategies to measure progress and efficiently manage operational workflows.</p>
              <p className="font-semibold underline">
                Create reporting that gives you answers / insight that you need:
              </p>
              <p>Where should you focus your growth / investment?</p>
              <p>How do we position you best for success now and in the future?</p>
              <p>What are areas of risk that we need to proactively monitor / measure?</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="p-6">
            <div className="mb-6 h-64 flex items-center justify-center">
              <div className="w-full h-full   flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/publicContain (2).svg"
                  alt="Service 1"
                  fill                  
                  className="object-cover h-full "
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization of Operations.</h3>
            <div className="text-sm text-gray-700 space-y-3">
              <p>
                Review of your operations including advise on operational and human resource initiatives to manage /
                reduce your fixed costs and optimize marginal profitability of services.
              </p>
              <p>
                Financial success in clinic based business isn&lsquo;t just about operational success but understanding what
                makes your practice bespoke.
              </p>
              <p>How does your fixed cost basis compare against your competitors?</p>
              <p>Against the best version of yourself?</p>
              <p>What are your unit economics by service? By payor type?</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="mb-6 h-48 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-cyan-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 160" className="w-full h-full">
                  {/* Insights illustration */}
                  <circle cx="70" cy="90" r="15" fill="#4ade80" />
                  <rect x="55" y="105" width="30" height="35" rx="15" fill="#22c55e" />
                  <circle cx="130" cy="80" r="12" fill="#fbbf24" />
                  <rect x="118" y="92" width="24" height="40" rx="12" fill="#f59e0b" />
                  <rect x="150" y="60" width="6" height="20" fill="#8b5cf6" />
                  <rect x="158" y="50" width="6" height="30" fill="#8b5cf6" />
                  <rect x="166" y="55" width="6" height="25" fill="#8b5cf6" />
                  <circle cx="40" cy="40" r="8" fill="#06b6d4" />
                  <path d="M37 37 L43 37 M40 34 L40 40" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Actionable Insights.</h3>
            <div className="text-sm text-gray-700 space-y-3">
              <p>Standing monthly review of performance against budget</p>
              <p>In-depth analysis of financial & operational KPIs</p>
              <p>Strategic advice to hit profit, utilization, and capacity goals.</p>
              <p className="font-semibold underline">We view your business as owners / operator not accountants.</p>
              <p>
                For us the value of analysis is not in a pretty report but in how that reporting translates into
                improvements and cashflow.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="mb-6 h-48 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 160" className="w-full h-full">
                  {/* AI/Technology illustration */}
                  <rect x="40" y="40" width="60" height="40" rx="4" fill="#fbbf24" opacity="0.8" />
                  <rect x="110" y="50" width="50" height="30" rx="4" fill="#67e8f9" opacity="0.8" />
                  <circle cx="170" cy="100" r="10" fill="#4ade80" />
                  <rect x="160" y="110" width="20" height="25" rx="10" fill="#22c55e" />
                  <circle cx="30" cy="120" r="8" fill="#8b5cf6" />
                  <rect x="22" y="128" width="16" height="20" rx="8" fill="#7c3aed" />
                  <path d="M50 30 L60 20 L70 30" stroke="#06b6d4" strokeWidth="2" fill="none" />
                  <circle cx="130" cy="25" r="4" fill="#f59e0b" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Operational Integrations</h3>
            <div className="text-sm text-gray-700 space-y-3">
              <p>
                We embed intelligent technology into your existing systems to streamline workflows and reduce overhead:
              </p>
              <div className="space-y-1">
                <p>✅ Automated clinical note-taking</p>
                <p>✅ Revenue Cycle Management (RCM) tools including:</p>
                <p className="ml-4">Code validation & error detection</p>
                <p className="ml-4">Prior auth tracking & alerts</p>
                <p className="ml-4">Automated claim submission & appeals</p>
                <p className="ml-4">Denial prevention and AR aging insights</p>
                <p>✅ Compliance support for documentation and audits</p>
                <p>✅ Operational checklists & AI-driven diagnostics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
