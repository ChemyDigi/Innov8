"use client";

export default function IndustrySolutions() {
  return (
    <section className="relative py-10 bg-white">
        <div className="relative max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand relative">
                Our Industry Solutions
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
                We support organisations across diverse industries with tailored digital
                strategies and high-impact technology solutions that solve real business
                problems.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <div className="border rounded-lg overflow-hidden shadow-sm">
                <img
                    src="/images/banking.jpg"
                    className="w-full h-52 object-cover"
                    alt=""
                />
                <div className="p-5">
                    <h3 className="font-semibold">Banking and finance</h3>
                    <p className="text-sm text-gray-600 mt-2">
                    Transforming financial institutions with secure and scalable
                    digital systems.
                    </p>
                </div>
                </div>

                <div className="border rounded-lg overflow-hidden shadow-sm">
                <img
                    src="/images/telecom.jpg"
                    className="w-full h-52 object-cover"
                    alt=""
                />
                <div className="p-5">
                    <h3 className="font-semibold">Teleco and media</h3>
                    <p className="text-sm text-gray-600 mt-2">
                    Delivering platforms that elevate connectivity and unlock new
                    digital revenues.
                    </p>
                </div>
                </div>

                <div className="border rounded-lg overflow-hidden shadow-sm">
                <img
                    src="/images/industry3.jpg"
                    className="w-full h-52 object-cover"
                    alt=""
                />
                <div className="p-5">
                    <h3 className="font-semibold">Other industries</h3>
                    <p className="text-sm text-gray-600 mt-2">
                    Empowering organisations with omni-channel, AI-driven systems.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
}
