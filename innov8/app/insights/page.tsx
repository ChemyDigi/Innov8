"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "../../components/insights/HeroSection";
import TechInsights from "../../components/insights/TechInsights";
import BlogDetail from "../../components/insights/BlogDetail";
import insightsData from "../data/insightsData.json";

export default function InsightsPage() {
  const searchParams = useSearchParams();
  const articleId = searchParams.get("article");

  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const blogDetailRef = useRef<HTMLDivElement>(null);

  // Set selected post from URL parameter on mount
  useEffect(() => {
    if (articleId && insightsData[articleId as keyof typeof insightsData]) {
      setSelectedPost(articleId);
    }
  }, [articleId]);

  useEffect(() => {
    if (selectedPost && blogDetailRef.current) {
      setTimeout(() => {
        blogDetailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [selectedPost]);

  return (
    <div className="min-h-screen font-montserrat bg-white">
      <HeroSection />
      <TechInsights onPostSelect={setSelectedPost} />

      {/* Blog Detail Section - appears below when a post is selected */}
      {selectedPost && (
        <div ref={blogDetailRef} className="animate-fadeIn">
          <BlogDetail
            post={insightsData[selectedPost as keyof typeof insightsData]}
            onClose={() => setSelectedPost(null)}
          />
        </div>
      )}
    </div>
  );
}
