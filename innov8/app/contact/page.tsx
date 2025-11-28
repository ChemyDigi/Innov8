import HeroBanner from "@/components/ContactComponents/HeroBanner";
import ContactForm from "@/components/ContactComponents/ContactForm";
import VisitUs from "@/components/ContactComponents/VisitUs";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />
          <VisitUs />
        </div>
      </div>
    </div>
  );
}
