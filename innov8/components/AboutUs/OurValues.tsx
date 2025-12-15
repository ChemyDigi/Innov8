"use client";

import React from "react";

export default function OurValues(): React.ReactElement {
  return (
    <section className="relative py-10 bg-[#F5F6F1]">
      <div className="relative max-w-7xl mx-auto px-4 mb-6 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN — Our Values */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8 mt-4">
              Our Values
            </h2>

            <p className="text-lg leading-relaxed text-left md:text-justify tracking-tight text-black">
              At the core of our values is a commitment to achieving meaningful,
              positive results through strong collaboration ecosystems. We
              believe in aligning with the diverse backgrounds, conditions, and
              expectations of every stakeholder to ensure clarity, trust, and
              shared purpose. By addressing challenges openly and fostering a
              culture of cooperation, we create environments where innovation
              can thrive and long term partnerships can grow.
            </p>

            {/* Image */}
            <div className="mt-12 overflow-hidden">
              <img
                src="/images/About/image1.png"
                alt="Our Values"
                className="w-full h-52 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN — Our Game Plan */}
          <div>
            <div className="mb-8 mt-6 overflow-hidden">
              <img
                src="/images/About/image2.png"
                alt="Our Game Plan"
                className="w-full h-52 sm:h-64 md:h-72 object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-black mb-8 mt-12">
              Our Game Plan
            </h2>

            <p className="text-lg leading-relaxed text-left md:text-justify tracking-tight text-black">
              Our game plan is built on fostering genuine, long-lasting
              relationships while continuously encouraging and rewarding
              creative approaches. We stay ahead by embracing emerging trends
              and innovations that shape the future of the digital landscape.
              With a strong focus on modern cloud, security, and AI-driven
              practices, we empower organisations to transform and innovate with
              confidence, enabling them to achieve meaningful progress and
              sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
