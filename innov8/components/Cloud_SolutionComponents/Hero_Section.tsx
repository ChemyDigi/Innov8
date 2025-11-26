import React from 'react';

const Hero_Section: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Full Width Background Image - No cropping */}
      <div className="w-full">
        <img 
          src="/images/CloudSolutions/Hero_Section.png" 
          alt="Cloud Native Solutions"
          className="w-full h-auto"
        />
      </div>
      
      {/* Text Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Emerging cloud-native solutions
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white font-medium">
              Make your cloud-first journey safe from the start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Section;