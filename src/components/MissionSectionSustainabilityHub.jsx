import React from "react";
import bgImage from "../assets/images/bg-lst-sec-ssb.png"; 

const MissionSectionSustainabilityHub = () => {
  return (
    <section
      className="mission-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="mission-content">
        <h2>Join the Mission</h2>
        <p>
          Stay updated on our sustainability progress and be part of the change.
        </p>
        <button className="mission-btn">Subscribe</button>
      </div>
    </section>
  );
};

export default MissionSectionSustainabilityHub;
