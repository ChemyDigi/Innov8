// app/career/components/CareerDevelopmentSection.tsx
'use client'

import { useState, useRef } from 'react'

export default function CareerDevelopmentSection() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Continuous Learning Culture",
      description: "We foster an environment of non-stop growth. Employees have access to knowledge-sharing platforms, certification sponsorships, and opportunities to work with a selection of emerging technology vendors, turning insight into impact."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Specialized Upskilling",
      description: "We build the next generation of digital talent through immersive, real-world training in our core specialties: cybersecurity, cloud platforms, and artificial intelligence. This prepares our team to shape tomorrow's digital landscape."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Leadership in Innovation",
      description: "We empower our team members to lead strategic initiatives and complex projects. We provide platforms for high-potential employees to develop leadership skills that inspire teams and drive growth."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Mentorship Programs",
      description: "Our structured mentorship initiatives pair experienced professionals with emerging talent, creating pathways for knowledge transfer and accelerated career advancement across all technical domains."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "Industry Recognition",
      description: "We celebrate and reward exceptional contributions through awards, speaking opportunities at premier tech conferences, and publication support for groundbreaking research and innovations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      title: "Certification Support",
      description: "Full sponsorship for industry-recognized certifications in cloud technologies, cybersecurity frameworks, and AI/ML specializations to validate and enhance your technical expertise."
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 300
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 text-left">
          Grow with Us: Career Development at INNOV8
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-700 mb-12 max-w-3xl text-justify">
          At INNOV8, your career growth is integral to our success—we invest in your development through continuous learning, hands-on projects, and leadership opportunities.
          Here's how we support every step of your journey:
        </p>
        
        {/* Scrollable Cards Container */}
        <div className="relative">
          {/* Navigation Arrows - Positioned above the cards */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 bg-gray-200 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 bg-gray-200 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Scrollable Cards */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                {/* Icon - Left aligned */}
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-red-600">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title - Left aligned */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-left">
                  {feature.title}
                </h3>
                
                {/* Description - Left aligned with reduced line height */}
                <p className="text-gray-700 leading-6 text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}