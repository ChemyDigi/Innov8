import First from "@/components/Cloud_SolutionComponents/First_Description";
import Hero from "@/components/Cloud_SolutionComponents/Hero_Section";
import Strategies from "@/components/Cloud_SolutionComponents/Strategic_Properties";
export default function CloudSolutionPage() {
    return (
        <div className="flex flex-col">
            <Hero />
            <First />
            <Strategies />
        </div>
    );
}