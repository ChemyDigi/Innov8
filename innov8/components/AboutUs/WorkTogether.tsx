'use client';
export default function WorkTogetherCard() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      {/* Card Container - rectangular box */}
      <div className="max-w-7xl mx-auto bg-[#F5F6F1] shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left Grid - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Let's Work Together
            </h2>
            
            <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              Trusted by 51–200 industry professionals, supported by leading technology partners, 
              and connected with over 41 Innov8 team members on LinkedIn.
            </p>
          </div>

          {/* Right Grid - Button */}
          <div className="flex justify-center lg:justify-end">
            <button className="bg-black text-white text-sm sm:text-base font-semibold py-2 sm:py-3 px-4 sm:px-8 hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto text-center">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}