import React from "react";
import ContactPage from "./ContactUs";
import SocialMediaSection from "./SocialMediaSection";
import FAQSection from "../home/FAQSection";
import useGeneralHooks from "../../hooks/useGeneralHooks";
import useScroll from "../../hooks/useScroll";
const Contact = () => {
  const { ui } = useGeneralHooks();
  useScroll();
  return (
    <div style={{ marginTop: ui.headerHeight + "px", overflowX: "hidden" }}>
      <ContactPage />
      {/* <SocialMediaSection /> */}
      <FAQSection />
    </div>
  );
};

export default Contact;
