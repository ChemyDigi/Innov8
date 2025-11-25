import AiBanner from "@/components/AIRoadmaps/AiHeroBanner";
import ApproachSection from "@/components/AIRoadmaps/ApproachSection";
import GridSection from "@/components/AIRoadmaps/GridSection";
// import EbookSection from "@/components/AIRoadmaps/EbookSection";
import LearnMoreSection from "@/components/AIRoadmaps/LearnMoreSection";
import PartnersSection from "@/components/AIRoadmaps/PartnersSection";
import AiTwoColumnSection from "@/components/AIRoadmaps/TwoColumnSection";

export default function Page() {
  return (
    <div>
      <AiBanner />
      <AiTwoColumnSection />
      <LearnMoreSection />
      <ApproachSection />
      {/* <EbookSection /> */}
      <GridSection />
      <PartnersSection />
    </div>
  );
}
