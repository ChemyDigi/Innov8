import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[220px] sm:h-[260px] md:h-[340px] lg:h-[420px] xl:h-[480px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Contact/hero.png"
        alt="AI Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/50" />

      {/* Text Content */}
      <div
        className="
          relative z-10 h-full flex flex-col justify-center
          px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32

          text-center               /* center text on mobile & tablet */
          lg:text-left              /* align left on desktop */
        "
      >
        <h1
          className="
            text-white 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-semibold tracking-wide
          "
        >
          Contact Us
        </h1>

        <p
          className="
            text-white/90 
            text-base sm:text-lg md:text-xl 
            max-w-3xl leading-relaxed mt-3 mx-auto lg:mx-0
          "
        ></p>
      </div>
    </section>
  );
}
