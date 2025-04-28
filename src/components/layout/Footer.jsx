import React from "react";
import "./FooterSection.css";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a dedicated team providing top-notch services to help
            businesses grow and succeed.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {/* <li>
              <Link to="/faq">FAQs</Link>
            </li> */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>pathdev91@gmail.com</p>
          <p>Phone: +92321-1963933</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61566377880916"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a> */}
            <a
              href="https://www.linkedin.com/in/dev-path-74638732b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.instagram.com/idevpath?igsh=N3JpcTdyNWM1cGF5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.youtube.com/@DEVPATH-i8k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DEVPATH. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
