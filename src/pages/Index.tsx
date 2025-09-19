import HeaderBanner from "@/components/HeaderBanner";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/whatsapp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeaderBanner />
      <HeroSection />
      <ServicesSection />
      <CTASection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
