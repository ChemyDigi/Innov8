"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [hover, setHover] = useState(false); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const [mobileDropdown, setMobileDropdown] = useState(false); // mobile solutions dropdown

  return (
    <header className="w-full relative">
      {/* Top Bar */}
      <div className="bg-[#F1F1EB] text-black text-sm py-2 px-10 flex justify-end gap-8">
        <Link href="/contact" className="hover:underline transition">
          Contact Us
        </Link>
        <Link href="/careers" className="hover:underline transition">
          Careers
        </Link>
      </div>

      {/* Main Navigation */}
      <nav
        className="bg-[#ffffff] py-4 px-20 flex items-center justify-between relative z-20"
        onMouseLeave={() => setHover(false)}
      >
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-wide">
          <img
            src="/images/innov8whitelogo.png"
            alt="Innov8"
            className="h-6"
            height={100}
          />
        </Link>

        {/* ---- DESKTOP NAVIGATION ---- */}
        <ul className="hidden lg:flex gap-20 items-center text-[15px] text-black pl-20">
          <li>
            <Link
              href="/"
              className="text-black font-medium hover:text-black transition"
            >
              Home
            </Link>
          </li>

          <li className="relative" onMouseEnter={() => setHover(true)}>
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

        {/* ---- DESKTOP DROPDOWN ---- */}
        {hover && (
          <div
            className="
              absolute left-0 right-0 
              bg-white shadow-lg 
              py-6 px-20 
              top-full 
              z-40
              hidden lg:block
            "
          >
            <h3 className="text-[30px] font-semibold mb-2 border-b border-red-500 pb-2 w-full text-red-700 ">
              Solutions
            </h3>

            <div className="grid grid-cols-3 gap-10 pt-4 text-[15px]">
              <Link
                href="/solutions/ai-roadmaps"
                className="text-gray-700 hover:text-red-600 transition"
              >
                AI Roadmaps and R&D Services
              </Link>
              <Link
                href="/solutions/cloud"
                className="text-gray-700 hover:text-red-600 transition"
              >
                Cloud and Platform Solutions
              </Link>
              <Link
                href="/solutions/intelligence-security"
                className="text-gray-700 hover:text-red-600 transition"
              >
                Intelligent Continuous Security
              </Link>
            </div>
          </div>
        )}

        {/* ---- MOBILE HAMBURGER ---- */}
        <button
          className="lg:hidden text-3xl text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {/* ---- MOBILE + TABLET MENU ---- */}
      {mobileOpen && (
        <div className="bg-white w-full py-6 px-10 flex flex-col gap-6 text-center lg:hidden shadow-lg">
          <Link
            href="/"
            className="text-black text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Dropdown */}
          <div className="flex flex-col gap-2">
            <button
              className="text-black text-lg mx-auto"
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              Solutions {mobileDropdown ? "" : ""}
            </button>

            {mobileDropdown && (
              <div className="flex flex-col gap-3 text-[15px] mt-2">
                <Link
                  href="/solutions/ai"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-red-600 text-gray-400"
                >
                  AI Roadmaps and R&D Services
                </Link>
                <Link
                  href="/solutions/cloud"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-red-600 text-gray-400"
                >
                  Cloud and Platform Solutions
                </Link>
                <Link
                  href="/solutions/security"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-red-600 text-gray-400"
                >
                  Intelligent Continuous Security
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/insights"
            className="text-black text-lg"
            onClick={() => setMobileOpen(false)}
          >
            Insights
          </Link>

          <Link
            href="/about"
            className="text-black text-lg"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
