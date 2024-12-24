import React from "react";
import "./LocationSection.css";

const LocationSection = () => {
  return (
    <div className="location-section">
      <div className="location-header">
        <h2>Visit Us</h2>
        <p>
          Come and meet us at our office. We’d love to discuss your project
          ideas!
        </p>
      </div>
      <div className="map-container">
        {/* Embed Google Map */}
        <iframe
          title="Devpath Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.9530811031906!2d74.2343509197235!3d31.352099123207807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919ab138fdbcebf%3A0x38eff091b4b49db2!2sDEVPATH!5e0!3m2!1sen!2s!4v1735038164643!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationSection;
