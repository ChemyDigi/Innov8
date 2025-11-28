import Image from "next/image";
import TabletImage from "@/public/images/AiRoadmap/TabletImage.png";

export default function EbookSection() {
  return (
    <section className="w-full bg-brand py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={TabletImage}
            alt="E-book Download"
            className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[420px] h-auto"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 sm:mb-8 md:mb-10">
            Unlock AI's Full Strategic Potential Download the <br />
            Innov8 Playbook
          </h2>

          <button className="bg-white text-brand font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 hover:bg-gray-100 transition w-full sm:w-auto">
            Access the E-book Now
          </button>
        </div>
      </div>
    </section>
  );
}
