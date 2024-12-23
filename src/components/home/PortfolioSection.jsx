import React from 'react';
import './PortfolioSection.css';
import { motion } from 'framer-motion';
import { ShoppingCart, Business, Brush, School } from '@mui/icons-material';

const portfolioItems = [
  {
    title: 'E-Commerce Website',
    description: 'A fully functional e-commerce platform with advanced search and payment integration.',
    icon: <ShoppingCart style={{ fontSize: '5rem', color: '#1976d2' }} />,
  },
  {
    title: 'Corporate Website',
    description: 'A sleek corporate website designed to enhance brand presence.',
    icon: <Business style={{ fontSize: '5rem', color: '#1976d2' }} />,
  },
  {
    title: 'Portfolio Website',
    description: 'A personalized portfolio website showcasing creative work.',
    icon: <Brush style={{ fontSize: '5rem', color: '#1976d2' }} />,
  },
  {
    title: 'Educational Platform',
    description: 'An online learning platform with user-friendly navigation and course management.',
    icon: <School style={{ fontSize: '5rem', color: '#1976d2' }} />,
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section-alt">
      <motion.div
        className="portfolio-header-alt"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Our Portfolio</h2>
        <p>Take a look at some of the innovative projects we’ve brought to life.</p>
      </motion.div>
      <div className="portfolio-grid-alt">
        {portfolioItems.map((item, index) => (
          <motion.div
            className={`portfolio-card-alt ${index % 2 === 0 ? 'wide' : ''}`}
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="portfolio-icon">{item.icon}</div>
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
