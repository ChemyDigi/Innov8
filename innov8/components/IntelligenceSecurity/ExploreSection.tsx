import Image from "next/image";

export default function ExploreMoreSection() {
  return (
    <section className="w-full bg-white py-5 pt-20 px-6 md:px-16 lg:px-32">
      {/* Title + line */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-black mb-6">Explore More</h2>
        <div className="w-full h-0.5 bg-black/20"></div>
      </div>

      {/* Main container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT CARD */}
        <div className="bg-[#E9E7D8] p-10 md:p-14">
          {/* Red Heading */}
          <h3 className="text-3xl font-bold text-brand mb-6">
            Innov8 Intelligent Security Report 2025
          </h3>

          {/* Subheading */}
          <p className="text-lg font-medium text-black mb-8">
            Lead with foresight. Defend with agility.
          </p>

          {/* Main paragraph 1 */}
          <p className="text-lg leading-relaxed text-justify tracking-tight text-black mb-8">
            Uncover the next-generation security trends shaping the digital
            landscape from AI-powered threat intelligence and Zero Trust
            strategies to Cloud-Native resilience at scale.
          </p>

          {/* Main paragraph 2 */}
          <p className="text-lg leading-relaxed text-justify tracking-tight text-black mb-8">
            Download Innov8&apos;s most anticipated cybersecurity intelligence
            report now to empower your continuous security journey.
          </p>
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
