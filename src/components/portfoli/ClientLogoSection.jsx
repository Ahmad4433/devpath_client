import React from "react";
import "./ClientLogosSection.css";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";

const clientLogos = [
  { name: "Company A", logo: avatar },
  { name: "Company B", logo: avatar },
  { name: "Company C", logo: avatar },
  { name: "Company D", logo: avatar },
  { name: "Company E", logo: avatar },
  { name: "Company F", logo: avatar },
];

const ClientLogosSection = () => {
  return (
    <section className="client-logos-section">
      <div className="client-logos-header">
        <h2>Trusted by Industry Leaders</h2>
        <p>
          Our clients include some of the most reputable organizations in their
          industries.
        </p>
      </div>
      <div className="client-logos-grid">
        {clientLogos.map((client, index) => (
          <motion.div
            key={index}
            className="client-logo-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={client.logo} alt={client.name} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogosSection;
