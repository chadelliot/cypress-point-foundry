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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FocusSection />
        <WhySection />
        <FacilitySpecs />
        <IndustryFocusSection />
        <ProcessSection />
        <PortfolioPreview />
        <TestimonialsSection />
        <CarolinasMap />
        <OfferingsSection />
        <FounderSection />
        <CTAFooter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
