import React, { useState } from "react";
import "./SingleBlog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const SingleBlog = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const blog = {
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
    content: `
      <p>Technology is evolving rapidly, and businesses must adapt to stay competitive. 
      In this article, we'll explore <strong>key strategies</strong> to leverage technology effectively:</p>
      <ul>
        <li>Implement automation tools to streamline operations.</li>
        <li>Invest in cloud computing for scalability.</li>
        <li>Leverage data analytics for informed decision-making.</li>
      </ul>
      <p>By following these steps, businesses can <em>unlock new growth opportunities</em> and remain agile in a changing environment.</p>
    `,
  };

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment]);
      setNewComment("");
    }
  };

  const shareBlog = (platform) => {
    const blogUrl = window.location.href;
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${blogUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`,
    };
    window.open(shareUrls[platform], "_blank");
  };

  return (
    <div className="single-blog">
      <header className="single-blog-header">
        <h1>{blog.title}</h1>
        <p>
          Published on {blog.publishDate} by <strong>{blog.author}</strong>
        </p>
      </header>

      {/* YouTube Video Section */}
      {blog.videoLink && (
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${blog.videoLink}`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Image Carousel */}
      {blog.images && blog.images.length > 0 && (
        <div className="image-carousel">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="swiper-container"
          >
            {blog.images.map((image, index) => (
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
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>

      {/* Social Media and Like Section */}
      <div className="social-share-like">
        <div className="social-share">
          <h4>Share this blog:</h4>
          <button onClick={() => shareBlog("facebook")}>
            <Facebook style={{ color: "#4267B2" }} /> Facebook
          </button>
          <button onClick={() => shareBlog("twitter")}>
            <Twitter style={{ color: "#1DA1F2" }} /> Twitter
          </button>
          <button onClick={() => shareBlog("linkedin")}>
            <LinkedIn style={{ color: "#0077B5" }} /> LinkedIn
          </button>
        </div>
        <div className="like-section">
          <button onClick={handleLike}>👍 Like ({likes})</button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SingleBlog;
