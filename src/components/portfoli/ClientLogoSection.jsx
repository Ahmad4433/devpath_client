import React from "react";
import "./ClientLogosSection.css";
import { motion } from "framer-motion";
import logo1 from "../../assets/pngwing.com (17).png";
import logo2 from "../../assets/pngwing.com (18).png";
import logo3 from "../../assets/pngwing.com (19).png";
import logo4 from "../../assets/pngwing.com (20).png";
import logo5 from "../../assets/pngwing.com (21).png";
import logo6 from "../../assets/pngwing.com (22).png";
import avatar from "../../assets/avatar.png";

const clientLogos = [
  { name: "Company A", logo: logo1 },
  { name: "Company B", logo: logo2 },
  { name: "Company C", logo: logo3 },
  { name: "Company D", logo: logo4 },
  { name: "Company E", logo: logo5 },
  { name: "Company F", logo: logo6 },
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
