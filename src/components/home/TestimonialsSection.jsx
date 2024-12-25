import React from "react";
import "./TestimonialsSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Rating } from "@mui/material";
import client from "../../assets/client2.jpg";
import client2 from "../../assets/client3.jpg";
import client3 from "../../assets/client4.jpg";
import client4 from "../../assets/client5.png";
import client5 from "../../assets/client6.png";
import client6 from "../../assets/client7.jpg";
import client8 from "../../assets/client8.jpg";
import client9 from "../../assets/client9.jpg";
import client10 from "../../assets/client10.jpg";
import client11 from "../../assets/client11.jpg";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp (USA)",
    feedback:
      "The team provided exceptional service, delivering our project ahead of schedule with top-notch quality. Highly recommended!",
    photo: client2,
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    role: "Managing Director, Innovate Solutions (Dubai)",
    feedback:
      "Their expertise and dedication ensured the success of our project. A truly outstanding experience working with them.",
    photo: client,
    rating: 4.5,
  },
  {
    name: "Amar Gupta",
    role: "Founder, GuptaTech (India)",
    feedback:
      "They delivered a highly efficient solution for our needs. The team is reliable, knowledgeable, and professional.",
    photo: client4,
    rating: 4,
  },
  {
    name: "Fatima Al-Zahra",
    role: "CFO, Riyadh Enterprises (Saudi Arabia)",
    feedback:
      "Their attention to detail and commitment to quality impressed us. We couldn’t be happier with the results.",
    photo: client5,
    rating: 5,
  },
  {
    name: "Jessica Brown",
    role: "Creative Head, PixelPro (UK)",
    feedback:
      "A seamless process from start to finish. Their ability to bring our vision to life was truly remarkable.",
    photo: client6,
    rating: 4.8,
  },
  {
    name: "Mohammed Faisal",
    role: "Tech Lead, Emirati Tech Solutions (Dubai)",
    feedback:
      "Top-notch service and an excellent final product. Highly recommend them for any web development project.",
    photo: client9,
    rating: 4.7,
  },
  {
    name: "Emily Carter",
    role: "COO, NextGen Innovations (USA)",
    feedback:
      "An amazing team with incredible talent. They exceeded all of our expectations in terms of design and functionality.",
    photo: client8,
    rating: 5,
  },
  {
    name: "Adil Sheikh",
    role: "CTO, Future Vision Pvt Ltd (India)",
    feedback:
      "They provided us with innovative solutions that greatly enhanced our business. Highly professional and dedicated.",
    photo: client10,
    rating: 4.6,
  },
  {
    name: "Noor Bint Khalid",
    role: "Founder, Khalid Group (Saudi Arabia)",
    feedback:
      "A pleasure to work with. They understood our requirements perfectly and delivered beyond our expectations.",
    photo: client11,
    rating: 4.9,
  },
  {
    name: "Thomas Green",
    role: "CEO, GreenTech Solutions (UK)",
    feedback:
      "Their approach to web development is truly cutting-edge. We’re incredibly satisfied with their work.",
    photo: client3,
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>See how we’ve helped businesses achieve their goals.</p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={testimonial.photo} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.role}</h4>
              <p>{testimonial.feedback}</p>
              <Rating
                name={`rating-${index}`}
                value={testimonial.rating}
                precision={0.1}
                readOnly
                size="small"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
