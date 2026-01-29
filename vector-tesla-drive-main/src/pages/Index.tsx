import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AntiFearSection from "@/components/AntiFearSection";
import FearsSection from "@/components/FearsSection";
import WhyUsSection from "@/components/WhyUsSection";
import AutodromesSection from "@/components/AutodromesSection";
import FleetSection from "@/components/FleetSection";
import TariffsSection from "@/components/TariffsSection";
import TestDriveSection from "@/components/TestDriveSection";
import ReviewsSection from "@/components/ReviewsSection";
import ProcessSection from "@/components/ProcessSection";
import PromotionsSection from "@/components/PromotionsSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AntiFearSection />
      <FearsSection />
      <WhyUsSection />
      <AutodromesSection />
      <FleetSection />
      <TariffsSection />
      <TestDriveSection />
      <ReviewsSection />
      <ProcessSection />
      <PromotionsSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
