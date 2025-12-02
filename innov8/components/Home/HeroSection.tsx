import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-[88px] sm:pt-24 md:pt-[104px]">
      <Image
        src="/images/home/Hero.jpg"
        alt="Hero background"
        width={2000}
        height={1000}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />

      <div
        className="
          absolute inset-0 flex items-center 
          px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40

          justify-center        
          lg:justify-start    
          text-center          
          lg:text-left         
        "
      >
        <div
          className="
            w-full 
            max-w-3xl 
            text-white
            mx-auto             
            lg:mx-0            
          "
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Empowering Businesses to
            <br />
            Innovate, Transform, and <br /> Grow
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            We combine strategy, engineering, and emerging technologies to help
            organisations modernise and scale confidently.
          </p>
        </div>
      </div>
    </section>
  );
}
