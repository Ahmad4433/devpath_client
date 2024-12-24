import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import heroImg from "../../assets/hero.png";
import useGeneralHooks from "../../hooks/useGeneralHooks";
const HeroSectionModern = () => {
  const startedHandler = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: windowHeight,
      behavior: "smooth",
    });
  };

  const { navigate } = useGeneralHooks();
  return (
    <div className="hero-modern">
      <div className="hero-modern-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Build Your Future with Cutting-Edge Web Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Empower your business with customized web development, seamless user
          experiences, and innovative digital strategies.
        </motion.p>
        <motion.div
          className="hero-modern-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button onClick={startedHandler} className="cta-primary">
            Get Started
          </button>
          <button
            onClick={() => navigate("/portfolio")}
            className="cta-secondary"
          >
            Our Portfolio
          </button>
        </motion.div>
      </div>
      <motion.div
        className="hero-modern-image"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <img src={heroImg} alt="Hero Illustration" />
      </motion.div>
    </div>
  );
};

export default HeroSectionModern;
