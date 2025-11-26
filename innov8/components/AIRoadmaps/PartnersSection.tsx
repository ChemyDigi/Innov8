import Image from "next/image";

export default function PartnersSection() {
  const logos = [
    "/images/AiRoadmap/logos/1.png",
    "/images/AiRoadmap/logos/2.png",
    "/images/AiRoadmap/logos/3.png",
    "/images/AiRoadmap/logos/4.png",
    "/images/AiRoadmap/logos/5.png",
    "/images/AiRoadmap/logos/6.png",
    "/images/AiRoadmap/logos/7.png",
    "/images/AiRoadmap/logos/8.png",
  ];

  return (
    <section className="w-full bg-[#F5F6F1] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-brand mb-8 sm:mb-10 md:mb-12">
        Our Partners
      </h2>

      <div className="bg-white mx-auto p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm rounded-md max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-20 gap-y-8 sm:gap-y-12 md:gap-y-16 place-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="relative w-28 h-16 sm:w-32 sm:h-18 md:w-40 md:h-20 lg:w-48 lg:h-24">
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
