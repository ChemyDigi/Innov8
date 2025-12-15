"use client";

import Image from "next/image";
import { useRef } from "react";
import insightsData from "../../app/data/insightsData.json";

interface TechInsightsProps {
  onPostSelect: (post: string) => void;
}

export default function TechInsights({ onPostSelect }: TechInsightsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Convert object to array for mapping
  const cards = Object.values(insightsData).map((insight) => ({
    id: insight.id,
    image: insight.img,
    title: insight.title,
    description: insight.description,
  }));

  const slideLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F9F6F6] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-brand mb-10">
          Tech & Innovation Insights
        </h2>

        {/* LEFT ARROW */}
        <button
          onClick={slideLeft}
          className="hidden md:flex absolute -left-10 lg:-left-14 top-1/2 -translate-y-1/2 
          w-10 h-10 lg:w-12 lg:h-12 bg-gray-300 text-gray-600 rounded-full justify-center items-center 
          hover:bg-brand hover:text-white transition-all duration-300 z-20 group"
        >
          <svg
            className="w-5 h-5 lg:w-6 lg:h-6 group-hover:stroke-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={slideRight}
          className="hidden md:flex absolute -right-10 lg:-right-14 top-1/2 -translate-y-1/2 
          w-10 h-10 lg:w-12 lg:h-12 bg-gray-300 text-gray-600 rounded-full justify-center items-center 
          hover:bg-brand hover:text-white transition-all duration-300 z-20 group"
        >
          <svg
            className="w-5 h-5 lg:w-6 lg:h-6 group-hover:stroke-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* CAROUSEL */}
        <div className="w-full">
          <div
            ref={scrollRef}
            className="
              flex gap-6 
              overflow-x-auto 
              scrollbar-hide 
              snap-x snap-mandatory 
              pb-6 
              scroll-smooth
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="
                  flex-none 
                  w-64 sm:w-72 md:w-80 
                  bg-white 
                  transition-all 
                  duration-300 
                  snap-start
                "
              >
                {/* IMAGE */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                    {card.title}
                  </h3>

                  <div className="w-full h-0.5 bg-brand mb-3"></div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify tracking-tight">
                    {card.description}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={() => onPostSelect(card.id)}
                    className="text-brand text-sm font-normal flex items-center gap-2 group/btn w-full justify-start mt-4 cursor-pointer "
                  >
                    <span className="relative">
                      Read More
                      <span className="absolute bottom-0 left-0 w-0 h-0.5"></span>
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
