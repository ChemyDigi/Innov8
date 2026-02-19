"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [hover, setHover] = useState(false); // Desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu
  const [mobileDropdown, setMobileDropdown] = useState(false); // Mobile Solutions dropdown
  const pathname = usePathname();

  // Helper function to check if a link is active - fixed with type annotation
  const isActive = (path: string) => {
    if (path === '/home' && pathname === '/') return true;
    return pathname === path;
  };

  return (
    <header className="w-full fixed top-0 z-50 font-['Neue_Helvetica',_Helvetica,_Arial,_sans-serif]">
      {/* Top Bar */}
      <div className="bg-[#F1F1EB] text-black text-sm py-2 px-6 sm:px-10 flex justify-end gap-6 sm:gap-8">
        <Link 
          href="/contact" 
          className={`hover:text-red-600 transition ${isActive('/contact') ? 'text-red-600 font-medium' : ''}`}
        >
          Contact Us
        </Link>
        <Link 
          href="/careers" 
          className={`hover:text-red-600 transition ${isActive('/careers') ? 'text-red-600 font-medium' : ''}`}
        >
          Careers
        </Link>
      </div>

      {/* Main Navbar */}
      <nav
        className="
          bg-white py-4 
          px-4 sm:px-10 md:px-16 lg:px-20 
          flex items-center justify-between 
          relative z-20
        "
        onMouseLeave={() => setHover(false)}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/innov8whitelogo.png"
            alt="Innov8"
            className="
              h-8       /* Mobile */
              sm:h-9    /* Tablet */
              md:h-10   /* Desktop */
              w-auto
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-16 text-black ml-20">
          <li>
            <Link 
              href="/home" 
              className={`text-base hover:text-red-600 transition ${isActive('/home') || pathname === '/' ? 'text-red-600 font-medium' : ''}`}
            >
              Home
            </Link>
          </li>

          <li className="relative" onMouseEnter={() => setHover(true)}>
            <button className={`text-base hover:text-red-600 transition ${isActive('/solutions') ? 'text-red-600 font-medium' : ''}`}>
              Solutions
            </button>
          </li>

          <li>
            <Link 
              href="/insights" 
              className={`text-base hover:text-red-600 transition ${isActive('/insights') ? 'text-red-600 font-medium' : ''}`}
            >
              Insights
            </Link>
          </li>

          <li>
            <Link 
              href="/about" 
              className={`text-base hover:text-red-600 transition ${isActive('/about') ? 'text-red-600 font-medium' : ''}`}
            >
              About
            </Link>
          </li>
        </ul>

        {/* Desktop Dropdown */}
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
            <h3 className="text-[30px] font-semibold mb-2 border-b border-red-500 pb-2 text-red-700">
              Solutions
            </h3>

            <div className="grid grid-cols-3 gap-10 mt-4 text-base">
              <Link
                href="/solutions/ai-roadmaps"
                className={`text-gray-700 hover:text-red-600 transition ${isActive('/solutions/ai-roadmaps') ? 'text-red-600 font-medium' : ''}`}
              >
                AI Roadmaps and R&D Services
              </Link>

              <Link
                href="/solutions/cloud-platform"
                className={`text-gray-700 hover:text-red-600 transition ${isActive('/solutions/cloud-platform') ? 'text-red-600 font-medium' : ''}`}
              >
                Cloud and Platform Solutions
              </Link>

              <Link
                href="/solutions/intelligence-security"
                className={`text-gray-700 hover:text-red-600 transition ${isActive('/solutions/intelligence-security') ? 'text-red-600 font-medium' : ''}`}
              >
                Intelligent Continuous Security
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-3xl text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-white w-full py-6 px-6 sm:px-10 flex flex-col gap-6 text-center lg:hidden shadow-lg">
          <Link
            href="/home"
            className={`text-black text-lg hover:text-red-600 transition ${isActive('/home') || pathname === '/' ? 'text-red-600 font-medium' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <div className="flex flex-col gap-3">
            <button
              className={`text-black text-lg hover:text-red-600 transition ${isActive('/solutions') ? 'text-red-600 font-medium' : ''}`}
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              Solutions
            </button>

            {mobileDropdown && (
              <div className="flex flex-col gap-3 text-gray-500 text-base">
                <Link
                  href="/solutions/ai-roadmaps"
                  className={`hover:text-red-600 transition ${isActive('/solutions/ai-roadmaps') ? 'text-red-600 font-medium' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  AI Roadmaps and R&D Services
                </Link>

                <Link
                  href="/solutions/cloud-platform"
                  className={`hover:text-red-600 transition ${isActive('/solutions/cloud-platform') ? 'text-red-600 font-medium' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Cloud and Platform Solutions
                </Link>

                <Link
                  href="/solutions/intelligence-security"
                  className={`hover:text-red-600 transition ${isActive('/solutions/intelligence-security') ? 'text-red-600 font-medium' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Intelligent Continuous Security
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/insights"
            className={`text-black text-lg hover:text-red-600 transition ${isActive('/insights') ? 'text-red-600 font-medium' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Insights
          </Link>

          <Link
            href="/about"
            className={`text-black text-lg hover:text-red-600 transition ${isActive('/about') ? 'text-red-600 font-medium' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}