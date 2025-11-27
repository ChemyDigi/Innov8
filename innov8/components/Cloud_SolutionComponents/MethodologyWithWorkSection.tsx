"use client";

export default function MethodologyWithWorkSection() {
  return (
    <section className="relative py-10 bg-black text-white">
      <div className="relative max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-start md:items-center gap-12">

          {/* Left Side - 3 + 1 */}
          <div className="flex justify-center md:justify-start w-full md:w-1/2">
            <div className="flex space-x-6">
              <span className="text-[160px]  font-bold text-brand leading-none">3</span>
              <span className="text-[140px] font-bold text-brand leading-none">+</span>
              <span className="text-[160px] font-bold text-brand leading-none">1</span>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="flex-1 md:w-1/2">
            <h2 className="text-3xl font-bold">
              Execute & Operationalize
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify pt-5">
              We bring your strategic plans to life, building and deploying
              cutting-edge Cloud and Platform Solutions designed for Intelligent
              Continuous Security. Leveraging our end-to-end capabilities, we deliver
              rapid, secure transformations, reducing time-to-value and maximizing 
              business impact.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}