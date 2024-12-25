import React, { useEffect, useState } from "react";
import "./SingleBlog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogData } from "../../utils/blogs";
import useScroll from "../../hooks/useScroll";
import useGeneralHooks from "../../hooks/useGeneralHooks";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Share } from "@mui/icons-material";

const SingleBlog = () => {
  useScroll();
  const { ui } = useGeneralHooks();
  const [findedBlog, setFindedBlog] = useState({});
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    const blog = blogData[id - 1];
    setFindedBlog(blog);
  }, [id]);

  const handleShare = () => {
    const blogUrl = `${window.location.origin}/blog/detail?id=${id}`;
    if (navigator.share) {
      navigator
        .share({
          title: findedBlog?.title,
          text: "Check out this blog:",
          url: blogUrl,
        })
        .then(() => console.log("Blog shared successfully"))
        .catch((error) => console.error("Error sharing blog:", error));
    } else {
      navigator.clipboard
        .writeText(blogUrl)
        .then(() => alert("Blog URL copied to clipboard!"))
        .catch((error) =>
          console.error("Error copying blog URL to clipboard:", error)
        );
    }
  };

  return (
    <div style={{ marginTop: ui.headerHeight + "px" }} className="single-blog">
      <header className="single-blog-header">
        <h1>{findedBlog?.title}</h1>
        <p>
          Published on {findedBlog?.publishDate} by{" "}
          <strong>{findedBlog?.author}</strong>
        </p>
      </header>

      {/* Image Carousel */}
      {findedBlog?.images && findedBlog?.images.length > 0 && (
        <div className="image-carousel">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="swiper-container"
          >
            {findedBlog?.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Blog Content */}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: findedBlog?.content }}
      ></div>

      {/* Share This Blog Section */}
      <div className="share-blog">
        <button className="share-button" onClick={handleShare}>
          <Share className="share-icon" />
          Share This Blog
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
