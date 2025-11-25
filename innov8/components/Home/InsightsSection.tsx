export default function InsightsSection() {
  return (
    <section className="relative py-10 bg-white">
        <div className="relative max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand">
                Latest Insights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <InsightCard
                title="Banking and Finance"
                img="/images/blue1.jpg"
                desc="Driving financial innovation through strategic insight."
                />
                <InsightCard
                title="Digital Strategy"
                img="/images/strategy.jpg"
                desc="Transforming organisations with data-driven digital roadmaps."
                />
                <InsightCard
                title="AI & Future Technology"
                img="/images/blue2.jpg"
                desc="Harnessing intelligent systems to accelerate innovation."
                />
            </div>
      </div>
    </section>
  );
}

function InsightCard({ title, img, desc }: any) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <img src={img} className="w-full h-48 object-cover" alt="" />
      <div className="p-6">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>

        <button className="mt-4 text-color-brand flex items-center gap-2">
          Read More →
        </button>
      </div>
    </div>
  );
}
