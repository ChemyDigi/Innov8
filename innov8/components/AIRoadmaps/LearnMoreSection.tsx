import Image from "next/image";
import DetailImg from "@/public/images/AiRoadmap/LearnMore.png";

export default function LearnMoreSection() {
  return (
    <section className="w-full bg-[#F5F6F1] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Left Image */}
        <div className="w-full">
          <Image
            src={DetailImg}
            alt="AI Security Image"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            Leverage AI, data intelligence, and advanced engineering to
            strengthen security, optimize operations, and accelerate innovation
            across your organization
          </p>

          {/* Red Button */}
          <button className="bg-brand text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 w-full sm:w-auto hover:bg-brand/90 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
