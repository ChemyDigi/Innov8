"use client";

import React from "react";

export default function DigitalShiftIntro(): React.ReactElement {
  return (
    <section className="w-full bg-white py-16">
      <div className="relative max-w-7xl mx-auto px-4 text-left md:text-left">
        {/* Mission Text */}
        <p className="text-black text-lg leading-relaxed text-justify tracking-tight mb-6">
          Our mission is clear: To enable organisations to maximise their
          digital potential. "We are an agile engineering-driven organisation
          helping businesses modernise, innovate, and stay ahead of outdated
          technology landscapes."
        </p>

        {/* Title */}
        <h2 className="text-3xl font-bold text-brand mb-7">
          We are your partner in this digital shift
        </h2>

        {/* Subtext */}
        <p className="text-black text-lg leading-relaxed text-justify tracking-tight">
          With top-notch experts & advanced tech, we are here to help your
          business thrive online.
        </p>
      </div>
    </section>
  );
}
