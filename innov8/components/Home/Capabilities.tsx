"use client";

import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function CapabilitiesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const capabilities = [
    {
      title: "Cloud and Platform Solutions",
      description:
        "We design scalable cloud architectures, modernize applications, and help organisations adopt secure and flexible digital platforms.",
    },
    {
      title: "AI Roadmaps and R&D Services",
      description:
        "We enable organisations to explore AI-driven innovation through research, experimentation, and strategic AI integration.",
    },
    {
      title: "Intelligent Continuous Security",
      description:
        "We deliver adaptive security solutions that protect infrastructure, enhance resilience, and support continuous compliance.",
    },
  ];

  return (
    <section className="bg-[#F5F5F1] text-black relative py-10">
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand mb-6">Our Capabilities</h2>

        <p className="text-lg mb-10">
          Our capabilities & technologies are designed to bring business value
          and address the specific challenges of organisations across different
          industries seeking to maximise their digital potential.
        </p>

        {/* Accordion */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium">{item.title}</span>

                <FaCaretDown
                  className={`transition-transform duration-300 text-brand size-6 cursor-pointer ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`transition-all overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10">
          We help organizations adopt modern platforms, secure digital ecosystems,
          and explore future-ready technologies.
        </p>
      </div>
    </section>
  );
}
