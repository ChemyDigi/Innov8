export default function CapabilitiesSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-red-600 mb-6">
        Our Capabilities
      </h2>

      <p className="max-w-3xl text-lg mb-10">
        Our capabilities & technologies are designed to bring business value
        and address the specific challenges of organisations across different
        industries seeking to maximise their digital potential.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <button className="border p-4 rounded-lg text-left">
          Cloud and Platform Solutions
        </button>

        <button className="border p-4 rounded-lg text-left">
          AI Roadmaps and R&D Services
        </button>

        <button className="border p-4 rounded-lg text-left col-span-1">
          Intelligent Continuous Security
        </button>
      </div>

      <p className="text-gray-600 mt-10 max-w-3xl">
        We help organizations adopt modern platforms, secure digital ecosystems,
        and explore future-ready technologies.
      </p>
    </section>
  );
}
