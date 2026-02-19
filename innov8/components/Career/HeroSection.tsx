import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-[88px] sm:pt-24 md:pt-[104px]">
      <Image
        src="/images/Career/carhero.png"
        alt="Hero background"
        width={2000}
        height={1000}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[450px] object-cover"
      />

      <div
        className="
          absolute inset-0 flex items-center pt-20
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
            Together, We Engineer Tomorrow
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            At INNOV8, we're not just filling positions; we're building careers
            that help shape a resilient digital future, driven by agility,
            engineering excellence, and a passion for cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
}