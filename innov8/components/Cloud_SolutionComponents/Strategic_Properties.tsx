import React from 'react';

const Strategic_Priorities: React.FC = () => {
  const priorities = [
    {
      title: "Cloud Security & Compliance",
      description: "Building a secure and compliant foundation from the start, integrating governance and security controls directly into your cloud-native architecture.",
      image: "/images/CloudSolutions/Cloud_Security.png"
    },
    {
      title: "Modernization & Transformation", 
      description: "Building a secure and compliant foundation from the start, integrating governance and security controls directly into your cloud-native architecture.",
      image: "/images/CloudSolutions/Modernization.png"
    },
    {
      title: "Cost Optimization & Efficiency",
      description: "Building a secure and compliant foundation from the start, integrating governance and security controls directly into your cloud-native architecture.",
      image: "/images/CloudSolutions/Cost_Optimization.png"
    },
    {
      title: "Strategy & Realization",
      description: "Building a secure and compliant foundation from the start, integrating governance and security controls directly into your cloud-native architecture.",
      image: "/images/CloudSolutions/Strategy.png"
    }
  ];

  return (
    <section className="relative w-full bg-white pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading - At the top with reduced padding */}
        <div className="text-left mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#C51A1B]">
            Our Strategic Priorities
          </h1>
        </div>

        {/* Priorities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {priorities.map((priority, index) => (
            <div key={index} className="bg-[#F5F6F1] border border-gray-200 h-96 overflow-hidden">
              {/* Image Section - Perfect box width and increased height */}
              <div className="w-full h-52">
                <img 
                  src={priority.image} 
                  alt={priority.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {priority.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {priority.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategic_Priorities;