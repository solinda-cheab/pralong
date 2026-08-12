"use client";

import React from "react";

const brands = [
  { name: "Northwind", suffix: "Logistics", color: "text-blue-500" },
  { name: "Harborline", suffix: "Retail", color: "text-emerald-500" },
  { name: "Fenwick", suffix: "& Co.", color: "text-rose-500" },
  { name: "Solace", suffix: "Electronics", color: "text-indigo-500" },
  { name: "Kestrel", suffix: "Freight", color: "text-amber-500" },
  { name: "Ardent", suffix: "Studios", color: "text-[#CCFF00]" },
  { name: "Blue Anchor", suffix: "Hotels", color: "text-cyan-500" },
  { name: "Marrow", suffix: "Analytics", color: "text-fuchsia-500" },
];

export default function LogoMarquee() {
  // Duplicated enough times to ensure screen coverage for smooth infinite scrolling
  const track = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="relative overflow-hidden bg-[#030712] py-16 sm:py-24 border-y border-white/5 font-sans">
      
      {/* Self-contained animation styles for zero-config plug-and-play */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 2rem)); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 30s linear infinite;
            width: max-content;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `
      }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          Trusted by forward-thinking teams worldwide
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden w-full">
        
        {/* Edge Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40 bg-gradient-to-r from-[#030712] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40 bg-gradient-to-l from-[#030712] to-transparent" />

        {/* Scrolling Track */}
        <div className="flex animate-infinite-scroll items-center gap-16 pl-16 cursor-pointer">
          {track.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex shrink-0 items-center gap-3 grayscale opacity-40 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              {/* Pseudo-Icon Graphic */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 shadow-sm">
                <span className={`text-lg font-black ${brand.color}`}>
                  {brand.name.charAt(0)}
                </span>
              </div>
              
              {/* Brand Typography */}
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  {brand.name}
                </span>
                <span className="text-sm font-medium tracking-wide text-gray-500">
                  {brand.suffix}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}