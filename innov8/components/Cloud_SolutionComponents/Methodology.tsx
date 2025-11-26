
const Methodology = () => {
  return (
    <div className="bg-white py-12 px-6 relative min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Left Aligned with Brand Color */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-brand mb-4 text-left">Our Methodology</h2>
          <p className="text-xl text-gray-600 max-w-3xl text-left">
            We believe a structured, phased approach is critical to overcoming cloud adoption barriers and achieving transformational outcomes.
          </p>
        </div>

        {/* Single White Box Container - Overflows over black box */}
        <div className="bg-white border border-gray-200 shadow-sm p-8 relative z-20 mb-80">
          {/* Three Columns for Discover, Design, Develop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Discover Column */}
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

            {/* Design Column */}
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

            {/* Develop Column */}
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

          {/* Outputs Section - Three columns below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Output 1 */}
            <div className="bg-gray-100 p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Output</h4>
              <p className="text-gray-600">
                A comprehensive strategy and business case tailored to your unique challenges and objectives.
              </p>
            </div>

            {/* Output 2 */}
            <div className="bg-gray-100 p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Output</h4>
              <p className="text-gray-600">
                A detailed technical and operational design ready for execution, ensuring your cloud environment is safe and optimized from the start.
              </p>
            </div>

            {/* Output 3 */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Output</h4>
              <p className="text-gray-600">
                A comprehensive strategy and business case tailored to your unique challenges and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Execute & Operationalize Section - Black box length decreased by 2cm */}
      <div className="absolute left-0 right-0 bottom-0 bg-black text-white pt-80 pb-16 px-6" 
           style={{ top: '40%', height: 'calc(60% + 5cm)' }}>
        <div className="max-w-6xl mx-auto h-full flex items-start justify-center pt-24">
          <div className="flex flex-col md:flex-row items-start w-full">
            {/* 3+1 - Massive size */}
            <div className="mb-8 md:mb-0 md:mr-20 flex-shrink-0">
              <div className="text-brand text-center">
                <div className="flex items-center justify-center space-x-8">
                  <span className="text-[180px] font-thin leading-none">3</span>
                  <span className="text-[150px] font-thin leading-none">+</span>
                  <span className="text-[180px] font-thin leading-none">1</span>
                </div>
              </div>
            </div>
            
            {/* Content section - moved further to the right */}
            <div className="flex-1 pl-12 mt-12">
              <h3 className="text-5xl font-bold mb-8">Execute & Operationalize</h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                We bring your strategic plans to life, building and deploying cutting-edge Cloud and Platform Solutions designed for Intelligent Continuous Security. Leveraging our end-to-end capabilities, we deliver rapid, secure transformations, reducing time-to-value and maximizing business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;