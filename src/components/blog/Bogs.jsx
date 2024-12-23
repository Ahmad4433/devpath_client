import React from "react";
import "./BlogPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPage = () => {
  // Sample Blog Data
  const blogData = [
    {
      id: 1,
      title: "How to Grow Your Business with Technology",
      publishDate: "January 10, 2024",
      author: "John Doe",
      videoLink: "dQw4w9WgXcQ", // YouTube Video ID
      images: [
        "https://via.placeholder.com/800x400?text=Image+1",
        "https://via.placeholder.com/800x400?text=Image+2",
        "https://via.placeholder.com/800x400?text=Image+3",
      ],
      content:
        "In this blog, we’ll explore how leveraging technology can help businesses scale faster and more efficiently...",
      tags: ["Technology", "Business Growth", "Innovation"],
    },
    {
      id: 2,
      title: "Top 5 Tech Trends in 2024",
      publishDate: "February 20, 2024",
      author: "Jane Smith",
      videoLink: null,
      images: [
        "https://via.placeholder.com/800x400?text=Image+1",
        "https://via.placeholder.com/800x400?text=Image+2",
      ],
      content:
        "Discover the top 5 technology trends that are set to revolutionize industries in 2024...",
      tags: ["Tech Trends", "Innovation"],
    },
  ];

  return (
    <div className="blog-page">
      <section className="services-hero">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Blog</h1>
          <p>Explore insights, tips, and stories from our experts.</p>
        </motion.div>
      </section>

      <div className="blog-grid">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-thumbnail">
              <img
                src={
                  blog.images[0] ||
                  "https://via.placeholder.com/800x400?text=No+Image"
                }
                alt={blog.title}
              />
            </div>
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <p>{blog.content.slice(0, 100)}...</p>
              <Link to={`/blog/detail`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
