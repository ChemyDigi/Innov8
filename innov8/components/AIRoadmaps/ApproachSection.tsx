export default function ApproachSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-32">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-brand mb-14">
        A proven approach to AI <br />
        excellence
      </h2>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* CARD 1 */}
        <div className="bg-[#F5F6F1] p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white px-4 py-2 text-xl font-bold">
              1
            </div>
            <span className="text-brand font-semibold text-xl">
              Strategy-First Alignment
            </span>
          </div>

          <p className="text-black/80 leading-relaxed text-lg text-justify">
            We begin by integrating AI strategy with your core business
            objectives, ensuring every initiative is ROI-driven and delivers
            measurable value.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#F5F6F1] p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white px-4 py-2 text-xl font-bold">
              2
            </div>
            <span className="text-brand font-semibold text-xl">
              Phased & Scalable Implementation
            </span>
          </div>

          <p className="text-black/80 leading-relaxed text-lg text-justify">
            We break down the journey into manageable stages from pilot to
            production, de-risking investment and building a foundation for
            scalable growth.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#F5F6F1] p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand text-white px-4 py-2 text-xl font-bold">
              3
            </div>
            <span className="text-brand font-semibold text-xl">
              Agile R&D & Rapid Prototyping
            </span>
          </div>

          <p className="text-black/80 leading-relaxed text-lg text-justify">
            Our innovation labs accelerate time-to-value through continuous
            experimentation, proof-of-concept development, and iterative
            refinement.
          </p>
        </div>
      </div>
    </section>
  );
}
