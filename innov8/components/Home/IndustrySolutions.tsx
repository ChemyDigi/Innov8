"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function IndustrySolutions() {
  const industryData = [
    {
      title: "Banking and finance",
      description:
        "Transforming financial institutions with secure, compliant, and scalable digital systems that enhance customer experience and streamline operations.",
      img: "/images/home/bank.jpg",
    },
    {
      title: "Teleco and media",
      description:
        "Delivering platform-driven solutions that elevate connectivity, improve service delivery, and unlock new digital revenue streams.",
      img: "/images/home/media.jpg",
    },
    {
      title: "Retail",
      description:
        "Empowering retailers with data-driven insights, intelligent operations, and seamless omnichannel experiences.",
      img: "/images/home/retail.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate maxIndex based on screen size
  useEffect(() => {
    const updateMaxIndex = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        // Mobile: 1 card visible at a time
        setMaxIndex(industryData.length - 1);
      } else if (screenWidth < 1024) {
        // Tablet: 2 cards visible
        setMaxIndex(industryData.length - 2);
      } else {
        // Desktop: 2 cards visible
        setMaxIndex(industryData.length - 2);
      }
    };

    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, []);

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
      const cardWidth = firstCard.offsetWidth + 16; // +gap-4 = 16px
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section className="relative py-10 bg-white">
      <div className="flex flex-col lg:flex-row items-start lg:items-center relative max-w-7xl mx-auto px-4">
        {/* Left side: Title, description, arrows */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-brand">
            Our Industry Solutions
          </h2>

          <p className="text-lg text-black max-w-md text-justify">
            We support organisations across diverse industries with tailored
            digital strategies and high-impact technology solutions that solve
            real business problems.
          </p>

          <div className="flex gap-4 my-4">
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

        {/* Right side: Horizontal carousel */}
        <div className="flex-1 overflow-hidden w-full lg:w-auto">
          <div ref={carouselRef} className="flex gap-4 overflow-x-hidden">
            {industryData.map((item, i) => (
              <div
                key={i}
                className="shrink-0 w-[85%] sm:w-[45%] lg:w-[40%] bg-white border border-[#E4E4E4]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <h3 className="font-bold text-lg mb-2 text-black p-4">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 text-justify p-4 pt-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
