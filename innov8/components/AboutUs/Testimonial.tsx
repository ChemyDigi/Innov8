"use client";

import React from "react";

export default function TestimonialWithImage(): React.ReactElement {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 px-4 sm:px-10 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — IMAGE */}
          <div className="flex justify-center">
            <div className="rounded-lg w-full overflow-hidden shadow-lg max-w-xl">
              <img
                src="/images/image3.png"
                alt="Business Partnership"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* QUOTE ICON */}
            <div>
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12"
                fill="#C51A1B"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            {/* QUOTE TEXT */}
            <blockquote>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed italic text-justify">
                "We used all the essentials of expanding organizations into digital businesses,
                focusing on driving growth through strategic partnerships. As organisations face
                unprecedented socioeconomic challenges, we help them uncover new opportunities
                and strengthen their digital foundations through advanced engineering and
                next-generation technology."
              </p>
            </blockquote>

            {/* DIVIDER */}
            <div className="w-20 sm:w-24 h-0.5 bg-[#C51A1B]"></div>

            {/* AUTHOR */}
            <div className="flex flex-col space-y-1">
              <p className="text-gray-900 font-semibold text-base sm:text-lg">
                Full name
              </p>

              <a
                href="#"
                className="text-[#C51A1B] hover:text-[#A01515] transition-colors duration-200 w-6 h-6"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
