// components/SubsidiariesSection.tsx
import Image from "next/image";

export default function Subsidiaries() {
  return (
    <section className="relative py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand mb-6">Our Value Proposition</h2>

        <div className="grid md:grid-cols-2 gap-20 text-black">
          <p className="text-lg leading-relaxed text-justify tracking-tight">
            At Innov8, we help organisations reimagine their digital future. By
            aligning strategy, technology, and innovation, we create scalable
            solutions that strengthen operations and enhance customer
            experiences.
          </p>

          <p className="text-lg leading-relaxed text-justify tracking-tight">
            We enable the business transformation of governments, large-scale
            public bodies & enterprises through innovative and collaborative
            digital solutions. Our team helps organisations maximise their
            digital potential using cutting-edge technologies and strategic
            insights.
          </p>
        </div>

        <div className="mt-12 bg-[#F5F5F1] flex flex-col md:flex-row gap-6">
          <Image
            src="/images/home/home1.jpg"
            alt="Subsidiary building"
            width={500}
            height={350}
            className="object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Our Subsidiaries
            </h3>
            <p className="text-black leading-relaxed text-justify tracking-tight">
INNOV8 operates through specialized subsidiaries focused on cybersecurity, cloud and platform solutions, and AI-driven innovation. This structure enables deeper domain expertise, agile execution, and scalable growth while maintaining a unified vision of delivering transformative technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
