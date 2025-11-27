"use client";

import React from "react";

export default function OurValues(): React.ReactElement {
  return (
    <section className="w-full bg-[#F5F6F1] py-16 px-6 sm:px-10 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT COLUMN — Our Values */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>

            <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">•</span>
                <span>Focus on positive results, and collaboration ecosystems</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">•</span>
                <span>Alignment with backgrounds, conditions, expectations</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">•</span>
                <span>Addressing challenges and collaboration ecosystems</span>
              </li>
            </ul>

            {/* Image */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <img
                src="/images/image1.png"
                alt="Our Values"
                className="w-full h-52 sm:h-64 md:h-72 object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN — Our Game Plan */}
          <div>
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/image2.png"
                alt="Our Game Plan"
                className="w-full h-52 sm:h-64 md:h-72 object-cover"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-6">
              Our Game Plan Section
            </h2>

            <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">•</span>
                <span>Building real, good relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">•</span>
                <span>Focus on improving and rewarding creative styles</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">•</span>
                <span>Embracing recent trends and innovations</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">•</span>
                <span>We empower organisations to innovate by adopting modern cloud, security, and AI-driven practices.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
