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

  // Split items manually into two columns
  const leftColumn = capabilities.filter((_, i) => i % 2 === 0); // 0, 2
  const rightColumn = capabilities.filter((_, i) => i % 2 !== 0); // 1

  return (
    <section className="bg-[#F5F5F1] text-black relative py-10">
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand mb-6">Our Capabilities</h2>

        <p className="text-lg mb-10 text-justify tracking-tighter">
          Our capabilities & technologies are designed to bring business value
          and address the specific challenges of organisations across different
          industries seeking to maximise their digital potential.
        </p>

        {/* TWO INDEPENDENT COLUMNS */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col gap-6">
            {leftColumn.map((item, colIndex) => {
              const index = colIndex * 2; // actual index in array
              return (
                <AccordionCard
                  key={index}
                  item={item}
                  index={index}
                  openIndex={openIndex}
                  toggleDropdown={toggleDropdown}
                />
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 flex flex-col gap-6">
            {rightColumn.map((item, colIndex) => {
              const index = colIndex * 2 + 1; // actual index in array
              return (
                <AccordionCard
                  key={index}
                  item={item}
                  index={index}
                  openIndex={openIndex}
                  toggleDropdown={toggleDropdown}
                />
              );
            })}
          </div>
        </div>

        <p className="mt-10 text-justify tracking-tight">
          We help organizations adopt modern platforms, secure digital
          ecosystems, and explore future-ready technologies.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   REUSABLE ACCORDION CARD COMPONENT
---------------------------------------------- */
function AccordionCard({ item, index, openIndex, toggleDropdown }: any) {
  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="w-full flex justify-between items-center text-left cursor-default">

        {/* TITLE (NOT CLICKABLE) */}
        <span className="font-medium select-none">{item.title}</span>

        {/* ARROW (ONLY CLICKABLE PART) */}
        <FaCaretDown
          onClick={() => toggleDropdown(index)}
          className={`transition-transform duration-300 text-brand size-6 cursor-pointer ${
            openIndex === index ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* DROPDOWN CONTENT */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${
          openIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
        }`}
      >
        <p className="text-sm">{item.description}</p>
      </div>
    </div>
  );
}
