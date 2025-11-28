import Link from "next/link";

export default function WorkSection() {
  return (
    <section className="py-20 bg-white">
      <div className="relative max-w-7xl mx-auto p-10 bg-[#F5F5F1] flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="md:w-3/4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Connect with Our Cybersecurity Experts
          </h2>

          <p className="text-black mt-3 max-w-xl text-lg">
            Serving global clients with a team of QA51–200 engineers
            specializing in cybersecurity, cloud, and AI.
          </p>
        </div>

        {/* RIGHT BUTTON (center vertically on desktop) */}
        <div className="mt-6 md:mt-0 md:w-1/4 flex md:justify-end">
          <Link href="/contact">
            <button
              className="
                bg-black text-white 
                px-8 py-3 cursor-pointer
              "
            >
              Get in touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
