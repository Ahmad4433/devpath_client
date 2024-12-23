import React from 'react';
import './ServicesSection.css';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web apps tailored to your business needs.',
    icon: '🌐',
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your website’s visibility with expert SEO strategies.',
    icon: '🚀',
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience and grow your presence online.',
    icon: '📱',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Powerful online stores to scale your business.',
    icon: '🛒',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Our Services</h2>
        <p>Explore our wide range of professional web and digital solutions.</p>
      </motion.div>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
