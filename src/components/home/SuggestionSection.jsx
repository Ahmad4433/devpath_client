import React from 'react';
import './SuggestionSection.css';
import { motion } from 'framer-motion';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const SuggestionSection = () => {
  return (
    <section className="suggestion-section">
      <motion.div
        className="suggestion-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>We Value Your Suggestions</h2>
        <p>Your feedback helps us improve and serve you better. Let us know your thoughts!</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="suggestion">Your Suggestion</label>
            <textarea id="suggestion" placeholder="Enter your suggestion" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit Suggestion</button>
        </form>
      </motion.div>
      <motion.div
        className="suggestion-icon"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FeedbackOutlinedIcon style={{ fontSize: '150px', color: '#1976d2' }} />
      </motion.div>
    </section>
  );
};

export default SuggestionSection;
