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
    <section className="w-full bg-[#F5F6F1] py-20 px-6 md:px-12 lg:px-32">
      <h2 className="text-3xl md:text-4xl text-center font-semibold text-brand mb-12">
        Our Partners
      </h2>

      <div className="bg-white mx-auto p-14 shadow-sm rounded-md max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-16 place-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="relative w-40 h-20 md:w-48 md:h-24">
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
