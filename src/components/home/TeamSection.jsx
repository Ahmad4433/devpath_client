import React from "react";
import "./TeamSection.css";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar.png";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    description: "Visionary leader with a passion for innovation and growth.",
    image: avatar,
  },
  {
    name: "Jane Smith",
    role: "Chief Designer",
    description:
      "Creative genius turning ideas into visually stunning designs.",
    image: avatar,
  },
  {
    name: "Mike Taylor",
    role: "Lead Developer",
    description: "Expert in crafting scalable and efficient solutions.",
    image: avatar,
  },
  {
    name: "Sara Lee",
    role: "Marketing Head",
    description: "Strategic thinker driving brand growth and visibility.",
    image: avatar,
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Meet Our Team</h2>
        <p>Get to know the experts who make it all happen.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
