import React from "react";
import "./TestimonialsSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import avatar from "../../assets/avatar.png";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback:
      "The team provided exceptional service, delivering our project ahead of schedule with top-notch quality. Highly recommended!",
    photo: avatar,
  },
  {
    name: "Jane Smith",
    role: "Founder, CreativeStudio",
    feedback:
      "Their expertise in web development transformed our business. The process was seamless, and the results exceeded expectations.",
    photo: avatar,
  },
  {
    name: "Mark Taylor",
    role: "CTO, InnovateNow",
    feedback:
      "Professional, responsive, and innovative. They brought our ideas to life with stunning visuals and flawless functionality.",
    photo: avatar,
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
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={testimonial.photo} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.role}</h4>
              <p>{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
