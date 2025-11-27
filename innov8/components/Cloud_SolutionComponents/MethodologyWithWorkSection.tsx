
const MethodologyWithWorkSection = () => {
  return (
    <div className="bg-white relative">
      {/* Methodology White Content */}
      <div className="py-12 px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-brand mb-4 text-left">Our Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl text-left">
              We believe a structured, phased approach is critical to overcoming cloud adoption barriers and achieving transformational outcomes.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-60">
            {/* Three Columns for Discover, Design, Develop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="border-l-4 border-brand pl-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Discover</h3>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>Cloud Readiness Assessment</li>
                  <li>Security & Compliance Gap Analysis</li>
                  <li>TCO & ROI Modeling</li>
                  <li>Stakeholder Workshops</li>
                </ul>
              </div>

              <div>
                <div className="border-l-4 border-brand pl-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Design</h3>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>Cloud Architecture & Security Design</li>
                  <li>Operating Model Design</li>
                  <li>Compliance Framework Development</li>
                  <li>Implementation Roadmapping</li>
                </ul>
              </div>

              <div>
                <div className="border-l-4 border-brand pl-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Develop</h3>
                </div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>Cloud Platform Implementation</li>
                  <li>Application Modernization & Migration</li>
                  <li>DevOps/DevSecOps Pipeline Setup</li>
                  <li>Continuous Optimization</li>
                </ul>
              </div>
            </div>

            {/* Outputs Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Output</h4>
                <p className="text-gray-600 text-justify">
                  A comprehensive strategy and business case tailored to your unique challenges and objectives.
                </p>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Output</h4>
                <p className="text-gray-600 text-justify">
                  A detailed technical and operational design ready for execution, ensuring your cloud environment is safe and optimized from the start.
                </p>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Output</h4>
                <p className="text-gray-600 text-justify">
                  A comprehensive strategy and business case tailored to your unique challenges and objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black Box - Reduced height and positioned higher */}
      <div className="absolute inset-x-0 top-1/3 bg-black text-white z-10 pt-32 pb-8" style={{ height: '60%' }}>
        <div className="max-w-6xl mx-auto h-full flex items-start justify-center">
          <div className="flex flex-col md:flex-row items-start w-full">
            <div className="mb-8 md:mb-0 md:mr-20 flex-shrink-0">
              <div className="text-brand text-center">
                <div className="flex items-center justify-center space-x-8 min-h-[500px]">
                  <span className="text-[180px] font-bold leading-none">3</span>
                  <span className="text-[150px] font-bold leading-none">+</span>
                  <span className="text-[180px] font-bold leading-none">1</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 pl-12 mt-12 ">
              <h3 className="text-5xl font-bold mb-8 min-h-[130px]"><br /><br />Execute & Operationalize</h3>
              <p className="text-gray-300 text-xl leading-relaxed text-justify">
                We bring your strategic plans to life, building and deploying cutting-edge Cloud and Platform Solutions designed for Intelligent Continuous Security. Leveraging our end-to-end capabilities, we deliver rapid, secure transformations, reducing time-to-value and maximizing business impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WorkSection - Positioned right below black box */}
      <div className="relative z-30 mt-0">
        <section className="py-20 bg-white">
          <div className="relative max-w-7xl mx-auto p-10 bg-[#F5F5F1] flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="md:w-3/4">
              <h2 className="text-3xl md:text-4xl font-semibold text-black">
                Let's work together
              </h2>
              <p className="text-black mt-3 max-w-xl">
                Work with industry-leading engineers and strategists who understand
                your business and build solutions that scale. Let's transform your
                digital future – together
              </p>
            </div>

            <div className="mt-6 md:mt-0 md:w-1/4 flex md:justify-end">
              <button className="bg-black text-white px-8 py-3 cursor-pointer">
                Get in touch
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MethodologyWithWorkSection;