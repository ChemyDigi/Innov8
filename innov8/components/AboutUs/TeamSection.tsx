"use client";

import Image from "next/image";
import { useRef } from "react";

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Mr. John Smith",
      role: "Chief Technology Officer",
      description:
        "Leading technology innovation with over 15 years of experience in enterprise solutions and digital transformation.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
    {
      id: 2,
      name: "Mr. David Chen",
      role: "AI Research Director",
      description:
        "Pioneering AI research and development with expertise in machine learning and neural networks.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
    {
      id: 3,
      name: "Mr. Michael Rodriguez",
      role: "Cloud Solutions Architect",
      description:
        "Designing scalable cloud infrastructure and implementing cutting-edge platform solutions.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
    {
      id: 4,
      name: "Mr. James Wilson",
      role: "Security Innovation Lead",
      description:
        "Specializing in intelligent continuous security and cybersecurity threat prevention.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
    {
      id: 5,
      name: "Mr. Robert Taylor",
      role: "Digital Transformation Head",
      description:
        "Driving organizational change through strategic digital initiatives and technology adoption.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
    {
      id: 6,
      name: "Mr. William Brown",
      role: "Enterprise Solutions Director",
      description:
        "Developing comprehensive enterprise solutions for Fortune 500 companies worldwide.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
    {
      id: 7,
      name: "Mr. Thomas Johnson",
      role: "Platform Strategy Lead",
      description:
        "Architecting platform solutions that enable business growth and technological innovation.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
    {
      id: 8,
      name: "Mr. Christopher Lee",
      role: "R&D Innovation Manager",
      description:
        "Leading research and development efforts in emerging technologies and future systems.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
    {
      id: 9,
      name: "Mr. Daniel Martinez",
      role: "Client Success Director",
      description:
        "Ensuring client success through strategic partnerships and innovative solution delivery.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
    {
      id: 10,
      name: "Mr. Tony Anderson",
      role: "Technology Evangelist",
      description:
        "Promoting technology adoption and innovation across industries and business verticals.",
      linkedin: "#",
      image: "/images/About/team.jpg",
    },
  ];

  const slideLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F9F6F6] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-brand mb-10">Meet Our Team</h2>

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
            {teamMembers.map((member) => (
              <div
                key={member.id}
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
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-1 pr-4">
                      {member.name}
                    </h3>

                    {/* LinkedIn */}
                    <a href={member.linkedin} className="text-brand">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </a>
                  </div>

                  <div className="w-full h-0.5 bg-brand mb-3"></div>

                  <p className="text-sm font-bold text-black mb-2 mt-8">
                    {member.role}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
