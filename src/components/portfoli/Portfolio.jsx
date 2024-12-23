import React from "react";
import PortfolioPage from "./Projects";
import CTASection from "./CTASection";
import TestimonialsSection from "../home/TestimonialsSection";
import ProcessSection from "./ProcessSection";
import ClientLogosSection from "./ClientLogoSection";
import useGeneralHooks from "../../hooks/useGeneralHooks";
import useScroll from "../../hooks/useScroll";
const Portfolio = () => {
  const { ui } = useGeneralHooks();
  useScroll()
  return (
    <div style={{ marginTop: ui.headerHeight + "px", overflowX: "hidden" }}>
      <PortfolioPage />
      <CTASection />
      <TestimonialsSection />
      <ProcessSection />
      <ClientLogosSection />
    </div>
  );
};

export default Portfolio;
