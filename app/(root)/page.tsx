import CallToActionSection from "@/components/CallToActionSection";
// import Features from "@/components/Features";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection ";
import SecuritySection from "@/components/SecuritySection ";
import TestimonialsSection from "@/components/ui/TestimonialsSection ";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Features /> */}
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}
