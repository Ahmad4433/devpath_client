import React from "react";
import PortfolioPage from "./Projects";
import CTASection from "./CTASection";
import TestimonialsSection from "../home/TestimonialsSection";
import ProcessSection from "./ProcessSection";
import ClientLogosSection from "./ClientLogoSection";
const Portfolio = () => {
  return (
    <div style={{ marginTop: "73px", overflowX: "hidden" }}>
      <PortfolioPage />
      <CTASection />
      <TestimonialsSection />
      <ProcessSection />
      <ClientLogosSection />
    </div>
  );
};

export default Portfolio;
