import React from 'react';
import './TrustSection.css';
import { motion } from 'framer-motion';
import { TrendingUp, Verified, BarChart } from '@mui/icons-material';

const trustContent = [
  {
    icon: <TrendingUp fontSize="large" style={{ color: '#1976d2' }} />,
    title: 'Unmatched Expertise',
    quote: '"We transform challenges into opportunities, empowering businesses to reach new heights."',
    description: 'Our proven strategies and expert team ensure your business thrives in today’s competitive landscape.',
  },
  {
    icon: <Verified fontSize="large" style={{ color: '#1976d2' }} />,
    title: 'Proven Results',
    quote: '"Trust is built on results. Let us show you what success looks like."',
    description: 'With a track record of successful projects, we bring reliability and excellence to every client.',
  },
  {
    icon: <BarChart fontSize="large" style={{ color: '#1976d2' }} />,
    title: 'Business Growth',
    quote: '"We don’t just meet goals—we exceed them."',
    description: 'Our solutions are tailored to maximize your business potential and drive measurable growth.',
  },
];

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="trust-header">
        <h2>Empowering Your Success</h2>
        <p>Discover why businesses trust us to elevate their performance and achieve outstanding results.</p>
      </div>
      <div className="trust-content">
        {trustContent.map((item, index) => (
          <motion.div
            key={index}
            className={`trust-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="trust-icon">{item.icon}</div>
            <div className="trust-info">
              <h3>{item.title}</h3>
              <blockquote>{item.quote}</blockquote>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
