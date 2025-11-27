'use client';

export default function WorkTogetherCard() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      {/* Card Container */}
      <div className="max-w-7xl mx-auto bg-[#F5F6F1] shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-10 rounded-lg">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* LEFT — TEXT */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
              Let's Work Together
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md mx-auto lg:mx-0">
              Trusted by 51–200 industry professionals, supported by leading technology partners,
              and connected with over 41 Innov8 team members on LinkedIn.
            </p>
          </div>

          {/* RIGHT — BUTTON */}
          <div className="flex justify-center lg:justify-end">
            <button className="bg-black text-white text-sm sm:text-base font-semibold py-3 px-6 sm:px-10 rounded-md hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto">
              Get in Touch
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
