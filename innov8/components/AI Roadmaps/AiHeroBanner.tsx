import Image from "next/image";

export default function AiHeroBanner() {
  return (
    <section className="relative w-full h-[420px] md:h-[500px] lg:h-[560px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/AiRoadmap/hero-banner.png"
        alt="AI Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-semibold mb-4 tracking-wide">
          AI Roadmaps and R&D
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
          INNOV8 is an agile organization with a strong engineering team
          committed to delivering solutions that transcend traditional
          technology.
        </p>
      </div>
    </section>
  );
}
