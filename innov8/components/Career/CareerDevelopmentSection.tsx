"use client";

import { useState, useRef } from "react";

export default function CareerDevelopmentSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Continuous Learning Culture",
      description:
        "We foster an environment of non-stop growth. Employees have access to knowledge-sharing platforms, certification sponsorships, and opportunities to work with emerging technology vendors.",
    },

    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Specialized Upskilling",
      description:
        "We build next-generation talent through immersive learning in cybersecurity, cloud platforms, and AI preparing teams to shape the digital future.",
    },

    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Leadership in Innovation",
      description:
        "We empower employees to lead strategic initiatives and develop leadership skills that inspire teams and drive innovation.",
    },

    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Mentorship Programs",
      description:
        "Structured mentorship connects experienced professionals with emerging talent, accelerating skill development and career growth.",
    },

    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      title: "Industry Recognition",
      description:
        "We celebrate excellence with awards, conference opportunities, and support for publishing original research and innovations.",
    },

    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      ),
      title: "Certification Support",
      description:
        "Full sponsorship for globally recognized certifications in cloud technology, cybersecurity, AI/ML, and more.",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(
              container.scrollWidth - container.clientWidth,
              scrollPosition + scrollAmount
            );

      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------- Heading ---------- */}
        <h2 className="text-3xl font-bold text-brand mb-6">
          Grow with Us: Career Development at INNOV8
        </h2>

        {/* ---------- Subtitle ---------- */}
        <p className="text-lg text-black mb-12 max-w-3xl text-left md:text-justify tracking-tight mx-auto md:mx-0 leading-relaxed">
          At INNOV8, your career growth is integral to our success. We invest in
          continuous learning, hands-on experience, and leadership
          opportunities.
        </p>

        {/* ---------- Navigation arrows (hidden on mobile) ---------- */}
        <div className="hidden md:flex justify-between items-center mb-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 bg-gray-200 hover:bg-brand rounded-full flex items-center justify-center transition group"
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 bg-gray-200 hover:bg-brand rounded-full flex items-center justify-center transition group"
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-white"
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

        {/* ---------- Scrollable Cards ---------- */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                shrink-0 w-72 sm:w-80 
                bg-white border border-gray-200 p-6
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <div className="text-brand">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-left">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-6 text-left md:text-justify tracking-tight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
