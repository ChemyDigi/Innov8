"use client";

import React from "react";

export default function SeniorLeadership(): React.ReactElement {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading - Moved outside the grid to be above everything */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-right mb-12"
          style={{ color: '#C51A1B' }}
        >
          Our Senior Leadership
        </h1>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Main text */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                We've helped organizations modernize legacy systems, build scalable cloud platforms, and secure their digital environments. Our engineering-first approach ensures every solution delivers measurable business value from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Get in touch
                </button>
              </div>
              
              {/* Divider */}
              <div className="w-full h-px bg-gray-300 my-8"></div>
              
              {/* Contact section */}
              <div>
                {/* Additional contact content can go here */}
              </div>
            </div>
          </div>
          
          {/* Right side - Single image box */}
          <div>
            <div className="rounded-lg w-full h-full overflow-hidden">
              <img 
                src="/images/hand.png" 
                alt="Senior Leadership Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}