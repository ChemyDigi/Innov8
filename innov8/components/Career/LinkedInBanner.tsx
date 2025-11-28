// app/career/components/LinkedInBanner.tsx
import Image from "next/image";

export default function LinkedInBanner() {
  return (
    <section className="relative w-full h-40 sm:h-48 bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Career/link.png"
          alt="LinkedIn Community"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div
            className="
            grid grid-cols-1 
            md:grid-cols-2 
            gap-6 
            items-center
            text-center 
            md:text-left
          "
          >
            {/* Left Text */}
            <div className="text-white">
              <p className="text-lg sm:text-xl md:text-2xl leading-snug">
                Join our LinkedIn community for the latest updates on news and
                job opportunities
              </p>
            </div>

            {/* Right Button */}
            <div className="flex md:justify-end justify-center">
              <a
                href="https://www.linkedin.com/company/innov8-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white text-gray-900 
                  px-6 py-2 
                  font-medium 
                  hover:bg-gray-100 
                  transition-colors duration-200
                "
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
