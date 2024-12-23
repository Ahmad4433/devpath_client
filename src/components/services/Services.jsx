import React from "react";
import ServicesPage from "./ServicesHero";
import WorkflowSection from "./WorkflowSection";
import PricingSection from "../home/PricingSection";
import CaseStudiesSection from "./CaseStudiesSection";
import TrustSection from "./TrustSection";
import FAQSection from "../home/FAQSection";
import useGeneralHooks from "../../hooks/useGeneralHooks";
import useScroll from "../../hooks/useScroll";
const Services = () => {
  const { ui } = useGeneralHooks();
  useScroll();
  return (
    <div style={{ marginTop: ui.headerHeight + "px", overflowX: "hidden" }}>
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
