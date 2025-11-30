import CTASection from "@/components/Layouts/Home/CallToAction";
import FAQSection from "@/components/Layouts/Home/FaqSection";
import FeaturesSection from "@/components/Layouts/Home/FeaturesSection";
import Footer from "@/components/Layouts/Home/Footer";
import HeroSection from "@/components/Layouts/Home/HeroSection";
import HowItWorksSection from "@/components/Layouts/Home/HowItWorks";
import PricingSection from "@/components/Layouts/Home/PricingSection";
import ProblemCatalogSection from "@/components/Layouts/Home/ProblemCatelog";
import TestimonialsSection from "@/components/Layouts/Home/Testimonials";
import TrustedStats from "@/components/Layouts/Home/TrustedStats";
import WhyChooseSection from "@/components/Layouts/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <TrustedStats />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <ProblemCatalogSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
