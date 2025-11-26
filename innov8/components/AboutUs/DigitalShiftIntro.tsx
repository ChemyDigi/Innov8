"use client";

import React from "react";

export default function DigitalShiftIntro(): React.ReactElement {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">

        {/* Mission Text */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Our mission is clear: To enable organisations to maximise their
          digital potential. "We are an agile engineering-driven organisation
          helping businesses modernise, innovate, and stay ahead of outdated
          technology landscapes."
        </p>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-red-600 mt-6 mb-4">
          We are your partner in this digital shift.
        </h2>

        {/* Subtext */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          With top-notch experts & advanced tech, we are here to help your
          business thrive online.
        </p>
      </div>
    </section>
  );
}