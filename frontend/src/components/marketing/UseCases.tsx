"use client";

import React from "react";

export default function ChallengesAndSolutions() {
  return (
    <section className="relative overflow-hidden bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          
          {/* 3D App Icon / Graphic Placeholder */}
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-700 via-blue-600 to-indigo-500 shadow-[0_0_30px_rgba(0,71,255,0.4)] border border-white/20 transform -rotate-6">
            <span className="text-4xl font-extrabold text-white tracking-wider">P</span>
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#CCFF00]" />
          </div>

          <div className="sm:ml-4">
            <span className="inline-block rounded-full bg-[#CCFF00] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-black">
              CHALLENGE & SOLUTIONS
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Challenges We Faced and <br className="hidden sm:inline" />
              How We{" "}
              <span className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#CCFF00] text-black text-base sm:text-lg font-black mx-1 align-middle">
                P
              </span>{" "}
              Solved Them
            </h2>
          </div>
        </div>

        {/* Central Interactive Grid */}
        <div className="relative mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Problems Box (4 cols) */}
          <div className="lg:col-span-5 z-10">
            <div className="rounded-3xl bg-[#080C24] p-6 border border-white/10 shadow-2xl space-y-4">
              
              {/* Box Title Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 border border-red-500/20">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Problems
              </div>

              {/* Problem Item 1 */}
              <div className="rounded-2xl bg-[#0F1538] p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-black font-bold">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#CCFF00]">Complex Processes</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Multiple steps and manual test validations create friction and slow down exam operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem Item 2 */}
              <div className="rounded-2xl bg-[#0F1538] p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-black font-bold">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#CCFF00]">Delayed Information</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Manual grading delays exam results and prevents timely decision-making for educators.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem Item 3 */}
              <div className="rounded-2xl bg-[#0F1538] p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-black font-bold">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#CCFF00]">Limited Visibility</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Lack of unified proctoring logs makes detecting cheating patterns and skill gaps difficult.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Center Column: Curved Connector Path & Nodes (2 cols on Desktop) */}
          <div className="hidden lg:flex lg:col-span-2 relative h-[420px] items-center justify-center">
            {/* Curved SVG Line */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 200 400" fill="none">
              <path
                d="M 10 200 Q 120 200 120 70 L 190 70"
                stroke="#CCFF00"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.8"
              />
              <path
                d="M 10 200 L 190 200"
                stroke="#CCFF00"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.8"
              />
              <path
                d="M 10 200 Q 120 200 120 330 L 190 330"
                stroke="#CCFF00"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.8"
              />
              {/* Outer Curved Arc */}
              <path
                d="M 10 50 Q 100 200 10 350"
                stroke="#CCFF00"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>

            {/* Glowing Nodes on the Curve */}
            <div className="absolute top-[62px] right-2 h-4 w-4 rounded-full bg-[#CCFF00] border-4 border-[#030712] shadow-[0_0_10px_#CCFF00]" />
            <div className="absolute top-[192px] right-2 h-4 w-4 rounded-full bg-[#CCFF00] border-4 border-[#030712] shadow-[0_0_10px_#CCFF00]" />
            <div className="absolute bottom-[62px] right-2 h-4 w-4 rounded-full bg-[#CCFF00] border-4 border-[#030712] shadow-[0_0_10px_#CCFF00]" />
          </div>

          {/* Right Column: Solutions Cards (5 cols) */}
          <div className="lg:col-span-5 z-10 space-y-6">
            
            {/* Solution Card 1 */}
            <div className="rounded-2xl bg-[#080C24] p-6 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CCFF00] text-black">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white">Intuitive & Focused Experience</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-13">
                Streamlined candidate assessment flows remove friction and eliminate operational bottlenecks completely.
              </p>
            </div>

            {/* Solution Card 2 */}
            <div className="rounded-2xl bg-[#080C24] p-6 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CCFF00] text-black">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white">Real-Time Data Access</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-13">
                Instant grading and automated feedback loops provide instant results without waiting for manual reviews.
              </p>
            </div>

            {/* Solution Card 3 */}
            <div className="rounded-2xl bg-[#080C24] p-6 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CCFF00] text-black">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3 3 7-7m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white">End-to-End Visibility</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed pl-13">
                Comprehensive analytics dashboards give full oversight of proctoring flags, score distributions, and performance trends.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}