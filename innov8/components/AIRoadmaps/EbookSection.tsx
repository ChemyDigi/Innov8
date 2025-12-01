import Image from "next/image";
import TabletImage from "@/public/images/AiRoadmap/TabletImage.png";
import Link from "next/link";

export default function EbookSection() {
  return (
    <section className="w-full bg-brand py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
        
        {/* LEFT IMAGE — UNCHANGED */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={TabletImage}
            alt="Innov8 Tablet Visual"
            className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[420px] h-auto"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white lg:pl-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Further Reading From Innov8
          </h2>

          <p className="text-lg opacity-90 mb-8 max-w-lg">
            Meaningful insights that shape our strategy-first approach to AI transformation.
          </p>

          {/* Insights list */}
          <div className="space-y-6 border-l-3 border-white/60 pl-5">
            <div>
              <h3 className="text-xl font-semibold">Strategy-Led AI Adoption</h3>
              <p className="opacity-90">
                Align vision, capability, and measurable outcomes before implementation begins.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Responsible &amp; Scalable Deployment</h3>
              <p className="opacity-90">
                Ensure security, governance, and seamless integration across the enterprise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Engineering for Long-Term Success</h3>
              <p className="opacity-90">
                Build strong foundations with modern data architecture and robust engineering.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Innovation Through Rapid Prototyping</h3>
              <p className="opacity-90">
                Validate ideas quickly and convert concepts into production-ready solutions.
              </p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-white text-brand font-semibold px-8 py-3  text-lg hover:bg-gray-100 transition-none"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
