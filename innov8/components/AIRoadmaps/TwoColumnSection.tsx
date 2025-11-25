export default function AiTwoColumnSection() {
  return (
    <section className="bg-white w-full py-16 px-6 md:px-12 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-black leading-snug text-justify">
            We align vision, capabilities, and goals to create a clear direction
            for AI adoption.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-black/80 text-lg leading-relaxed font-montserrat">
            We break down the journey into manageable stages—from pilot to
            production. De-risking investment and building a foundation for
            scalable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
