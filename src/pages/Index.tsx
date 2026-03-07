import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FocusSection from "@/components/FocusSection";
import FacilitySpecs from "@/components/FacilitySpecs";
import PortfolioPreview from "@/components/PortfolioPreview";
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
        <FocusSection />
        <FacilitySpecs />
        <PortfolioPreview />
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
