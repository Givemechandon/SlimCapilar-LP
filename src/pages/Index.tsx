import HeaderBanner from "@/components/HeaderBanner";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeaderBanner />
      <HeroSection />
      <ServicesSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
