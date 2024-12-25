// import React from "react";
// import "./PortfolioPage.css";
// import { motion } from "framer-motion";
// import ecom from "../../assets/ecom.webp";
// import portfolio from "../../assets/portfolio.jpg";
// import dashboard from "../../assets/dashboard.jpg";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description:
//       "Developed a scalable e-commerce platform with real-time search and secure payment integration.",
//     technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
//     features: [
//       "User authentication",
//       "Dynamic product filtering",
//       "Integrated payment gateway",
//     ],
//     image: ecom,
//   },
//   {
//     title: "Creative Portfolio",
//     description:
//       "Designed a visually stunning and user-friendly portfolio for a creative agency.",
//     technologies: ["Next.js", "Framer Motion", "Material-UI"],
//     features: ["Animated transitions", "Responsive design", "SEO optimized"],
//     image: portfolio,
//   },
//   {
//     title: "Analytics Dashboard",
//     description:
//       "Built a custom analytics dashboard to track KPIs and generate actionable insights.",
//     technologies: ["React", "Redux", "Chart.js", "Firebase"],
//     features: [
//       "Real-time data visualization",
//       "Customizable widgets",
//       "User role management",
//     ],
//     image: dashboard,
//   },
// ];

// const PortfolioPage = () => {
//   return (
//     <div className="portfolio-page">
//       {/* Hero Section */}
//       <section className="portfolio-hero">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1>Our Portfolio</h1>
//           <p>
//             Explore our successful projects and the technologies that made them
//             possible.
//           </p>
//         </motion.div>
//       </section>

//       {/* Projects Section */}
//       <section className="portfolio-projects">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="project-card"
//             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="project-image"
//             />
//             <div className="project-details">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <h4>Technologies Used:</h4>
//               <ul className="technologies-list">
//                 {project.technologies.map((tech, idx) => (
//                   <li key={idx}>{tech}</li>
//                 ))}
//               </ul>
//               <h4>Key Features:</h4>
//               <ul className="features-list">
//                 {project.features.map((feature, idx) => (
//                   <li key={idx}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default PortfolioPage;
import { projects } from "../../utils/projects";
import React, { useState } from "react";
import "./PortfolioPage.css";
import { motion } from "framer-motion";
import { Pagination } from "@mui/material";

//     title: "E-Commerce Platform",
//     description:
//       "Developed a scalable e-commerce platform with real-time search and secure payment integration.",
//     technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
//     features: [
//       "User authentication",
//       "Dynamic product filtering",
//       "Integrated payment gateway",
//     ],
//     image: ecom,
//   },
//   {
//     title: "Creative Portfolio",
//     description:
//       "Designed a visually stunning and user-friendly portfolio for a creative agency.",
//     technologies: ["Next.js", "Framer Motion", "Material-UI"],
//     features: ["Animated transitions", "Responsive design", "SEO optimized"],
//     image: portfolio,
//   },
//   {
//     title: "Analytics Dashboard",
//     description:
//       "Built a custom analytics dashboard to track KPIs and generate actionable insights.",
//     technologies: ["React", "Redux", "Chart.js", "Firebase"],
//     features: [
//       "Real-time data visualization",
//       "Customizable widgets",
//       "User role management",
//     ],
//     image: dashboard,
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "Developed a cross-platform mobile app with advanced features and a sleek UI.",
//     technologies: ["React Native", "Expo", "Firebase"],
//     features: ["Push notifications", "Offline mode", "Cross-platform support"],
//     image: ecom,
//   },
//   {
//     title: "Social Media Campaign",
//     description:
//       "Created a highly engaging social media marketing campaign for a leading brand.",
//     technologies: ["Canva", "Hootsuite", "Facebook Ads"],
//     features: ["Audience targeting", "Analytics tracking", "Content creation"],
//     image: portfolio,
//   },
//   {
//     title: "Corporate Website",
//     description:
//       "Designed a modern and responsive website for a multinational company.",
//     technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
//     features: ["Responsive design", "SEO optimized", "Fast loading speed"],
//     image: dashboard,
//   },
//   {
//     title: "Custom CRM System",
//     description:
//       "Developed a custom CRM system tailored to the client’s business processes.",
//     technologies: ["PHP", "MySQL", "Laravel"],
//     features: [
//       "Contact management",
//       "Sales tracking",
//       "Automated email follow-ups",
//     ],
//     image: ecom,
//   },
//   {
//     title: "Educational Platform",
//     description:
//       "Created an e-learning platform for online courses and training sessions.",
//     technologies: ["Moodle", "PHP", "MySQL"],
//     features: ["Interactive quizzes", "Course tracking", "User progress reports"],
//     image: portfolio,
//   },
//   {
//     title: "Real Estate App",
//     description:
//       "Built a mobile app for property listings with location-based search and filtering.",
//     technologies: ["Flutter", "Dart", "Firebase"],
//     features: ["Map integration", "Favorites list", "Chat support"],
//     image: dashboard,
//   },
//   {
//     title: "Social Media Scheduler",
//     description:
//       "Developed a tool to schedule social media posts across multiple platforms.",
//     technologies: ["Node.js", "MongoDB", "React"],
//     features: [
//       "Multi-platform support",
//       "Scheduled posting",
//       "Engagement analytics",
//     ],
//     image: ecom,
//   },
//   // Add more items to the list for up to 20
// ];

const PortfolioPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleChange = (event, value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(value);
  };

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        {paginatedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
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

      {/* Pagination */}
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(projects.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChange}
          color="primary"
          size="large"
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
