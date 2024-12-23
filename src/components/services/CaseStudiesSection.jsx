import React from 'react';
import './CaseStudiesSection.css';
import { motion } from 'framer-motion';
import { Code, DesignServices, TrendingUp } from '@mui/icons-material';

const caseStudies = [
  {
    title: 'E-Commerce Platform',
    client: 'ShopEase',
    description: 'Developed a scalable e-commerce platform with real-time search and secure payment integration.',
    icon: <Code fontSize="large" style={{ color: '#1976d2' }} />,
  },
  {
    title: 'Portfolio Website',
    client: 'Creative Studio',
    description: 'Designed a visually stunning and user-friendly portfolio for a creative agency.',
    icon: <DesignServices fontSize="large" style={{ color: '#1976d2' }} />,
  },
  {
    title: 'Analytics Dashboard',
    client: 'DataMetrics',
    description: 'Built a custom analytics dashboard to track KPIs and generate insights for better decision-making.',
    icon: <TrendingUp fontSize="large" style={{ color: '#1976d2' }} />,
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="case-studies-section">
      <div className="case-studies-header">
        <h2>Case Studies</h2>
        <p>Explore some of the successful projects we’ve delivered for our clients.</p>
      </div>
      <div className="case-studies-content">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            className={`case-study-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="case-study-icon">{caseStudy.icon}</div>
            <div className="case-study-info">
              <h3>{caseStudy.title}</h3>
              <p className="client-name">Client: {caseStudy.client}</p>
              <p>{caseStudy.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
