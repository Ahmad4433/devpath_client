import React from 'react';
import './CTASection.css';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Ready to Transform Your Business?</h2>
        <p>
          Let us help you bring your ideas to life with innovative solutions. Contact us today to get started on your next project!
        </p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get a Quote
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTASection;
