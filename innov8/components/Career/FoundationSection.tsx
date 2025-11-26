// app/career/components/FoundationSection.tsx
export default function FoundationSection() {
  return (
    <section className="py-16 bg-[#F5F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-left">
          Our Foundation
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Grid - Paragraph */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              INNOV8 was founded in 2020 with a commitment to delivering solutions that transcend traditional technology. We are an agile organization powered by a strong engineering team, equipped to help you tackle modern challenges and uncover new growth opportunities.
            </p>
          </div>
          
          {/* Right Grid - Stats */}
          <div className="grid grid-cols-3 gap-8">
            {/* Employees */}
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">51-200</div>
              <div className="text-sm text-gray-600 mt-1">Employees</div>
            </div>
            
            {/* Associated Members */}
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">40+</div>
              <div className="text-sm text-gray-600 mt-1">Associated Members</div>
            </div>
            
            {/* Founded In */}
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-gray-900">2020</div>
              <div className="text-sm text-gray-600 mt-1">Founded in</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}