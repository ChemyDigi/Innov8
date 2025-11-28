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
      <h2 className="text-3xl font-bold text-brand mb-6">Our Partners</h2>

      <div className="bg-white mx-auto p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm rounded-md max-w-7xl">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
                        gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-20
                        gap-y-8 sm:gap-y-12 md:gap-y-16 place-items-center"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative 
                w-20 h-12         /* smaller mobile */
                sm:w-24 sm:h-14   /* smaller tablet */
                md:w-28 md:h-16   /* smaller desktop */
                lg:w-32 lg:h-18   /* slightly smaller large screens */
              "
            >
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
