import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DashboardSection from "@/components/DashboardSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ROICalculator from "@/components/ROICalculator";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DashboardSection />
    <FeaturesSection />
    <WhyChooseSection />
    <ROICalculator />
    <PricingSection />
    <TestimonialsSection />
    <LeadershipSection />
    <ContactSection />
    <FooterCTA />
  </div>
);

export default Index;
