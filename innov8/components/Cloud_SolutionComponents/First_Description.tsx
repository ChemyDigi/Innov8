"use client";

import React, { useState } from "react";

const First_Description: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);

  const contents = [
    {
      image: "/images/CloudSolutions/First_Description.png",

      text: "Our solutions are designed to overcome these barriers and help you realize the full potential of the cloud. While the cloud offers new opportunities to modernize services and transform operations, security and compliance risk remain the greatest barrier to adoption.",
    },
    {
      image: "/images/CloudSolutions/First_Description.png",
      text: "Advanced cloud security measures with real-time monitoring and automated compliance checks. Our platform ensures continuous protection across all cloud environments with intelligent threat detection and response capabilities.",
    },
    {
      image: "/images/CloudSolutions/First_Description.png",
      text: "Comprehensive governance framework with policy as code and automated enforcement. Streamline your cloud operations while maintaining strict compliance with industry standards and regulatory requirements.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading and statistics side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left side - Main heading */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-justify lg:text-left">
              Building a secure, compliant foundation with governance built into
              your cloud native architecture.
            </h2>
          </div>

          {/* Right side - Statistics */}
          <div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              However, only <span className="font-semibold">35 percent</span> of
              organizations report they have fully achieved their expected
              outcomes from cloud, and{" "}
              <span className="font-semibold">65 percent</span> identify{" "}
              <span className="italic font-semibold">
                "Security and Compliance risk"
              </span>{" "}
              as the most frequent barrier.
            </p>
          </div>
        </div>

        {/* Content Box - Mobile responsive */}
        <div className="relative mb-12 lg:mb-16 lg:ml-12 lg:mr-8">
          <div className="bg-[#F5F6F1] p-6 lg:p-10 border border-gray-200 relative z-10 w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-2 items-start">
              {/* Image - No overflow, on top for mobile */}
              <div className="flex justify-center w-full mb-6 lg:mb-0 lg:justify-start lg:-ml-20">
                <div className="w-full max-w-lg">
                  <img
                    src={contents[activeContent].image}
                    alt="Cloud Solutions"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Content and Navigation */}
              <div className="relative z-20 w-full">
                {/* Content - Adjusted spacing for mobile */}
                <div className="mt-0 lg:mt-12 mb-8 lg:mb-20">
                  <p className="text-lg leading-relaxed text-justify text-black">
                    {contents[activeContent].text}
                  </p>
                </div>

                {/* Navigation - Mobile responsive */}
                <div className="relative w-full">
                  {/* Navigation dots */}
                  <div className="flex justify-between mb-4">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        onClick={() => setActiveContent(index)}
                        className={`flex flex-col items-center transition-all duration-300 ${
                          activeContent === index ? "transform scale-125" : ""
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                            activeContent === index
                              ? "bg-brand border-brand"
                              : "bg-[#C7C7C7] border-[#C7C7C7]"
                          }`}
                        ></div>
                      </button>
                    ))}
                  </div>

                  {/* The line */}
                  <div className="h-1.5 bg-[#C7C7C7] rounded-full relative mt-4 lg:mt-8">
                    <div
                      className="h-1.5 bg-brand rounded-full absolute top-0 transition-all duration-300"
                      style={{
                        width: "33.333%",
                        left: `${activeContent * 33.333}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First_Description;
