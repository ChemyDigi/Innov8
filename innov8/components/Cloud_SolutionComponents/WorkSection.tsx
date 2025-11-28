export default function WorkSection() {
  return (
    <section className="py-20 bg-white">
      <div className="relative max-w-7xl mx-auto p-10 bg-[#F5F5F1] flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="md:w-3/4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Let’s work together
          </h2>

          <p className="text-black mt-3 max-w-xl text-lg text-justify">
            Work with industry-leading engineers and strategists who understand
            your business and build solutions that scale. Let’s transform your
            digital future – together
          </p>
          
        </div>

        {/* RIGHT BUTTON (center vertically on desktop) */}
        <div className="mt-6 md:mt-0 md:w-1/4 flex md:justify-end">
          <button
            className="
              bg-black text-white 
              px-8 py-3 cursor-pointer
            "
          >
            Get in touch 
          </button>
        </div>
      </div>
    </section>
  );
}