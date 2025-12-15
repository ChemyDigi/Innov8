import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Innov8DigitalSecurity() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div>
          <Image
            src="/images/IntelligenceSecurity/Intelligence.jpg"
            alt="Innov8 Digital Security"
            width={100}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl font-bold text-black mb-6">
            Innov8 – Spearheading Intelligent Digital Security
          </h2>

          {/* Subheading */}
          <p className="text-lg text-black mb-8">
            Building Resilient Digital Enterprises in a Disruptive World
          </p>

          {/* Main paragraph */}
          <p className="text-lg text-black leading-relaxed text-justify tracking-tight mb-10">
            Innov8 is dedicated to transforming how organizations manage risk,
            driving the shift from reactive defense to Intelligent Continuous
            Security. We leverage our expertise in next-generation technology
            and cloud-native solutions to deliver advanced security services
            that enable enterprises to accelerate their digital journey with
            confidence.
          </p>

          {/* Link */}
          <a
            href="#"
            className="text-[#D20000] font-medium flex items-center gap-2 text-lg"
          >
            Visit innov8.digital
            <ArrowRight size={20} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
