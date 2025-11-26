"use client";

import React from "react";

export default function HeroSection(): React.ReactElement {
  return (
    <section className="relative w-full min-h-[500px] bg-gray-900 text-white py-32 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/top1.png")',
        }}
      >
        {/* DARK BLUE OVERLAY */}
        <div className="absolute inset-0 opacity-80 mix-blend-multiply"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* MAIN TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Unlock Your Organization's Full Potential with Our Digital
            Transformation Solutions
          </h1>
        </div>
      </div>
    </section>
  );
}