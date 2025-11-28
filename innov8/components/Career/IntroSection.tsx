// app/career/components/IntroSection.tsx
export default function IntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
          grid grid-cols-1 lg:grid-cols-2 gap-12 
          items-start
        "
        >
          {/* LEFT — Main Heading */}
          <div
            className="
            flex 
            items-center lg:items-start 
            justify-center lg:justify-start
            text-center lg:text-left
          "
          >
            <h2
              className="
                text-2xl sm:text-3xl md:text-3xl lg:text-3xl
                font-semibold text-gray-900 leading-tight
              "
            >
              The growth and well-being of our engineers and consultants is a
              core principle at INNOV8.
            </h2>
          </div>

          {/* RIGHT — Paragraphs */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-justify text-black">
              As we navigate an era of unique socioeconomic challenges, we
              believe our culture a blend of unique human potential and
              technical imagination is what makes transformative work possible.
            </p>

            <p className="text-lg leading-relaxed text-justify text-black">
              Become a part of our agile community of innovators, problem
              solvers, and strategic leaders who are constantly redefining the
              technological landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
