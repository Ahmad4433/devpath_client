import React from 'react';
import './WorkflowSection.css';
import { motion } from 'framer-motion';
import { DesignServices, AssignmentTurnedIn, Build, RocketLaunch } from '@mui/icons-material';

const steps = [
  {
    title: 'Step 1: Consultation',
    description: 'We start by understanding your requirements and goals.',
    icon: <DesignServices fontSize="large" style={{ color: '#1976d2' }} />,
  },
  {
    title: 'Step 2: Planning',
    description: 'We create a strategic plan to ensure smooth execution.',
    icon: <AssignmentTurnedIn fontSize="large" style={{ color: '#1976d2' }} />,
  },
  {
    title: 'Step 3: Development',
    description: 'Our team builds and implements the solution tailored to your needs.',
    icon: <Build fontSize="large" style={{ color: '#1976d2' }} />,
  },
  {
    title: 'Step 4: Launch & Support',
    description: 'We deliver, launch, and provide ongoing support.',
    icon: <RocketLaunch fontSize="large" style={{ color: '#1976d2' }} />,
  },
];

const WorkflowSection = () => {
  return (
    <section className="workflow-section">
      <div className="workflow-header">
        <h2>Our Workflow</h2>
        <p>Here’s how we ensure successful project delivery every time.</p>
      </div>
      <div className="workflow-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`workflow-step ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="workflow-icon">{step.icon}</div>
            <div className="workflow-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowSection;
