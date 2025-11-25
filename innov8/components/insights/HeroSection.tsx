import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[525px] bg-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/insight/hero.jpg"
          alt="Insights Hero"
          width={1896}
          height={525}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      {/* Overlay Text */}
      <div className="absolute inset-0 bg-opacity-100 flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full"> {/* Same container as TechInsights */}
          <div className="text-left text-white">
            <h1 className="text-6xl font-semibold mb-6 capitalize">
              Insights
            </h1>
            <p className="text-2xl font-normal max-w-2xl leading-relaxed">
              Stay updated with emerging ideas, market movements, and expert viewpoints shaping the future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}