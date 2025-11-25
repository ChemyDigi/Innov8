export default function CapabilitiesSection() {
  return (
    <section className="py-12 px-40 bg-[#F5F5F1] font-montserrat">
      <h2 className="text-3xl font-bold text-red-600 mb-6">
        Our Capabilities
      </h2>

      <p className="text-lg mb-10 text-black">
        Our capabilities & technologies are designed to bring business value
        and address the specific challenges of organisations across different
        industries seeking to maximise their digital potential.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-black">
        <button className="bg-white p-4 text-left">
          Cloud and Platform Solutions
        </button>

        <button className="bg-white p-4 text-left">
          AI Roadmaps and R&D Services
        </button>

        <button className="bg-white p-4 text-left col-span-1">
          Intelligent Continuous Security
        </button>
      </div>

      <p className="text-black mt-10">
        We help organizations adopt modern platforms, secure digital ecosystems,
        and explore future-ready technologies.
      </p>
    </section>
  );
}
