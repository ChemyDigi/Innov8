// app/career/components/LinkedInBanner.tsx
import Image from 'next/image'

export default function LinkedInBanner() {
  return (
    <section className="relative w-full h-40 bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Career/link.png"
          alt="LinkedIn Community"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left Text */}
            <div className="text-white">
              <p className="text-xl md:text-2xl">
  Join our LinkedIn community for the latest updates on news and job opportunities
</p>

            </div>
            
            {/* Right Button */}
            <div className="flex justify-end mt-4 md:mt-0">
              <a 
                href="https://www.linkedin.com/company/innov8-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}