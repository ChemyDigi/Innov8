import HeroSectionWithImage from "../../components/AboutUs/HeroSectionWithImage";
import DigitalShiftIntro from "../../components/AboutUs/DigitalShiftIntro";
import  OurValues from "../../components/AboutUs/OurValues";
import EqualityCentreIntro from "../../components/AboutUs/EqualityCentreIntro";
import SeniorLeadership from "@/components/AboutUs/SeniorLeadership";
import Testimonial from "@/components/AboutUs/Testimonial";

 import TeamSection from "@/components/AboutUs/TeamSection";
 import OurStory from "@/components/AboutUs/OurStory";
 import WorkTogether from "@/components/AboutUs/WorkTogether";


export default function AboutPage() {
  return (
    <main className="flex flex-col">
   
   
      <HeroSectionWithImage />
      <DigitalShiftIntro />
      <OurValues />
      <EqualityCentreIntro />
      <SeniorLeadership />
      <Testimonial />
      <TeamSection />
      <OurStory />
      <WorkTogether />
      
      
    </main>
  );
}
