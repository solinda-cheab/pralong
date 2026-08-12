"use client";

import React from "react";
import Link from "next/link";

const columns = [
  {
    heading: "Product",
    links: [
      "Skills & knowledge assessment",
      "Quiz maker",
      "Test maker",
      "Exam software",
      "AI question creation",
      "Insights & analytics",
      "Proctoring & security",
      "Integrations & API",
    ],
  },
  {
    heading: "For business",
    links: [
      "Human resources",
      "Training teams",
      "Certification",
      "Sales & customer service",
      "Language schools",
    ],
  },
  {
    heading: "For education",
    links: ["Teachers", "Schools", "Universities & colleges"],
  },
  {
    heading: "Use cases",
    links: [
      "Recruitment",
      "Employee assessments",
      "Training",
      "Customer service",
      "Safety procedures",
      "Formative assessment",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030712] text-white pt-20 pb-8 border-t border-white/10 font-sans overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#CCFF00]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter CTA Strip */}
        <div className="mb-16 rounded-3xl bg-[#080C24] p-8 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to automate your exam workflow?
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Get started for free or schedule a demo with our technical team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="#demo"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-sm font-semibold text-white transition-all hover:bg-white/10 text-center"
            >
              Request Demo
            </Link>
            <Link
              href="#signup"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#CCFF00] text-sm font-bold text-black transition-all hover:bg-[#bce600] text-center shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-16 lg:grid-cols-12">
          
          {/* Brand Info Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo */}
            <Link href="/" className="inline-flex items-center text-2xl font-black tracking-tight">
              <span className="text-white">Blink</span>
              <span className="text-[#FF5C00]">Exam</span>
            </Link>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Empowering organizations, educators, and HR teams with secure AI-driven remote assessments, real-time analytics, and automated proctoring.
            </p>

            {/* Quick Utility Links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-gray-300">
              <a href="#" className="hover:text-[#CCFF00] transition-colors">Guides</a>
              <span>•</span>
              <a href="#" className="hover:text-[#CCFF00] transition-colors">Help Center</a>
              <span>•</span>
              <a href="#" className="hover:text-[#CCFF00] transition-colors">Customer Stories</a>
              <span>•</span>
              <a href="#" className="hover:text-[#CCFF00] transition-colors">About Us</a>
              <span>•</span>
              <a href="#" className="hover:text-[#CCFF00] transition-colors">Contact Us</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: "LinkedIn", icon: "in" },
                { name: "Facebook", icon: "fb" },
                { name: "Twitter", icon: "X" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 transition-all hover:border-[#CCFF00] hover:text-[#CCFF00] hover:bg-white/10"
                  aria-label={s.name}
                >
                  <span className="text-xs font-bold">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  {col.heading}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs text-gray-400 transition-colors hover:text-[#CCFF00]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} BlinkExam / PralongEXAM. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-[#CCFF00]">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[#CCFF00]">
              Terms and Conditions
            </a>
            <a href="#" className="transition-colors hover:text-[#CCFF00]">
              Security & Compliance
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}