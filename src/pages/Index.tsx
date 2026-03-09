import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FocusSection from "@/components/FocusSection";
import WhySection from "@/components/WhySection";
import FacilitySpecs from "@/components/FacilitySpecs";
import IndustryFocusSection from "@/components/IndustryFocusSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CarolinasMap from "@/components/CarolinasMap";
import OfferingsSection from "@/components/OfferingsSection";
import FounderSection from "@/components/FounderSection";
import CTAFooter from "@/components/CTAFooter";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider variant="grunge-top" dark />
        <StatsSection />
        <SectionDivider variant="schematic" />
        <FocusSection />
        <SectionDivider variant="torn-top" dark />
        <WhySection />
        <SectionDivider variant="bolt-line" />
        <FacilitySpecs />
        <SectionDivider variant="grunge-bottom" />
        <IndustryFocusSection />
        <SectionDivider variant="torn-bottom" dark />
        <ProcessSection />
        <SectionDivider variant="schematic" />
        <PortfolioPreview />
        <SectionDivider variant="grunge-top" dark />
        <TestimonialsSection />
        <SectionDivider variant="bolt-line" />
        <CarolinasMap />
        <SectionDivider variant="torn-top" dark />
        <OfferingsSection />
        <SectionDivider variant="grunge-top" dark />
        <FounderSection />
        <SectionDivider variant="torn-bottom" />
        <CTAFooter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
