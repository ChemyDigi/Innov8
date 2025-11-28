import Image from "next/image";

export default function SecuritySection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-32">
      {/* TOP GRID - CUSTOM COLUMN WIDTHS */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_1fr] gap-16 items-start">
        {/* COLUMN 1 — Heading */}
        <div>
          <h2 className="text-1xl md:text-2xl font-semibold text-black leading-tight mb-8 text-justify">
            Intelligent Continuous Security with Help Innov8’s Expertise.
          </h2>

          <p className="text-lg text-black leading-relaxed text-justify">
            INNOV8 is an agile organization with a strong engineering team
            committed to delivering solutions that transcend traditional tech.
          </p>
        </div>

        {/* COLUMN 2 — Now More Wide */}
        <div>
          <p className="text-lg text-black leading-relaxed text-justify">
            As digital threats evolve and compliance requirements intensify,
            organizations need a proactive partner to maintain impenetrable
            security.
          </p>

          <p className="text-lg text-black leading-relaxed pt-10 text-justify">
            Help Innov8 provides intelligent, continuous security solutions and
            services from real-time threat detection and automated response to
            advanced threat intelligence and cloud-native security. With our
            deep regional expertise and a future-proof approach.
          </p>
        </div>

        {/* COLUMN 3 — Logo */}
        <div className="flex md:justify-end justify-start pt-2">
          <Image
            src="/images/innov8logo black.png"
            alt="Innov8 Logo"
            width={260}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
