interface InsightCardProps {
  title: string;
  img: string;
  desc: string;
}

export default function InsightCard({ title, img, desc }: InsightCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm flex flex-col sm:flex-row">
      
      {/* Image */}
      <img
        src={img}
        className="w-full sm:w-48 h-48 object-cover"
        alt={title}
      />

      {/* Content */}
      <div className="p-6 flex flex-col justify-center">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>

        <button className="mt-4 text-brand flex items-center gap-2 cursor-pointer">
          Read More →
        </button>
      </div>
    </div>
  );
}
