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
            {/* Main Heading - Moved down for mobile */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mt-8 sm:mt-0 mb-2 sm:mb-6">
              Emerging cloud-native solutions
            </h1>

            {/* Subheading - Moved up for mobile */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium -mt-2 sm:mt-0">
              Make your cloud-first journey safe from the start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Section;