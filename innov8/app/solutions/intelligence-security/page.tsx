import IntelligenceHeroBanner from "@/components/IntelligenceSecurity/IntelligenceHeroBanner";
import IntelligenceEbook from "@/components/IntelligenceSecurity/IntelligenceEbook";
import ResourcesSection from "@/components/IntelligenceSecurity/ResourcesSection";
import IntelligenceIntro from "@/components/IntelligenceSecurity/IntelligenceIntro";
import DetailsSection from "@/components/IntelligenceSecurity/DetailsSection";
import ConnectSection from "@/components/IntelligenceSecurity/ConnectSection";
import ExploreSection from "@/components/IntelligenceSecurity/ExploreSection";

export default function Page() {
  return (
    <div>
      <IntelligenceHeroBanner />
      <IntelligenceIntro />
      <IntelligenceEbook />
      <DetailsSection />
      <ResourcesSection />
      <ExploreSection />
      <ConnectSection />
    </div>
  );
}
