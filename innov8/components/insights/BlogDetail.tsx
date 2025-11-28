import Image from "next/image";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: string;
  content: {
    firstParagraph: string;
    secondParagraph: string;
  };
}

interface BlogDetailProps {
  post: BlogPost;
  onClose: () => void;
}

export default function BlogDetail({ post, onClose }: BlogDetailProps) {
  // Different images for different topics
  const getTopicImage = (title: string) => {
    switch (title) {
      case "Banking and Finance":
        return "/images/insight/banking.png";
      case "Digital Strategy":
        return "/images/insight/digital.png";
      case "AI & Future Technology":
        return "/images/insight/ai.png";
      default:
        return "/images/insight/banking.png";
    }
  };

  const getContentImage = (title: string) => {
    switch (title) {
      case "Banking and Finance":
        return "/images/insight/banking in.png";
      case "Digital Strategy":
        return "/images/insight/banking in.png";
      case "AI & Future Technology":
        return "/images/insight/banking in.png";
      default:
        return "/images/insight/banking in.png";
    }
  };

  return (
    <section className="bg-[#F5F6F1] py-12 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Close Button */}
        <div className="px-4 sm:px-8 mb-8">
          <button
            onClick={onClose}
            className="text-brand text-lg font-normal hover:text-red-700 transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Close Article
          </button>
        </div>

        {/* Main Image - Full width */}
        <div className="px-4 sm:px-8 mb-12">
          <div className="relative w-full h-64 sm:h-80 bg-gray-200 overflow-hidden">
            <Image
              src={getTopicImage(post.title)}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section - Text fill layout */}
        <div className="px-4 sm:px-8 max-w-8xl mx-left">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl font-normal text-gray-600 mb-8 leading-relaxed text-justify">
            {post.description}
          </p>

          {/* Date & Author */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8">
            <span className="text-base sm:text-lg font-bold text-brand">
              {post.date}
            </span>
            <span className="text-base sm:text-lg font-bold text-brand">
              By {post.author}
            </span>
          </div>

          {/* First Paragraph */}
          <p className="text-base sm:text-lg font-normal text-gray-800 mb-8 sm:mb-12 leading-relaxed text-justify">
            {post.content.firstParagraph}
          </p>

          {/* Middle Image - Centered between paragraphs */}
          <div className="relative w-full h-64 sm:h-80 bg-gray-200 overflow-hidden my-8 sm:my-12">
            <Image
              src={getContentImage(post.title)}
              alt={`${post.title} Content`}
              fill
              className="object-cover"
            />
          </div>

          {/* Second Paragraph */}
          <p className="text-base sm:text-lg font-normal text-gray-800 leading-relaxed text-justify mb-12 sm:mb-16">
            {post.content.secondParagraph}
          </p>
        </div>
      </div>
    </section>
  );
}
