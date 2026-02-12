import React from "react";
import "./heroSection.css";

const pioneeringSection: React.FC = () => {
  return (
    <section className="pioneering-section">
      <div className="pioneering-overlay"></div>

      <div className="pioneering-container">
        <div className="pioneering-content">
          <p className="pioneering-subtitle">
            Pioneering Sustainable Distillation
          </p>

          <h1 className="pioneering-title">
            Fueling the Future <br />
            Through Sustainable <br />
            Distillation
          </h1>

          <p className="pioneering-description">
            Leading the transition to renewable energy and high-grade ethanol
            production through innovative engineering and environmental
            stewardship.
          </p>

          <button className="pioneering-btn">
            Download Corporate Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default pioneeringSection;
