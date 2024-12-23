import React from 'react';
import './ContactPage.css';
import { motion } from 'framer-motion';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Contact Us</h1>
          <p>We’re here to help you with your questions or project inquiries. Let’s get in touch!</p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Send Us a Message</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </motion.form>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details-section">
        <motion.div
          className="contact-details"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get in Touch</h2>
          <div className="details">
            <div className="detail-item">
              <Phone /> <p>+123 456 7890</p>
            </div>
            <div className="detail-item">
              <Email /> <p>support@example.com</p>
            </div>
            <div className="detail-item">
              <LocationOn /> <p>123 Business Avenue, New York, USA</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
