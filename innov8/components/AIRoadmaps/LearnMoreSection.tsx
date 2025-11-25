import Image from "next/image";
import DetailImg from "@/public/images/AiRoadmap/LearnMore.png";

export default function LearnMoreSection() {
  return (
    <section className="w-full bg-[#F5F6F1] py-20 px-6 md:px-12 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
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
          <p className="text-black text-lg md:text-xl leading-relaxed mb-8">
            Leverage AI, data intelligence, and advanced engineering to
            strengthen security, optimize operations, and accelerate innovation
            across your organization
          </p>

          {/* Red Button */}
          <button className="bg-brand text-white font-semibold text-lg px-10 py-4">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
