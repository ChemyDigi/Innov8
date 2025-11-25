import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <Image
        src="/images/home/Hero.jpg"   // your uploaded image path
        alt="Hero background"
        width={2000}
        height={1000}
        className="w-full h-[500px] object-cover"
      />

      <div className="absolute inset-0 flex items-center px-40">
        <div className="w-full flex justify-start">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Businesses to<br />
              Innovate, Transform, and <br /> Grow
            </h1>

            <p className="mt-4 text-lg max-w-xl">
              We combine strategy, engineering, and emerging technologies
              to help organisations modernise and scale confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
