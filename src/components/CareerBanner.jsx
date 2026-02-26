import React from "react";
import careerImg from "../assets/images/cta-bg.png"; // replace later

const CareerBanner = () => {
  return (
    <section className="career-banner">
      <div className="career-banner-inner">

        {/* Image Side */}
        <div className="career-banner-image">
          <img src={careerImg} alt="Career at Shreyas Sortex" />
        </div>

        {/* Content Overlay */}
        <div className="career-banner-content">
          <h2>Build Your Career with Shreyas Sortex</h2>
          <p>
            Be part of a fast-growing global rice enterprise driven
            by quality and innovation.
          </p>
          <a href="/our-journey">
            <button className="career-banner-btn">
              Join the Team
            </button>
          </a>

        </div>

      </div>
    </section>
  );
};

export default CareerBanner;
