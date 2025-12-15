"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import insightsData from "@/app/data/insightsData.json";

export default function InsightsSection() {
  // Convert the object to an array
  const insightsArray = Object.values(insightsData);

  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(2);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate maxIndex based on screen size
  useEffect(() => {
    const updateMaxIndex = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        // Mobile: 1 card visible at a time
        setMaxIndex(insightsArray.length - 1);
      } else if (screenWidth < 1024) {
        // Tablet: 2 cards visible
        setMaxIndex(insightsArray.length - 2);
      } else {
        // Desktop: 3 cards visible
        setMaxIndex(insightsArray.length - 3);
      }
    };

    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, [insightsArray.length]);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex));
  };

  // Scroll to the current card whenever index changes
  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const firstCard = container.children[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 20; // +gap-5 = 20px
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section className="py-20 bg-white">
      <div className="flex flex-col lg:flex-row items-start lg:items-center relative max-w-7xl mx-auto px-4 gap-10">
        {/* LEFT SIDE — Title with arrow buttons */}
        <div className="shrink-0 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-brand leading-tight">
            Latest <br /> Insights
          </h2>

          <div className="flex gap-4">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`p-3 rounded-full border ${
                index === 0
                  ? "bg-gray-200 text-gray-400 border-gray-200"
                  : "bg-white text-brand border border-brand cursor-pointer hover:bg-brand hover:text-white"
              }`}
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              disabled={index === maxIndex}
              className={`p-3 rounded-full border ${
                index === maxIndex
                  ? "bg-gray-200 text-gray-400 border-gray-200"
                  : "bg-white text-brand border border-brand cursor-pointer hover:bg-brand hover:text-white"
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — Horizontal carousel */}
        <div className="flex-1 overflow-hidden w-full">
          <div ref={carouselRef} className="flex gap-5 overflow-x-hidden">
            {insightsArray.map((item) => (
              <div
                key={item.id}
                className="shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] bg-white border border-[#E4E4E4]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4"
                />

                <h3 className="font-semibold text-lg mb-2 text-black px-5">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700 mb-4 px-5 text-justify tracking-tight">
                  {item.description}
                </p>

                <Link
                  href={`/insights?article=${item.id}`}
                  className="text-brand font-medium flex items-center gap-2 px-5 pb-4 cursor-pointer"
                >
                  Read More <FaChevronRight className="text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
