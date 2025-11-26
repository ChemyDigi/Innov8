// components/SubsidiariesSection.tsx
import Image from "next/image";

export default function Subsidiaries() {
  return (
    <section className="relative py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4">

        {/* Title */}
        <h2
          className="
            text-3xl font-bold text-brand mb-6
            text-center md:text-left
          "
        >
          Our Subsidiaries
        </h2>

        {/* Two Paragraphs */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 text-black">
          <p
            className="
              text-lg leading-relaxed
              text-center md:text-justify
            "
          >
            At Innov8, we help organisations reimagine their digital future. By
            aligning strategy, technology, and innovation, we create scalable
            solutions that strengthen operations and enhance customer experiences.
          </p>

          <p
            className="
              text-lg leading-relaxed
              text-center md:text-justify
            "
          >
            We enable the business transformation of governments, large-scale
            public bodies & enterprises through innovative and collaborative
            digital solutions. Our team helps organisations maximise their digital
            potential using cutting-edge technologies and strategic insights.
          </p>
        </div>

        {/* Image + Text Box */}
        <div
          className="
            mt-12 bg-[#F5F5F1] rounded-lg 
            flex flex-col md:flex-row 
            gap-6 md:gap-10
            items-center md:items-start
            text-center md:text-left
          "
        >
          <Image
            src="/images/home/home1.jpg"
            alt="Subsidiary building"
            width={500}
            height={350}
            className="object-cover w-full md:w-[45%] rounded-md"
          />

          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-3 text-black">
              Our Subsidiaries
            </h3>

            <p className="text-black leading-relaxed text-center md:text-justify">
              At Innov8, our subsidiaries deliver specialised technology solutions
              designed to scale with your organisation — from cloud infrastructure
              to AI-driven intelligence — empowering you to accelerate innovation.
            </p>

            <a
              href="#"
              className="
                text-brand font-medium mt-4 block 
                text-center md:text-left
              "
            >
              Discover more
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
