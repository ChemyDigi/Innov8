// app/career/page.tsx
import HeroSection from '../../components/Career/HeroSection'
import IntroSection from '../../components/Career/IntroSection'
import FoundationSection from '../../components/Career/FoundationSection'
import CoreValuesSection from '../../components/Career/CoreValuesSection'
import LifeAtCompanySection from '../../components/Career/LifeAtCompanySection'
import CareerDevelopmentSection from '../../components/Career/CareerDevelopmentSection'
import TestimonialsSection from '../../components/Career/TestimonialsSection'
import LinkedInBanner from '../../components/Career/LinkedInBanner'
import ContactSection from '../../components/Career/ContactSection'

export default function CareerPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <FoundationSection />
      <CoreValuesSection />
      <LifeAtCompanySection />
      <CareerDevelopmentSection />
      <TestimonialsSection />
      <LinkedInBanner />
      <ContactSection />
    </div>
  )
}