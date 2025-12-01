import Image from "next/image";
import Link from "next/link";
import TabletImage from "@/public/images/AiRoadmap/TabletImage.png";

export default function EbookSection() {
  return (
    <section className="w-full bg-brand py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start lg:-ml-8">
          <Image
            src={TabletImage}
            alt="E-book Download"
            className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[420px] h-auto"
            priority
          />
        </div>

        {/* RIGHT CONTENT WITH INSIGHTS */}
        <div className="text-white lg:pl-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Further Reading From Innov8
          </h2>

          <p className="text-lg opacity-90 mb-8 max-w-lg">
            Gain actionable strategies to protect your organization and implement intelligent security practices.
          </p>

          {/* Insights list with vertical line */}
          <div className="space-y-6 border-l-3 border-white/60 pl-5">
            <div>
              <h3 className="text-xl font-semibold">Proactive Threat Management</h3>
              <p className="opacity-90">
                Learn how to identify, prioritize, and neutralize potential threats before they escalate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Continuous Security Monitoring</h3>
              <p className="opacity-90">
                Understand how to implement ongoing surveillance to ensure systems remain secure at all times.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Incident Response Planning</h3>
              <p className="opacity-90">
               Develop a structured approach to respond to security incidents quickly and effectively.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Best Practices & Guidelines</h3>
              <p className="opacity-90">
                Adopt proven security methodologies and frameworks to strengthen your organizations's defenses.
              </p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-white text-brand font-semibold px-8 py-3 text-lg hover:bg-gray-100 transition-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
