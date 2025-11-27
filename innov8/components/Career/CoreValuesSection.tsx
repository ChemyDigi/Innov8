// app/career/components/CoreValuesSection.tsx
export default function CoreValuesSection() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Be Client-Obsessed",
      description:
        "Our clients' challenges are at the core of everything we do. Every solution we architect ensures they stay ahead in an evolving digital environment."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Unite as One Agile Team",
      description:
        "We stand united through trust, accountability, and empowerment. Collaboration fuels our engineering excellence and innovation."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Dare to be Bold",
      description:
        "We embrace bold ideas and decisive actions that push boundaries. We lead with integrity to drive meaningful technological progress."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-red-600 mb-12
          text-center md:text-left
        ">
          Our Core Values
        </h2>

        {/* Values Grid */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10
          text-center md:text-left
        ">
          {values.map((value, index) => (
            <div
              key={index}
              className="
                bg-white p-8 rounded-lg transition-shadow duration-300
                hover:shadow-lg
              "
            >

              {/* Icon */}
              <div className="
                w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6
                mx-auto md:mx-0
              ">
                <div className="text-red-600">{value.icon}</div>
              </div>

              {/* Title */}
              <h3 className="
                text-xl font-semibold text-gray-900 mb-3
                text-center md:text-left
              ">
                {value.title}
              </h3>

              {/* Description */}
              <p className="
                text-gray-700 leading-relaxed
                text-center md:text-justify
              ">
                {value.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
