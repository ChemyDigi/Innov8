'use client';

import { useState } from 'react';
import HeroSection from '../../components/insights/HeroSection';
import TechInsights from '../../components/insights/TechInsights';
import BlogDetail from '../../components/insights/BlogDetail';

export default function InsightsPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const blogData = {
    banking: {
      title: "Banking and Finance",
      description: "Driving financial innovation through advanced technology and strategic insight",
      date: "24 Nov 2025",
      author: "Adam Fernando",
      content: {
        firstParagraph: "Innov8 empowers financial institutions to modernize their operations with secure, scalable, and future-ready digital solutions. We help banks enhance customer experience, streamline workflows, and adopt intelligent automation for faster, more reliable financial services. From digital onboarding to advanced analytics and compliance-driven platforms, we support organizations in building trust, efficiency, and long-term growth in a rapidly evolving financial landscape.",
        secondParagraph: "Innov8 delivers cutting-edge technology solutions tailored for banks, fintechs, and financial service organizations. Our services include AI-driven automation, secure cloud adoption, digital onboarding systems, cyber-resilient architectures, and real-time data platforms. We enable financial institutions to accelerate service delivery, reduce operational overhead, and unlock insights through advanced analytics and machine learning models. By combining industry expertise with modern engineering practices, Innov8 ensures higher efficiency, improved customer satisfaction, and compliance with evolving global standards."
      }
    },
    digital: {
      title: "Digital Strategy",
      description: "Transforming organizations with data-driven digital roadmaps for sustainable growth",
      date: "20 Nov 2025",
      author: "Sarah Chen",
      content: {
        firstParagraph: "Digital transformation is no longer optional but essential for business survival and growth. Our strategic approach helps organizations navigate the complex digital landscape by leveraging data analytics, cloud technologies, and customer-centric design. We create comprehensive digital roadmaps that align technology investments with business objectives, ensuring sustainable growth and competitive advantage in today's fast-paced market environment.",
        secondParagraph: "Through our proven methodology, we help enterprises implement robust digital frameworks that enhance operational efficiency, improve customer engagement, and drive innovation. Our solutions include digital workflow automation, customer journey mapping, data governance frameworks, and scalable architecture design. By focusing on both technological capabilities and organizational change management, we ensure successful digital transformations that deliver measurable business outcomes and long-term value creation."
      }
    },
    ai: {
      title: "AI & Future Technology",
      description: "Harnessing intelligent systems to accelerate innovation and reshape the future",
      date: "18 Nov 2025",
      author: "Marcus Johnson",
      content: {
        firstParagraph: "Artificial Intelligence is revolutionizing how businesses operate and compete in the global marketplace. Our AI solutions leverage cutting-edge machine learning algorithms, natural language processing, and computer vision to solve complex business challenges. From predictive analytics to intelligent automation, we help organizations harness the power of AI to drive innovation, improve decision-making, and create new revenue streams in an increasingly digital world.",
        secondParagraph: "The future of technology lies in the seamless integration of AI with other emerging technologies like blockchain, IoT, and quantum computing. Our research and development initiatives focus on creating next-generation solutions that anticipate market trends and customer needs. We partner with forward-thinking organizations to build intelligent systems that not only optimize current operations but also create entirely new business models and opportunities for growth in the evolving technological landscape."
      }
    }
  };

  return (
    <div className="min-h-screen font-montserrat bg-white">
      <HeroSection />
      <TechInsights onPostSelect={setSelectedPost} />
      
      {/* Blog Detail Section - appears below when a post is selected */}
      {selectedPost && (
        <div className="animate-fadeIn">
          <BlogDetail 
            post={blogData[selectedPost as keyof typeof blogData]} 
            onClose={() => setSelectedPost(null)}
          />
        </div>
      )}
    </div>
  );
}