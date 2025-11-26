import Image from "next/image";

export default function ExploreMoreSection() {
  return (
    <section className="w-full bg-white py-5 pt-20 px-6 md:px-16 lg:px-32">
      {/* Title + line */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-black">
          Explore More
        </h2>
        <div className="w-full h-0.5 bg-black/20"></div>
      </div>

      {/* Main container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT CARD */}
        <div className="bg-[#E9E7D8] p-10 md:p-14">
          {/* Red Heading */}
          <h3 className="text-2xl md:text-3xl font-semibold text-[#C51616] leading-snug mb-6">
            Innov8 Intelligent Security Report 2025
          </h3>

          {/* Subheading */}
          <p className="text-lg font-medium text-black mb-8">
            Lead with foresight. Defend with agility.
          </p>

          {/* Main paragraph 1 */}
          <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8">
            Uncover the next-generation security trends shaping the digital
            landscape from AI-powered threat intelligence and Zero Trust
            strategies to Cloud-Native resilience at scale.
          </p>

          {/* Main paragraph 2 */}
          <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8">
            Download Innov8&apos;s most anticipated cybersecurity intelligence
            report now to empower your continuous security journey.
          </p>

          {/* Explore more link */}
          <a className="text-[#C51616] text-lg font-medium cursor-pointer">
            Explore more
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[350px] md:h-auto">
          <Image
            src="/images/IntelligenceSecurity/buildings.jpg"
            alt="Security Report Visual"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
