import React from "react";
import BlogPage from "./Bogs";
import useScroll from "../../hooks/useScroll";
import useGeneralHooks from "../../hooks/useGeneralHooks";
const Blog = () => {
  const { ui } = useGeneralHooks();
  useScroll()
  return (
    <div style={{ marginTop: ui.headerHeight + "px" }}>
      <BlogPage />
    </div>
  );
};

export default Blog;
