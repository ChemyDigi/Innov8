import HeroSection from "@/components/Home/HeroSection";
import SubsidiariesSection from "@/components/Home/Subsidiaries";
import CapabilitiesSection from "@/components/Home/Capabilities";
import IndustrySolutions from "@/components/Home/IndustrySolutions";
import Sustainability from "@/components/Home/Sustainability";
import SuccessSection from "@/components/Home/SuccessSection";
import InsightsSection from "@/components/Home/InsightsSection";
import WorkSection from "@/components/Home/WorkSection";

export default function HomePage() {
  return (
    <>
        <HeroSection />
        <SubsidiariesSection />
        <CapabilitiesSection />
        <IndustrySolutions/>
        <Sustainability/>
        <InsightsSection/>
        <SuccessSection/>
        <WorkSection/>

    </>
  );
}
