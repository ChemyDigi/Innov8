import Image from "next/image";

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
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Innov8 Cloud Transformation Guide 2025
          </h2>
          
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Uncover the critical trends shaping modern enterprise cloud adoption—from multi-cloud governance and FinOps optimization to building inherently secure, resilient platform architectures for digital disruption.
          </p>

          <button className="bg-white text-brand font-semibold text-lg px-10 py-4 rounded-md hover:bg-gray-100 transition">
            Access the E-book Now
          </button>
        </div>
      </div>
    </section>
  );
}