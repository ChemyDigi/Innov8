import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <Image
        src="/images/home/Hero.jpg"   // your uploaded image path
        alt="Hero background"
        width={2000}
        height={1000}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />

      <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="w-full flex justify-start">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Empowering Businesses to<br />
              Innovate, Transform, and <br /> Grow
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-xl">
              We combine strategy, engineering, and emerging technologies
              to help organisations modernise and scale confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}