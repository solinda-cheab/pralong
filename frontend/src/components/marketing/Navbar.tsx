"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 font-sans">
      {/* Top Banner Contact Strip */}
      <div className="border-b border-gray-200 bg-white py-2 text-xs text-gray-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-1 text-[11px] font-medium sm:gap-x-2 sm:text-xs">
            <span>Get in touch with us @:</span>
            <a href="tel:+915582874889" className="text-gray-900 hover:underline">
              +91-5582874889
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:info@thepioneerfuture.com" className="break-all text-gray-900 hover:underline">
              info@thepioneerfuture.com
            </a>
          </div>
          <Link href="#contact" className="ml-2 shrink-0 font-medium text-gray-800 hover:text-blue-600">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-extrabold tracking-tight">
            <span className="text-[#002B66]">Pralong</span>
            <span className="text-[#FF5C00]">Exam</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Link href="#api" className="text-sm font-semibold text-gray-800 transition-colors hover:text-blue-600">
              API Integration
            </Link>

            {/* Solutions Dropdown */}
            <div className="group relative cursor-pointer">
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-800 transition-colors hover:text-blue-600">
                Solutions
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Features Dropdown */}
            <div className="group relative cursor-pointer">
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-800 transition-colors hover:text-blue-600">
                Features
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Menu Dropdown */}
            <div className="group relative cursor-pointer">
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-800 transition-colors hover:text-blue-600">
                Menu
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="#demo"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:bg-gray-50"
            >
              Request Demo
            </Link>
            <Link
              href="#signup"
              className="rounded-md bg-[#0047FF] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Sign Up - VS Free
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-900 lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-4 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              <Link href="#api" className="text-base font-semibold text-gray-800 hover:text-blue-600">
                API Integration
              </Link>
              <Link href="#solutions" className="text-base font-semibold text-gray-800 hover:text-blue-600">
                Solutions
              </Link>
              <Link href="#features" className="text-base font-semibold text-gray-800 hover:text-blue-600">
                Features
              </Link>
              <Link href="#menu" className="text-base font-semibold text-gray-800 hover:text-blue-600">
                Menu
              </Link>
              <div className="flex flex-col gap-2 border-t border-gray-100 pt-3">
                <Link
                  href="#demo"
                  className="w-full rounded-md border border-gray-300 bg-white py-2 text-center text-sm font-semibold text-gray-800"
                >
                  Request Demo
                </Link>
                <Link
                  href="#signup"
                  className="w-full rounded-md bg-[#0047FF] py-2 text-center text-sm font-semibold text-white"
                >
                  Sign Up - VS Free
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}