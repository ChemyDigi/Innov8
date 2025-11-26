export default function SuccessSection() {
  return (
    <section className="relative py-10 bg-white">
      {/* Background Colored Band */}
      <div className="absolute inset-0 top-48 bg-[#F5F5F1] w-full"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand mb-6 text-left md:text-right">
          Our Success Story
        </h2>

        {/* Overlapping White Card */}
        <div
          className="
                relative z-20
                mt-12
                bg-white 
                border border-[#D9D9D9] 
                shadow-lg
                flex flex-col md:flex-row 
                gap-6 
                p-4 md:p-6 
            "
        >
          <div className="p-2 md:p-4 flex-1">
            <p className="text-black leading-relaxed text-justify">
              We’ve helped organizations modernize systems, build scalable cloud
              platforms, and secure their digital environments. Our engineering-
              first approach ensures measurable business value from day one.
            </p>

            <button className="px-6 py-3 bg-black text-white mt-5 cursor-pointer">
              Get in touch
            </button>
          </div>

          <img
            src="/images/home/success.jpg"
            alt="Subsidiary building"
            width={500}
            height={350}
            className="object-cover flex-1"
          />
        </div>
      </div>
    </section>
  );
}
