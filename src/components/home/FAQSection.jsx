import React from 'react';
import './FAQSection.css';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer web development, SEO optimization, e-commerce solutions, and more.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer: 'The timeline depends on the project scope, but we typically deliver within 4-6 weeks.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing is flexible and depends on the project requirements. Contact us for a detailed quote.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer maintenance and support packages to ensure your project runs smoothly.',
  },
];

const FAQSection = () => {
  return (
    <section className="faq-section">
      <div className="faq-header">
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="subtitle1">
          Find answers to common questions about our services and processes.
        </Typography>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <Accordion key={index} TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
