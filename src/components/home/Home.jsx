import React from "react";
import HeroSection from "./Hero";
import ServicesSection from "./Servicesection";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSection from "./TestimonialsSection";
import PortfolioSection from "./PortfolioSection";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";
import TeamSection from "./TeamSection";
import PricingSection from "./PricingSection";
import SuggestionSection from "./SuggestionSection";
import useScroll from "../../hooks/useScroll";

const Home = () => {
  useScroll();

  return (
    <div style={{ marginTop: "43px" }}>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <FAQSection />
      <TestimonialsSection />
      <PortfolioSection />
      <CTASection />
      <PricingSection />
      <TeamSection />
      <SuggestionSection />
    </div>
  );
};

export default Home;
