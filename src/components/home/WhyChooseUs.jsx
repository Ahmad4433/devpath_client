import React from 'react';
import './WhyChooseUs.css';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Expert Team',
    description: 'Our team consists of experienced professionals committed to delivering quality.',
    icon: '👩‍💻',
  },
  {
    title: 'Customer Focused',
    description: 'We prioritize client satisfaction and tailor solutions to their needs.',
    icon: '🤝',
  },
  {
    title: 'Innovative Solutions',
    description: 'We leverage the latest technologies to create cutting-edge solutions.',
    icon: '💡',
  },
  {
    title: 'Timely Delivery',
    description: 'We ensure every project is delivered on time without compromising quality.',
    icon: '⏱️',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <motion.div
        className="why-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Why Choose Us?</h2>
        <p>Discover what makes us stand out from the competition.</p>
      </motion.div>
      <div className="why-grid">
        {features.map((feature, index) => (
          <motion.div
            className="why-card"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="why-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
