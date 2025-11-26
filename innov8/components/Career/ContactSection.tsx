// app/career/components/ContactSection.tsx
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="py-16 bg-[#F5F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Let's work together
              </h2>
              <p className="text-base text-gray-700 leading-6">
                Embrace change with our digital transformation experts. Our innovation across Intelligent Continuous Security, Cloud, and AI helps you build a more resilient and competitive tomorrow.
              </p>
            </div>
            
            {/* Right Button */}
            <div className="flex justify-end">
              <Link 
                href="/contact"
                className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 text-base inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}