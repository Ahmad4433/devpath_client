import React from "react";
import "./BlogPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogData } from "../../utils/blogs";

const BlogPage = () => {
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
              <Link to={`/blog/detail?id=${blog.id}`} className="read-more">
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
