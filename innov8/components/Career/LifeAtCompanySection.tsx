// app/career/components/LifeAtCompanySection.tsx
import Image from 'next/image'

export default function LifeAtCompanySection() {
  const features = [
    {
      image: "/images/Career/workbalance.png",
      title: "Work-Life Balance",
      description: "We encourage our employees to find synergy in their personal and work lives through various health and lifestyle initiatives, fostering an environment where they can thrive both professionally and personally."
    },
    {
      image: "/images/Career/Thriving.png",
      title: "Thriving Engineering Culture",
      description: "We rise higher when we collaborate. At INNOV8, we support each other, celebrate innovative solutions, and create career growth opportunities from within. Our one-team philosophy is our greatest strength."
    },
    {
      image: "/images/Career/excellence.png",
      title: "Engineering Excellence",
      description: "Excellence is in our DNA. From Intelligent Continuous Security to Cloud Platforms and AI R&D, we drive digital transformation by prioritizing practical, impactful implementations that deliver real-world value."
    }
  ]

  return (
    <section className="py-16 bg-[#F5F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-left">
          Life at INNOV8
        </h2>
        
        {/* Cards Grid - 2 per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image on top - shorter height */}
              <div className="relative h-40 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content below */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}