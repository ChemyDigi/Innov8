"use client";

import { useState, useRef, useEffect } from "react";
import HeroSection from "../../components/insights/HeroSection";
import TechInsights from "../../components/insights/TechInsights";
import BlogDetail from "../../components/insights/BlogDetail";
import insightsData from "../data/insightsData.json";

export default function InsightsPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const blogDetailRef = useRef<HTMLDivElement>(null);

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
