import React from "react";
import "./CTASection.css";
import { motion } from "framer-motion";
import { whatsappLink2 } from "../whatsapp/Whatsapp";

const CTASection = () => {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Start Your Project?</h2>
        <p>
          Let’s turn your ideas into reality. Get in touch with us to discuss
          your next big project.
        </p>
        <button onClick={whatsappLink2} className="cta-button">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
};

export default CTASection;
