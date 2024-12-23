import React from "react";
import ContactPage from "./ContactUs";
import SocialMediaSection from "./SocialMediaSection";
import FAQSection from "../home/FAQSection";
const Contact = () => {
  return (
    <div style={{ marginTop: "73px" }}>
      <ContactPage />
      {/* <SocialMediaSection /> */}
      <FAQSection />
    </div>
  );
};

export default Contact;
