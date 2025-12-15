"use client";

import React from "react";

export default function EqualityCentreIntro(): React.ReactElement {
  return (
    <section className="w-full relative overflow-hidden py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-16 lg:px-32 min-h-[400px] md:min-h-[500px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/About/world.png')",
        }}
      />

      {/* Dark overlay (fixed missing color) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text container */}
      <div className="relative z-10 flex items-center justify-center min-h-[250px] md:min-h-[350px]">
        <div className="text-center max-w-5xl mx-auto px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
            From equality centre, We are at the forefront of regional digital
            change
          </p>
        </div>
      </div>
    </section>
  );
}
