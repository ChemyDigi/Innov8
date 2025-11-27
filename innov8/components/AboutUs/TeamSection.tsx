'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    { id: 1, name: "Mr. John Smith", role: "Chief Technology Officer", description: "Leading technology innovation with over 15 years of experience in enterprise solutions and digital transformation.", linkedin: "#" },
    { id: 2, name: "Mr. David Chen", role: "AI Research Director", description: "Pioneering AI research and development with expertise in machine learning and neural networks.", linkedin: "#" },
    { id: 3, name: "Mr. Michael Rodriguez", role: "Cloud Solutions Architect", description: "Designing scalable cloud infrastructure and implementing cutting-edge platform solutions.", linkedin: "#" },
    { id: 4, name: "Mr. James Wilson", role: "Security Innovation Lead", description: "Specializing in intelligent continuous security and cybersecurity threat prevention.", linkedin: "#" },
    { id: 5, name: "Mr. Robert Taylor", role: "Digital Transformation Head", description: "Driving organizational change through strategic digital initiatives and technology adoption.", linkedin: "#" },
    { id: 6, name: "Mr. William Brown", role: "Enterprise Solutions Director", description: "Developing comprehensive enterprise solutions for Fortune 500 companies worldwide.", linkedin: "#" },
    { id: 7, name: "Mr. Thomas Johnson", role: "Platform Strategy Lead", description: "Architecting platform solutions that enable business growth and technological innovation.", linkedin: "#" },
    { id: 8, name: "Mr. Christopher Lee", role: "R&D Innovation Manager", description: "Leading research and development efforts in emerging technologies and future systems.", linkedin: "#" },
    { id: 9, name: "Mr. Daniel Martinez", role: "Client Success Director", description: "Ensuring client success through strategic partnerships and innovative solution delivery.", linkedin: "#" },
    { id: 10, name: "Mr. Matthew Anderson", role: "Technology Evangelist", description: "Promoting technology adoption and innovation across industries and business verticals.", linkedin: "#" }
  ];

  const slideLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const slideRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#F9F6F6] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto relative">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#C51A1B] mb-10">
          Meet Our Team
        </h2>

        {/* LEFT ARROW */}
        <button
          onClick={slideLeft}
          className="hidden md:flex absolute -left-10 lg:-left-14 top-1/2 -translate-y-1/2 
          w-10 h-10 lg:w-12 lg:h-12 bg-gray-300 text-gray-600 rounded-full justify-center items-center 
          shadow-lg hover:bg-[#C51A1B] hover:text-white transition-all duration-300 z-20 group"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={slideRight}
          className="hidden md:flex absolute -right-10 lg:-right-14 top-1/2 -translate-y-1/2 
          w-10 h-10 lg:w-12 lg:h-12 bg-gray-300 text-gray-600 rounded-full justify-center items-center 
          shadow-lg hover:bg-[#C51A1B] hover:text-white transition-all duration-300 z-20 group"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="
                  flex-none 
                  w-64 sm:w-72 md:w-80 
                  bg-white 
                  rounded-xl 
                  shadow-md 
                  hover:shadow-lg 
                  transition-all 
                  duration-300 
                  snap-start
                "
              >
                {/* IMAGE */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-t-xl overflow-hidden">
                  <Image
                    src="/images/staff.png"
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-1 pr-4">{member.name}</h3>

                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      className="text-[#C51A1B] hover:text-[#A31516] transition p-1"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z" />
                      </svg>
                    </a>
                  </div>

                  <div className="w-full h-0.5 bg-[#C51A1B] mb-3"></div>

                  <p className="text-sm font-medium text-gray-700 mb-2">{member.role}</p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {member.description}
                  </p>

                  <button className="text-[#C51A1B] font-semibold flex items-center gap-1 group hover:text-[#A31516] transition text-sm">
                    Read More
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
