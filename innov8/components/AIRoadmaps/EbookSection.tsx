import Image from "next/image";
import EbookImg from "/mnt/data/E-book.png";

export default function EbookSection() {
  return (
    <section className="w-full bg-brand py-20 px-6 md:px-12 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={EbookImg}
            alt="E-book Download"
            className="w-[350px] md:w-[420px] h-auto"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-10">
            Unlock AI’s Full Strategic <br />
            Potential – Download the <br />
            Innov8 Playbook
          </h2>

          <button className="bg-white text-brand font-semibold text-lg px-10 py-4 rounded-md hover:bg-gray-100 transition">
            Access the E-book Now
          </button>
        </div>
      </div>
    </section>
  );
}
