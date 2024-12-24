import React from "react";
import "./ServicePage.css";
import { motion } from "framer-motion";
import { Code, DesignServices, Support, Analytics } from "@mui/icons-material";
import ServicesSection from "../home/Servicesection";
import { whatsappLink2 } from "../whatsapp/Whatsapp";
const services = [
  {
    title: "Web Development",
    description:
      "Build responsive and high-performing websites tailored to your needs.",
    icon: <Code fontSize="large" style={{ color: "#1976d2" }} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Create user-friendly and visually appealing designs for your applications.",
    icon: <DesignServices fontSize="large" style={{ color: "#1976d2" }} />,
  },
  {
    title: "Technical Support",
    description:
      "24/7 support to ensure smooth operation and maintenance of your systems.",
    icon: <Support fontSize="large" style={{ color: "#1976d2" }} />,
  },
  {
    title: "SEO & Analytics",
    description:
      "Boost your online visibility and gain insights to grow your business.",
    icon: <Analytics fontSize="large" style={{ color: "#1976d2" }} />,
  },
];

const ServicesPage = () => {
  return (
    <div  className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Services</h1>
          <p>
            Explore the wide range of professional services we offer to help
            your business grow.
          </p>
        </motion.div>
      </section>

      {/* Services Overview */}
      {/* <section className="services-overview">
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section> */}
      <ServicesSection />

      {/* Call-to-Action */}
      <section className="services-cta">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Contact us today to discuss your project and take the first step
            toward success.
          </p>
          <button onClick={whatsappLink2} className="cta-button">
            Get Started
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesPage;
