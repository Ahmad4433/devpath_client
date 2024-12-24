import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Services from "./components/services/Services";
import Portfolio from "./components/portfoli/Portfolio";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import SingleBlog from "./components/blog/SigleBlog";
import useAnalytics from "./hooks/useAnalytics";
const App = () => {
  useAnalytics();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/detail" element={<SingleBlog />} />
      </Route>
    </Routes>
  );
};

export default App;
