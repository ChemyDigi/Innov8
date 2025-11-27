import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[50vh] min-h-[380px] sm:h-[55vh] md:h-[500px] lg:h-[525px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/insight/hero.jpg"
          alt="Hero background"
          width={2000}
          height={1000}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Insights
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Stay updated with emerging ideas, market movements, and expert viewpoints shaping the future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
