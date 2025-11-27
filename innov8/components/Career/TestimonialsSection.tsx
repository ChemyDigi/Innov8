// app/career/components/TestimonialsSection.tsx
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "INNOV8 empowers me to work on strategic and complex challenges that accelerate digital transformation. We enable businesses to modernize their technology frameworks and create a lasting competitive advantage.",
      name: "Krishna",
      position: "Senior Engineer",
    },
    {
      quote:
        "At INNOV8, I have the ability to combine deep technical strategy with hands-on implementation, shaping solutions that truly connect and deliver for our clients.",
      name: "Ravi",
      position: "Cloud Solutions Architect",
    },
    {
      quote:
        "With the support of INNOV8, I'm advancing my expertise in AI while contributing to R&D services that truly matter and prioritize everyday, impactful use cases.",
      name: "Fernando",
      position: "AI R&D Specialist",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-brand mb-6">
          Here's What Our Team Says
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 flex flex-col">
              {/* Quote Icon */}
              <div className="text-brand mb-4 flex justify-center md:justify-start">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-lg leading-relaxed text-justify text-gray-700 mb-6 grow">
                {testimonial.quote}
              </p>

              {/* Name & Position */}
              <div className="text-center md:text-left mt-auto">
                <div className="font-bold text-brand text-lg">
                  {testimonial.name}
                </div>
                <div className="font-semibold text-gray-900">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
