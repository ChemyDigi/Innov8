"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function IndustrySolutions() {
  // Static data — no JSON file required
  const industryData = [
    {
      title: "Banking and finance",
      description:
        "Transforming financial institutions with secure, compliant, scalable digital systems.",
      img: "/images/industry-banking.jpg",
    },
    {
      title: "Teleco and media",
      description:
        "Delivering platform-driven solutions that elevate connectivity and unlock revenue streams.",
      img: "/images/industry-teleco.jpg",
    },
    {
      title: "Retail & Commerce",
      description:
        "Empowering digital commerce with omnichannel customer-driven platforms.",
      img: "/images/industry-retail.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + industryData.length) % industryData.length);
  const next = () => setIndex((index + 1) % industryData.length);

  return (
    <section className="py-16 px-10 bg-[#F5F5F1] font-montserrat">
      <h2 className="text-3xl font-bold text-brand mb-6">
        Our Industry Solutions
      </h2>

      <p className="text-lg mb-10 text-black max-w-3xl">
        We support organisations across diverse industries with tailored digital
        strategies and high-impact technology solutions that solve real business
        problems.
      </p>

      <div className="flex gap-10 items-start">
        {/* Left arrow controls */}
        <div className="flex flex-col gap-4 pt-16">
          <button
            onClick={prev}
            className="p-3 bg-white shadow rounded-full hover:bg-brand hover:text-white"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-3 bg-white shadow rounded-full hover:bg-brand hover:text-white"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Carousel card */}
        <div className="w-full max-w-xl bg-white border rounded-xl shadow p-4">
          <img
            src={industryData[index].img}
            alt={industryData[index].title}
            className="rounded-lg w-full h-56 object-cover mb-4"
          />

          <h3 className="font-bold text-lg mb-2">
            {industryData[index].title}
          </h3>

          <p className="text-sm text-gray-700">
            {industryData[index].description}
          </p>
        </div>
      </div>
    </section>
  );
}
