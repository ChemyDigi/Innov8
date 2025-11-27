"use client";

import React from "react";

export default function SeniorLeadership(): React.ReactElement {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1
          className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            font-bold 
            mb-10 
            text-center 
            lg:text-right
          "
          style={{ color: "#C51A1B" }}
        >
          Our Senior Leadership
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT SIDE - TEXT */}
          <div className="space-y-8">

            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify lg:text-left">
              We've helped organizations modernize legacy systems, build scalable
              cloud platforms, and secure their digital environments. Our
              engineering-first approach ensures every solution delivers
              measurable business value from day one.
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row sm:justify-start justify-center">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                Get in touch
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300"></div>

          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div>
            <div className="rounded-lg w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden">
              <img
                src="/images/hand.png"
                alt="Senior Leadership Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
