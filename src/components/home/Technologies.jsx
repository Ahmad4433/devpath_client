import React from "react";
import "./TechnologiesSection.css";
import { motion } from "framer-motion"; // For animations

const TechnologiesSection = () => {
  const technologies = [
    { name: "MongoDB", emoji: "🍃", description: "NoSQL database for scalable and high-performance applications." },
    { name: "Express.js", emoji: "🚀", description: "Fast and minimalist web framework for Node.js." },
    { name: "React.js", emoji: "⚛️", description: "A popular library for building user interfaces." },
    { name: "Node.js", emoji: "🟢", description: "A runtime environment for server-side JavaScript." },
    { name: "Bootstrap", emoji: "🎨", description: "A UI library for fast, responsive design." },
    { name: "React Router", emoji: "🔀", description: "Declarative routing for React applications." },
    { name: "Material-UI", emoji: "📦", description: "React components for faster and easier web development." },
    { name: "React Native", emoji: "📱", description: "Build mobile applications with React." },
  ];

  return (
    <div className="technologies-section">
      <div className="technologies-header">
        <h2>Technologies We Use</h2>
        <p>
          We leverage cutting-edge tools and technologies to deliver high-quality web and mobile applications.
        </p>
      </div>
      <div className="technologies-content">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="technology-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="emoji-container">{tech.emoji}</div>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesSection;
