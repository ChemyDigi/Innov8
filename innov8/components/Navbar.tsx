"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hover, setHover] = useState(false);

  return (
    <header className="w-full relative">
      {/* Top Bar */}
      <div className="bg-[#F1F1EB] text-black text-sm py-2 px-10 flex justify-end gap-8">
        <Link href="/contact-us" className="hover:underline transition">
          Contact Us
        </Link>
        <Link href="/careers" className="hover:underline transition">
          Careers
        </Link>
      </div>

      {/* Main Navigation */}
      <nav
        className="bg-[#ffffff] py-4 px-20 flex items-center gap-12 relative z-20"
        onMouseLeave={() => setHover(false)}
      >
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-wide mr-4">
          <img
            src="/images/innov8whitelogo.png"
            alt="Innov8"
            className="h-6"
            height={100}
            width={100}
          />
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-20 items-center text-[15px] text-black pl-20">
          <li>
            <Link href="/" className="text-black font-medium hover:text-black transition">
              Home
            </Link>
          </li>

          {/* Hover trigger only */}
          <li
            className="relative"
            onMouseEnter={() => setHover(true)}
          >
            <button className="hover:text-red-600 transition">Solutions</button>
          </li>

          <li>
            <Link href="/insights" className="hover:text-red-600 transition">
              Insights
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-red-600 transition">
              About
            </Link>
          </li>
        </ul>
        {hover && (
          <div
            className="
              absolute left-0 right-0 
              bg-white shadow-lg 
              py-6 px-20 
              top-full 
              z-40
              text-black
            "
          >
            {/* Title */}
            <h3 className="text-[30px] font-semibold mb-2 border-b border-red-500 pb-2 w-full text-red-700">
              Solutions
            </h3>

            {/* 3 Columns */}
            <div className="grid grid-cols-3 gap-10 pt-4 text-[15px]">
              <Link href="/solutions/ai" className="hover:text-red-600 transition">
                AI Roadmaps and R&D Services
              </Link>

              <Link href="/solutions/cloud" className="hover:text-red-600 transition">
                Cloud and Platform Solutions
              </Link>

              <Link href="/solutions/security" className="hover:text-red-600 transition">
                Intelligent Continuous Security
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
