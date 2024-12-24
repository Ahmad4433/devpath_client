import React from "react";
import "./PricingSection.css";
import { motion } from "framer-motion";
import { whatsappLink2 } from "../whatsapp/Whatsapp";

const pricingPlans = [
  {
    title: "Basic",
    price: "$29/month",
    features: [
      "Single project",
      "Basic support",
      "5GB storage",
      "Community access",
    ],
    popular: false,
  },
  {
    title: "Standard",
    price: "$59/month",
    features: [
      "Up to 3 projects",
      "Priority support",
      "20GB storage",
      "Advanced analytics",
    ],
    popular: true,
  },
  {
    title: "Premium",
    price: "$99/month",
    features: [
      "Unlimited projects",
      "Dedicated support",
      "50GB storage",
      "Custom solutions",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Our Pricing Plans</h2>
        <p>Choose a plan that fits your needs and budget.</p>
      </div>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <motion.div
            onClick={() => whatsappLink2()}
            key={index}
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button">Choose Plan</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
