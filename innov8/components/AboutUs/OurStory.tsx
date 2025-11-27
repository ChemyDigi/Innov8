"use client";

import Image from "next/image";
import { useState } from "react";

export default function OurStory() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Innov8", default: true },
    { id: "why", label: "Why We Exist" },
    { id: "transformation", label: "All Transformation" },
    { id: "enterprise", label: "All Enterprise" },
  ];

  const content = {
    about: {
      image: "/images/about.jpg",
      title: "About Innov8",
      description:
        "Founded in 2020, Innov8 is a fast-growing technology consulting organisation specialising in Intelligent Continuous Security, Cloud & Platform Solutions, and AI Roadmaps & R&D Services.",
      details:
        "We partner with forward-thinking organizations to drive digital transformation through innovative technology solutions. Our team of experts brings decades of combined experience in enterprise technology, security, and AI-driven innovation.",
    },
    why: {
      image: "/images/exist.png",
      title: "Why We Exist",
      description:
        "We exist to bridge the gap between emerging technologies and business transformation, enabling organizations to thrive in the digital age.",
      details:
        "Our mission is to empower businesses with cutting-edge solutions that drive growth, enhance security, and create sustainable competitive advantages in rapidly evolving markets.",
    },
    transformation: {
      image: "/images/transform.png",
      title: "All Transformation",
      description:
        "Comprehensive digital transformation services that reimagine business processes and customer experiences through technology.",
      details:
        "From strategy to execution, we guide organizations through complete digital overhaul, ensuring seamless integration of new technologies while maximizing ROI and operational efficiency.",
    },
    enterprise: {
      image: "/images/allEnterprise.jpg",
      title: "All Enterprise",
      description:
        "Enterprise-grade solutions designed for scalability, security, and long-term business success across industries.",
      details:
        "We deliver robust enterprise solutions that support large-scale operations, ensuring reliability, security, and performance for organizations of all sizes.",
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 text-left mb-8 sm:mb-12 lg:mb-16">
          Our Story
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 sm:mb-14 lg:mb-20">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-full">
            {tabs.map((tab) => (
              <div key={tab.id} className="flex flex-col items-center min-w-[70px]">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 ${
                    activeTab === tab.id
                      ? "bg-red-600 border-red-600"
                      : "bg-white border-red-600"
                  } transition-all duration-300 hover:scale-110`}
                />

                <span
                  className={`mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base font-medium text-center ${
                    activeTab === tab.id ? "text-red-600" : "text-gray-600"
                  } transition-colors duration-300`}
                >
                  {tab.label}
                </span>

                <div
                  className={`w-full h-1 mt-1 ${
                    activeTab === tab.id ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl h-52 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src={content[activeTab].image}
                alt={content[activeTab].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3 sm:mb-5">
              {content[activeTab].title}
            </h3>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 text-justify">
              {content[activeTab].description}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-justify">
              {content[activeTab].details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
