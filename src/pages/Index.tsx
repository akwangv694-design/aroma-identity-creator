import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import StorySection from "@/components/landing/StorySection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import VariantsSection from "@/components/landing/VariantsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import HowToUseSection from "@/components/landing/HowToUseSection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="tentang">
          <StorySection />
        </section>
        <BenefitsSection />
        <section id="koleksi">
          <VariantsSection />
        </section>
        <section id="testimoni">
          <TestimonialsSection />
        </section>
        <HowToUseSection />
        <section id="harga">
          <PricingSection />
        </section>
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
