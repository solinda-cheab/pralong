"use client";

import React from "react";

interface UserInsightSectionProps {
  videoSrc?: string;
  quote?: string;
  highlightWords?: string[];
  userName?: string;
  userRole?: string;
  userLocation?: string;
}

export default function UserInsight({
  videoSrc = "/assets/Pralong.com.mp4",
  quote = "Our users told us they need streamlined navigation and real-time data access to save time, reduce errors and focus on what really matters.",
  userName = "Mente User",
  userRole = "CFO, Manufacturing",
  userLocation = "Colombia",
}: UserInsightSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mx-auto max-w-6xl">

        {/* Category Pill Tag */}
        <div className="mb-12">
          <span className="inline-block rounded-full bg-[#CCFF00] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
            USER INSIGHT
          </span>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Mobile Frame with Auto-playing Video */}
          <div className="lg:col-span-5 flex justify-center">
            {/* Mobile Device Frame Mockup */}
            <div className="relative w-full max-w-[320px] aspect-[9/19.5] rounded-[48px] bg-[#1a1a1a] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-4 border-[#2b2b2b]">

              {/* Dynamic Island / Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 h-5 w-24 rounded-full bg-black flex items-center justify-between px-2">
                <div className="h-2 w-2 rounded-full bg-[#0a0a0a]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#121212]" />
              </div>

              {/* Speaker / Microphone Mockup Details */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-1 w-12 rounded-full bg-[#333333]" />

              {/* Side Hardware Buttons */}
              <div className="absolute -left-[7px] top-24 h-10 w-[3px] rounded-l-md bg-[#333]" />
              <div className="absolute -left-[7px] top-[6.5rem] h-12 w-[3px] rounded-l-md bg-[#333]" />
              <div className="absolute -left-[7px] top-[13.5rem] h-12 w-[3px] rounded-l-md bg-[#333]" />
              <div className="absolute -right-[7px] top-32 h-16 w-[3px] rounded-r-md bg-[#333]" />

              {/* Screen Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-black">
                {/* Embedded HTML5 Video with autoplay, loop, muted, and playsInline */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Bottom Home Indicator Bar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 rounded-full bg-white/40 z-20" />
              </div>

            </div>
          </div>

          {/* Right Column: Quote & User Profile Card */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pl-0 lg:pl-6">

            {/* Quote Container */}
            <div className="space-y-6">
              {/* SVG Quote Icon */}
              <div className="text-[#CCFF00]">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-relaxed tracking-tight text-gray-100">
                Our users told us they need{" "}
                <span className="text-[#CCFF00] font-bold underline underline-offset-4 decoration-[#CCFF00]/40">
                  streamlined navigation
                </span>{" "}
                and{" "}
                <span className="text-[#CCFF00] font-bold underline underline-offset-4 decoration-[#CCFF00]/40">
                  real-time data access
                </span>{" "}
                to save time, reduce errors and focus on what really matters.
              </blockquote>
            </div>

            {/* Profile / Author Meta Box */}
            <div className="flex items-center gap-4 pt-4">

              {/* Brand Logo Avatar */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-300 via-pink-200 to-indigo-200 shadow-lg text-black font-extrabold text-2xl">
                <span className="transform -rotate-6 text-[#080C24] font-black text-3xl">M</span>
              </div>

              {/* Author Details */}
              <div>
                <h4 className="text-xl font-bold text-white tracking-wide">
                  {userName}
                </h4>
                <p className="text-sm text-gray-400 mt-0.5 font-medium">
                  {userRole}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {userLocation}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
