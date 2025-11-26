import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[50vh] min-h-[380px] sm:h-[55vh] md:h-[500px] lg:h-[525px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/insight/hero.jpg"
          alt="Insights Hero"
          fill
          priority
          className="object-cover w-full h-full"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div
          className="
            max-w-7xl mx-auto w-full
            px-4 sm:px-6 lg:px-8

            text-center          /* center on mobile + tablet */
            lg:text-left         /* left align on desktop */
          "
        >
          <div className="text-white">

            {/* Heading */}
            <h1
              className="
                text-3xl sm:text-5xl md:text-6xl lg:text-7xl
                font-semibold tracking-tight capitalize
                mb-3 sm:mb-4 md:mb-6
              "
            >
              Insights
            </h1>

            {/* Subtitle */}
            <p
              className="
                text-base sm:text-lg md:text-xl lg:text-3xl
                font-normal leading-relaxed
                max-w-xl md:max-w-2xl
                mx-auto lg:mx-0      /* center on mobile/tablet only */
              "
            >
              Stay updated with emerging ideas, market movements, and expert viewpoints shaping the future
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (hidden on mobile) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
