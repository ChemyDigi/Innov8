export default function ApproachSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand mb-8 sm:mb-10 md:mb-14">
        A proven approach to AI <br className="hidden sm:block" />
        excellence
      </h2>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {/* CARD 1 */}
        <div className="bg-[#F5F6F1] p-6 sm:p-8 md:p-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="bg-brand text-white px-3 sm:px-4 py-1 sm:py-2 text-lg sm:text-xl font-bold">
              1
            </div>
            <span className="text-brand font-semibold text-base sm:text-lg md:text-xl">
              Strategy-First Alignment
            </span>
          </div>

          <p className="text-black/80 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
            We begin by integrating AI strategy with your core business
            objectives, ensuring every initiative is ROI-driven and delivers
            measurable value.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#F5F6F1] p-6 sm:p-8 md:p-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="bg-brand text-white px-3 sm:px-4 py-1 sm:py-2 text-lg sm:text-xl font-bold">
              2
            </div>
            <span className="text-brand font-semibold text-base sm:text-lg md:text-xl">
              Phased & Scalable Implementation
            </span>
          </div>

          <p className="text-black/80 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
            We break down the journey into manageable stages from pilot to
            production, de-risking investment and building a foundation for
            scalable growth.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#F5F6F1] p-6 sm:p-8 md:p-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="bg-brand text-white px-3 sm:px-4 py-1 sm:py-2 text-lg sm:text-xl font-bold">
              3
            </div>
            <span className="text-brand font-semibold text-base sm:text-lg md:text-xl">
              Agile R&D & Rapid Prototyping
            </span>
          </div>

          <p className="text-black/80 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
            Our innovation labs accelerate time-to-value through continuous
            experimentation, proof-of-concept development, and iterative
            refinement.
          </p>
        </div>
      </div>
    </section>
  );
}
