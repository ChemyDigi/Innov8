export default function MethodologySection() {
  return (
    <section className="relative pt-10 pb-2 bg-white">
      {/* Background Colored Band */}
      <div className="absolute inset-0 top-78 bg-black w-full"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand mb-6">
          Our Methodology
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-14">
          We believe a structured, phased approach is critical to overcoming cloud
          adoption barriers and achieving transformational outcomes.
        </p>

        {/* Overlapping White Card */}
        <div
          className="
                relative z-20
                mt-12
                bg-white 
                border border-[#D9D9D9] 
                shadow-lg
                flex flex-col
                p-10 
                text-black
                text-center
            "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            {/* Discover */}
            <div className="px-10">
              <h3 className="text-xl font-bold mb-3">Discover</h3>
              <p className="text-gray-700 text-justify">
                Cloud Readiness Assessment, Security & Compliance Gap Analysis, TCO & ROI Modeling, Stakeholder Workshops.
              </p>
            </div>

            {/* Design */}
            <div className="px-10">
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-gray-700 text-justify">
                Cloud Architecture & Security Design, Operating Model Design, Compliance Framework Development, Implementation Roadmapping.
              </p>
            </div>

            {/* Develop */}
            <div className="px-10">
              <h3 className="text-xl font-bold mb-3">Develop</h3>
              <p className="text-gray-700 text-justify">
                Cloud Platform Implementation, Application Modernization & Migration, DevOps/DevSecOps Pipeline Setup, Continuous Optimization.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            {/* Output */}
            <div className="px-10">
              <h3 className="text-xl font-bold mb-3">Output</h3>
              <p className="text-gray-700 text-justify">
                A comprehensive strategy and business case tailored to your unique
                challenges and objectives.
              </p>
            </div>

            {/* Design */}
            <div className="px-10">
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-gray-700 text-justify">
                A comprehensive strategy and business case tailored to your unique
                challenges and objectives.
              </p>
            </div>

            {/* Develop */}
            <div className="px-10">
              <h3 className="text-xl font-bold mb-3">Develop</h3>
              <p className="text-gray-700 text-justify">
                A comprehensive strategy and business case tailored to your unique
                challenges and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}