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
        setMaxIndex(industryData.length - 1);
      } else if (screenWidth < 1024) {
        setMaxIndex(industryData.length - 2);
      } else {
        setMaxIndex(industryData.length - 2);
      }
    };

    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, []);

  const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : 0));
  const next = () => setIndex((prev) => (prev < maxIndex ? prev + 1 : prev));

  // Smooth scroll
  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      const firstCard = container.children[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 16; // includes gap
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section className="relative py-10 bg-white">
      <div
        className="
          flex flex-col lg:flex-row 
          items-center lg:items-start 
          gap-10 lg:gap-0 
          max-w-7xl mx-auto px-4
        "
      >
        {/* ---------- LEFT SIDE ---------- */}
        <div
          className="
            flex-1 flex flex-col gap-6 
            text-center lg:text-left
            items-center lg:items-start
          "
        >
          <h2 className="text-3xl font-bold text-brand">
            Our Industry Solutions
          </h2>

          <p className="text-lg text-black max-w-md text-center lg:text-justify">
            We support organisations across diverse industries with tailored
            digital strategies and high-impact technology solutions that solve
            real business problems.
          </p>

          {/* Arrows */}
          <div className="flex gap-4 my-4 justify-center lg:justify-start">
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

        {/* ---------- RIGHT SIDE (Carousel) ---------- */}
        <div className="flex-1 w-full overflow-hidden">
          <div ref={carouselRef} className="flex gap-4 overflow-x-hidden">
            {industryData.map((item, i) => (
              <div
                key={i}
                className="
                  shrink-0 
                  w-[85%] 
                  sm:w-[60%] 
                  md:w-[45%] 
                  lg:w-[40%] 
                  bg-white border border-[#E4E4E4]
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <h3 className="font-bold text-lg mb-2 text-black p-4 text-center lg:text-left">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700 p-4 pt-0 text-center lg:text-justify">
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
