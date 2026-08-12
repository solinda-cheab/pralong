export default function Hero() {
  return (
    <section className="relative bg-[#001738] text-white overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              All in one{" "}
              <span className="text-[#FF5C00]">Online Examination Platform</span>{" "}
              allows schools, institutes, and colleges to manage exams.
            </h1>
            
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
              Boost Your Exam Efficiency, Online Examination Platform, Easy
              Offline to Online Conversion, Live Test, and a Free Demo for 7 days.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-[#FF5C00] shadow-sm hover:bg-gray-100 transition-colors"
              >
                Sign up -3s free
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span>No credit card is required</span>
            </div>
          </div>

          {/* Right Column - Laptop & Mobile Mockup Graphic */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Laptop Display Graphic */}
              <div className="relative mx-auto w-full max-w-[480px]">
                {/* Screen Outer Frame */}
                <div className="relative rounded-t-2xl bg-[#2d3748] p-2 pt-3 shadow-2xl">
                  {/* Camera Dot */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-gray-600" />
                  
                  {/* Screen Content */}
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-white p-3 text-slate-800 shadow-inner">
                    {/* Mock Dashboard Header */}
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-blue-900">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        PralongExam
                      </div>
                      <div className="h-1.5 w-16 rounded bg-gray-200" />
                    </div>

                    {/* Mock Dashboard Content Cards */}
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="rounded border border-gray-100 bg-gray-50 p-2 shadow-sm">
                        <div className="h-1.5 w-8 rounded bg-blue-200" />
                        <div className="mt-2 h-3 w-5 rounded bg-blue-600" />
                      </div>
                      <div className="rounded border border-gray-100 bg-gray-50 p-2 shadow-sm">
                        <div className="h-1.5 w-8 rounded bg-orange-200" />
                        <div className="mt-2 h-3 w-5 rounded bg-[#FF5C00]" />
                      </div>
                      <div className="rounded border border-gray-100 bg-gray-50 p-2 shadow-sm">
                        <div className="h-1.5 w-8 rounded bg-gray-200" />
                        <div className="mt-2 h-3 w-5 rounded bg-gray-400" />
                      </div>
                    </div>

                    {/* Mock Table Lines */}
                    <div className="mt-3 space-y-1.5">
                      <div className="h-2 w-full rounded bg-gray-100" />
                      <div className="h-2 w-full rounded bg-gray-100" />
                      <div className="h-2 w-full rounded bg-gray-100" />
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="relative mx-auto h-3.5 w-[112%] -ml-[6%] rounded-b-xl bg-gradient-to-b from-[#e2e8f0] to-[#cbd5e1] shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-12 rounded-b bg-gray-400" />
                </div>
              </div>

              {/* Mobile Phone Mockup Overlay */}
              <div className="absolute -bottom-6 right-2 w-32 sm:w-40 rounded-[2rem] border-4 border-[#1e293b] bg-white p-1.5 shadow-2xl">
                {/* Speaker Notch */}
                <div className="mx-auto h-1 w-8 rounded-full bg-gray-300 mb-1" />
                
                {/* Phone Screen */}
                <div className="rounded-[1.4rem] bg-gray-50 p-2 text-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                    <div className="h-1 w-6 rounded bg-gray-300" />
                  </div>
                  
                  {/* App Cards */}
                  <div className="space-y-2">
                    <div className="rounded-md bg-blue-600 p-2 text-white">
                      <div className="h-1.5 w-10 rounded bg-white/70" />
                      <div className="mt-1 h-1 w-6 rounded bg-white/40" />
                    </div>
                    <div className="rounded-md bg-white p-2 shadow-sm border border-gray-100">
                      <div className="h-1.5 w-12 rounded bg-gray-300" />
                      <div className="mt-2 h-2 w-full rounded bg-blue-600" />
                    </div>
                    <div className="rounded-md bg-white p-2 shadow-sm border border-gray-100">
                      <div className="h-1.5 w-12 rounded bg-gray-300" />
                      <div className="mt-2 h-2 w-full rounded bg-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}