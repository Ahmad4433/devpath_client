import React from "react";
import "./WhatsAppButton.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import MUI WhatsApp icon

const WhatsAppButton = () => {
  const whatsappLink = () => {
    whatsappLink2();
  };

  return (
    <button className="whatsapp-button" onClick={whatsappLink}>
      <WhatsAppIcon style={{ fontSize: "24px" }} />
    </button>
  );
};

export default WhatsAppButton;

export function whatsappLink2() {
  const phone = "+923211963933"; // Replace with your WhatsApp number
  const message = encodeURIComponent(
    "Hi, I’m interested in your web development services. Can you please provide more details about your offerings?"
  );
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
