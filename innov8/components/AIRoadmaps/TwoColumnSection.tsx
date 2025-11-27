export default function AiTwoColumnSection() {
  return (
    <section className="bg-white w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
        {/* LEFT SIDE */}
        <div>
          <h2
            className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl
                font-semibold text-gray-900 leading-tight"
          >
            We align vision, capabilities, and goals to create a clear direction
            for AI adoption.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-black/80 text-base sm:text-lg md:text-xl leading-relaxed font-montserrat">
            We break down the journey into manageable stages—from pilot to
            production. De-risking investment and building a foundation for
            scalable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
