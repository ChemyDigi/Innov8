export default function MethodologySection() {
  return (
    <section className="relative pt-10 pb-2 bg-white">
      {/* Background Colored Band */}
      <div className="absolute inset-0 top-78 bg-black w-full"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand mb-6">Our Methodology</h2>
        <p className="text-lg leading-relaxed text-justify text-black">
          We believe a structured, phased approach is critical to overcoming
          cloud adoption barriers and achieving transformational outcomes.
        </p>

        {/* White Card */}
        <div className="relative z-20 mt-12 bg-white border border-[#D9D9D9] shadow-lg p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
            {/* Discover */}
            <div>
              <h3 className="text-xl font-bold mb-3">Discover</h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                Cloud Readiness Assessment, Security & Compliance Gap Analysis,
                TCO & ROI Modeling, Stakeholder Workshops.
                <br />
                <br />
              </p>

              <h3 className="text-xl font-bold mt-10 mb-3">Output</h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                A comprehensive strategy and business case tailored to your
                unique challenges and objectives.
              </p>
            </div>

            {/* Design */}
            <div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                Cloud Architecture & Security Design, Operating Model Design,
                Compliance Framework Development, Implementation Roadmapping.
              </p>

              <h3 className="text-xl font-bold mt-10 mb-3">Output</h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                A detailed technical and operational design ready for execution,
                ensuring your cloud environment is safe and optimized from the
                start.
              </p>
            </div>

            {/* Develop */}
            <div>
              <h3 className="text-xl font-bold mb-3">Develop</h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                Cloud Platform Implementation, Application Modernization &
                Migration, DevOps/DevSecOps Pipeline Setup, Continuous
                Optimization.
              </p>

              <h3 className="text-xl font-bold mt-10 mb-3">Output</h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                A comprehensive strategy and business case tailored to your
                unique challenges and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
