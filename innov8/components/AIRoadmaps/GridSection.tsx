import Image from "next/image";
import FullWidthImg from "../../public/images/AiRoadmap/banner-image.jpg";

export default function AiGridSection() {
  const items = [
    { src: "/images/AiRoadmap/1.jpg", title: "Scalable AI" },
    { src: "/images/AiRoadmap/2.jpg", title: "Scalable AI" },
    { src: "/images/AiRoadmap/3.jpg", title: "Scalable AI" },
    { src: "/images/AiRoadmap/4.jpg", title: "Scalable AI" },
    { src: "/images/AiRoadmap/5.jpg", title: "Scalable AI" },
    { src: "/images/AiRoadmap/6.jpg", title: "Scalable AI" },
    { src: "/images/AiRoadmap/7.jpg", title: "Scalable AI" },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      {/* === GRID SECTION === */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-16 mb-12 sm:mb-16 md:mb-20">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] relative mb-3 sm:mb-4">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-black text-sm sm:text-base md:text-lg font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* === FULL-WIDTH IMAGE BELOW === */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[480px] xl:h-[550px] relative">
        <Image
          src={FullWidthImg}
          alt="AI Technologies Banner"
          fill
          className="object-cover rounded-none"
          priority
        />
      </div>
    </section>
  );
}
