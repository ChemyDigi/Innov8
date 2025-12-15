"use client";

import React from "react";

export default function TestimonialWithImage(): React.ReactElement {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-10 md:px-16 lg:px-32 relative overflow-hidden">
      {/* LEFT BRAND ACCENTS */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 sm:h-48 md:h-64 bg-brand"></div>
      <div className="absolute left-0 top-1/4 w-2 h-16 sm:h-24 bg-brand/60"></div>
      <div className="absolute left-0 bottom-1/4 w-2 h-20 sm:h-32 bg-brand/40"></div>
      {/* <div className="absolute left-4 top-12 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand/10"></div>
      <div className="absolute left-8 bottom-16 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-brand/20"></div> */}

      {/* RIGHT BRAND ACCENTS */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 sm:h-48 md:h-64 bg-brand"></div>
      <div className="absolute right-0 top-1/3 w-2 h-16 sm:h-24 bg-brand/60"></div>
      <div className="absolute right-0 bottom-1/3 w-2 h-20 sm:h-32 bg-brand/40"></div>
      {/* <div className="absolute right-4 top-16 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-brand/10"></div>
      <div className="absolute right-6 bottom-12 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand/15"></div>
      <div className="absolute right-12 top-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-brand/25 rotate-45"></div> */}

      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — IMAGE */}
          <div className="flex justify-center">
            <div className="w-96 h-96 sm:w-md sm:h-112 rounded-full overflow-hidden">
              <img
                src="/images/About/CEO.png"
                alt="Business Partnership"
                className="w-full h-full object-contain translate-y-5"
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
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed italic text-justify tracking-tight">
                "We used all the essentials of expanding organizations into
                digital businesses, focusing on driving growth through strategic
                partnerships. As organisations face unprecedented socioeconomic
                challenges, we help them uncover new opportunities and
                strengthen their digital foundations through advanced
                engineering and next-generation technology."
              </p>
            </blockquote>

            {/* DIVIDER */}
            <div className="w-20 sm:w-24 h-0.5 bg-brand"></div>

            {/* AUTHOR */}
            <div className="flex flex-col space-y-1">
              <p className="text-black font-semibold text-base sm:text-lg">
                Mr. Jonathan Reeves
              </p>

              <a href="#" className="text-brand">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
