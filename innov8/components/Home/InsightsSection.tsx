"use client";

import { FaChevronRight } from "react-icons/fa";
import insightsData from "@/app/data/insightsData.json";

export default function InsightsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-center relative max-w-7xl mx-auto px-4">
        {/* LEFT SIDE — Title (centered vertically on large screens) */}
        <div className="flex justify-start items-start">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand relative leading-tight">
            Latest <br /> Insights
          </h2>
        </div>

        {/* RIGHT SIDE — Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {insightsData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E4E4E4]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover mb-4"
              />

              <h3 className="font-semibold text-lg mb-2 text-black px-5">
                {item.title}
              </h3>

              <p className="text-sm text-gray-700 mb-4 px-5 text-justify">{item.description}</p>

              <button className="text-brand font-medium flex items-center gap-2 px-5 pb-4 cursor-pointer">
                Read More <FaChevronRight className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
