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
    <section className="py-16 mx-24"> {/* Added mx-24 for 1 inch margin on both sides */}
      <div className="max-w-7xl mx-auto px-8"> {/* Added px-8 for inner padding */}
        <h2 className="text-5xl font-semibold text-red-600 mb-12 text-center">
          Tech & Innovation Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative w-full h-64">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={485}
                  height={280}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-medium mb-4 text-gray-800">
                  {card.title}
                </h3>
                
                <p className="text-lg font-normal text-gray-600 mb-6 leading-relaxed flex-grow">
                  {card.description}
                </p>
                
                <div className="mt-auto">
                  <button 
                    onClick={() => onPostSelect(card.id)}
                    className="text-red-600 text-xl font-normal hover:text-red-700 transition-colors duration-200 flex items-center gap-2"
                  >
                    Read More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}