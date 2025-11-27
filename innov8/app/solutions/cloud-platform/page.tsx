import Ebook from "@/components/Cloud_SolutionComponents/EbookSection";
import First from "@/components/Cloud_SolutionComponents/First_Description";
import Hero from "@/components/Cloud_SolutionComponents/Hero_Section";
import MethodologySection from "@/components/Cloud_SolutionComponents/MethodologySection";
import Lastsection from "@/components/Cloud_SolutionComponents/MethodologyWithWorkSection";
import Strategies from "@/components/Cloud_SolutionComponents/Strategic_Properties";
import WorkSection from "@/components/Cloud_SolutionComponents/WorkSection";

export default function CloudSolutionPage() {
    return (
        <div className="flex flex-col">
            <Hero />
            <First />
            <Strategies />
            <Ebook />
            <MethodologySection/>
            <Lastsection />
            <WorkSection/>
        </div>
    );
}