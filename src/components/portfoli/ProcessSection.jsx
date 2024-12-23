import React from 'react';
import './ProcessSection.css';
import { motion } from 'framer-motion';
import { DesignServices, AssignmentTurnedIn, Build, RocketLaunch } from '@mui/icons-material';

const processSteps = [
  {
    icon: <DesignServices fontSize="large" style={{ color: '#1976d2' }} />,
    title: 'Step 1: Consultation',
    description: 'We start by understanding your goals and gathering all requirements to ensure a successful project.',
  },
  {
    icon: <AssignmentTurnedIn fontSize="large" style={{ color: '#1976d2' }} />,
    title: 'Step 2: Planning',
    description: 'Our team creates a detailed plan outlining timelines, deliverables, and key milestones.',
  },
  {
    icon: <Build fontSize="large" style={{ color: '#1976d2' }} />,
    title: 'Step 3: Development',
    description: 'We bring your vision to life through development, ensuring quality at every stage.',
  },
  {
    icon: <RocketLaunch fontSize="large" style={{ color: '#1976d2' }} />,
    title: 'Step 4: Launch & Support',
    description: 'We deliver the project, ensuring a smooth launch and providing ongoing support.',
  },
];

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-header">
        <h2>Our Proven Workflow</h2>
        <p>Discover how we deliver excellence in every project through our systematic approach.</p>
      </div>
      <div className="process-timeline">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-icon">{step.icon}</div>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
