import React from "react";
import ServicesPage from "./ServicesHero";
import WorkflowSection from "./WorkflowSection";
import PricingSection from "../home/PricingSection";
import CaseStudiesSection from "./CaseStudiesSection";
import TrustSection from "./TrustSection";
import FAQSection from "../home/FAQSection";
const Services = () => {
  return (
    <div style={{ marginTop: "73px", overflowX: "hidden" }}>
      <ServicesPage />
      <WorkflowSection />
      <TrustSection />
      <PricingSection />
      <CaseStudiesSection />
      <FAQSection />
    </div>
  );
};

export default Services;
