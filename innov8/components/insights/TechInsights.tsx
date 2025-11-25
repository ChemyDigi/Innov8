import Image from 'next/image';

interface TechInsightsProps {
  onPostSelect: (post: string) => void;
}

export default function TechInsights({ onPostSelect }: TechInsightsProps) {
  const cards = [
    {
      id: 'banking',
      image: '/images/insight/banking.png',
      title: 'Banking and Finance',
      description: 'Driving financial innovation through advanced technology and strategic insight'
    },
    {
      id: 'digital',
      image: '/images/insight/digital.png',
      title: 'Digital Strategy',
      description: 'Transforming organizations with data-driven digital roadmaps for sustainable growth'
    },
    {
      id: 'ai',
      image: '/images/insight/ai.png',
      title: 'AI & Future Technology',
      description: 'Harnessing intelligent systems to accelerate innovation and reshape the future'
    }
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold text-red-600 mb-4 sm:mb-6">
            Tech & Innovation Insights
          </h2>
          {/* Optional subtitle for better context */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto hidden sm:block">
            Explore the latest trends and innovations shaping the future of technology
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:scale-[1.02] group"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 xs:h-56 sm:h-60 md:h-64 lg:h-72 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              
              {/* Content Container */}
              <div className="p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 mb-3 sm:mb-4 leading-tight">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed sm:leading-loose flex-grow mb-4 sm:mb-6">
                  {card.description}
                </p>
                
                {/* Read More Button */}
                <div className="mt-auto">
                  <button 
                    onClick={() => onPostSelect(card.id)}
                    className="text-red-600 text-lg sm:text-xl font-normal hover:text-red-700 transition-all duration-200 flex items-center gap-2 group/btn w-full justify-start"
                  >
                    <span className="relative">
                      Read More
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover/btn:w-full transition-all duration-300"></span>
                    </span>
                    <svg 
                      className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View All Button for mobile */}
        <div className="text-center mt-8 sm:mt-12 md:hidden">
          <button className="text-red-600 text-lg font-semibold hover:text-red-700 transition-colors duration-200 border border-red-600 px-6 py-3 rounded-lg hover:bg-red-50">
            View All Insights
          </button>
        </div>
      </div>
    </section>
  );
}