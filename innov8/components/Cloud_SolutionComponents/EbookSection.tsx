import Image from "next/image";
import Link from "next/link";

export default function EbookSection() {
  return (
    <section className="w-full bg-brand py-20 px-6 md:px-12 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/CloudSolutions/E-book.png"
            alt="Cloud Transformation Guide"
            width={420}
            height={300}
            className="w-[350px] md:w-[420px] h-auto"
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
              <h3 className="text-xl font-semibold">Lean, Value‑Driven IT & AI Adoption</h3>
              <p className="opacity-90">
                We avoid bloated, redundant systems — preferring lean, efficient solutions that cut waste and maximize ROI.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Speed, Agility & Fast Time‑to‑Value</h3>
              <p className="opacity-90">
                Launch digital initiatives quickly with flexible teams, modern tools, and agile workflows — staying ahead of the competition.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Security, Governance & Risk‑Aware Deployment</h3>
              <p className="opacity-90">
                Embed compliance, data governance, and cybersecurity from day one — giving you peace of mind while scaling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Empowering Teams with Long‑Term Capability Building</h3>
              <p className="opacity-90">
                Through coaching, mentoring, and knowledge transfer, we make your team stronger — not dependent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Customized & Purpose‑Driven Solutions</h3>
              <p className="opacity-90">
                Tailored advice, vendor selection, and solution design — matching AI and digital tools to your unique business needs and goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Scalable & Future‑Proof Architecture</h3>
              <p className="opacity-90">
                Build flexible, modular systems and cloud/AI‑driven workflows to grow or pivot with your business over time.
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
