"use client";

export default function MethodologyWithWorkSection() {
  return (
    <div className="w-full bg-white">

      {/* -------------------- BLACK SECTION (FULL-WIDTH) -------------------- */}
      <div className="relative w-full bg-black text-white py-10">

        <div className="max-w-6xl mx-auto px-6 lg:px-0 flex flex-col md:flex-row items-start">

          {/* 3 + 1 */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-16 md:mb-0">
            <div className="flex space-x-6">
              <span className="text-[160px] font-bold text-brand leading-none">3</span>
              <span className="text-[140px] font-bold text-brand leading-none">+</span>
              <span className="text-[160px] font-bold text-brand leading-none">1</span>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 md:pl-20">
            <h3 className="text-5xl font-bold mb-8">
              Execute & Operationalize
            </h3>

            <p className="text-gray-300 text-xl leading-relaxed text-justify px-5">
              We bring your strategic plans to life, building and deploying
              cutting-edge Cloud and Platform Solutions designed for Intelligent
              Continuous Security. Leveraging our end-to-end capabilities, we
              deliver rapid, secure transformations, reducing time-to-value and
              maximizing business impact.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
