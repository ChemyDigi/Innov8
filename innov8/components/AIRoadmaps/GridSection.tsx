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
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-32">
      {/* === GRID SECTION === */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16 mb-20">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-full h-[220px] relative mb-4">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-black text-lg font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      {/* === FULL-WIDTH IMAGE BELOW === */}
      <div className="w-full h-[350px] md:h-[420px] lg:h-[480px] relative">
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
