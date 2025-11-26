"use client";

import React from "react";

export default function EqualityCentreIntro(): React.ReactElement {
  return (
    <section className="w-full relative overflow-hidden py-20 px-6 md:px-16 lg:px-32 min-h-[500px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/world.png')"
        }}
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-opacity-60" />

      <div className="relative z-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center max-w-9xl">
          <p className="text-white font-poppins text-6xl leading-tight font-normal">
            From Equality Centre, we are at the forefront of regional digital change
          </p>
        </div>
      </div>
    </section>
  );
}