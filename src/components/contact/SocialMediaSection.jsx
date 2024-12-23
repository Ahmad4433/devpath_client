import React from 'react';
import './SocialMediaSection.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
  ];

const SocialMediaSection = () => {
  return (
    <section className="social-media-section">
      <h2>Connect with Us</h2>
      <p>Follow us on social media for updates and insights.</p>
      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaSection;
