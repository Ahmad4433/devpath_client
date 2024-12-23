import React from "react";
import "./PortfolioPage.css";
import { motion } from "framer-motion";
import ecom from "../../assets/ecom.webp";
import portfolio from "../../assets/portfolio.jpg";
import dashboard from "../../assets/dashboard.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Developed a scalable e-commerce platform with real-time search and secure payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    features: [
      "User authentication",
      "Dynamic product filtering",
      "Integrated payment gateway",
    ],
    image: ecom,
  },
  {
    title: "Creative Portfolio",
    description:
      "Designed a visually stunning and user-friendly portfolio for a creative agency.",
    technologies: ["Next.js", "Framer Motion", "Material-UI"],
    features: ["Animated transitions", "Responsive design", "SEO optimized"],
    image: portfolio,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Built a custom analytics dashboard to track KPIs and generate actionable insights.",
    technologies: ["React", "Redux", "Chart.js", "Firebase"],
    features: [
      "Real-time data visualization",
      "Customizable widgets",
      "User role management",
    ],
    image: dashboard,
  },
];

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Portfolio</h1>
          <p>
            Explore our successful projects and the technologies that made them
            possible.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-projects">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <h4>Technologies Used:</h4>
              <ul className="technologies-list">
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <h4>Key Features:</h4>
              <ul className="features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage;
