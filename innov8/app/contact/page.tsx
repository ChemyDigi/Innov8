import HeroBanner from "@/components/ContactComponents/HeroBanner";
import ContactForm from "@/components/ContactComponents/ContactForm";

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <HeroBanner />
            <ContactForm />
        </div>
    );
}