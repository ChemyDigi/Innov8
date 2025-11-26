import Image from "next/image";

export default function IntelligenceHeroBanner() {
  return (
    <section className="relative w-full h-80 sm:h-[380px] md:h-[450px] lg:h-[550px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/AiRoadmap/hero-banner.png"
        alt="AI Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div
        className="
          relative z-10 h-full flex flex-col justify-center
          px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32

          text-center         /* center on mobile/tablet */
          lg:text-left        /* left on desktop */
        "
      >
        <h1
          className="
            text-white
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-semibold
            mb-3 sm:mb-4 tracking-wide
          "
        >
          Intelligent Continuous <br /> Security for a Resilient <br /> Digital
          Future
        </h1>

        <p
          className="
            text-white/90
            text-base sm:text-lg md:text-xl
            max-w-3xl leading-relaxed 
            mx-auto lg:mx-0   /* center paragraph on mobile/tablet */
          "
        >
          INNOV8 is an agile engineering-driven organization helping enterprises
          modernize security, cloud platforms, and AI capabilities.
        </p>
      </div>
    </section>
  );
}
