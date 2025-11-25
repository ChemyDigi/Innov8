import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] sm:h-[55vh] md:h-[525px] bg-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/insight/hero.jpg"
          alt="Insights Hero"
          fill
          className="w-full h-full object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            {/* Main Heading */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-semibold mb-4 sm:mb-6 capitalize tracking-tight">
              Insights
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal max-w-full sm:max-w-xl md:max-w-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed">
              Stay updated with emerging ideas, market movements, and expert viewpoints shaping the future
            </p>
          </div>
        </div>
      </div>

      {/* Optional: Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}