import React from "react";
import "./wasteToWealth.css";

const WasteToWealthSection: React.FC = () => {
  return (
    <section className="waste-section">
      <div className="waste-container">

        {/* LEFT SIDE */}
        <div className="waste-left">
          <p className="waste-subtitle">
            Sustainability & Circular Economy
          </p>

          <h2 className="waste-title">
            Waste-to-Wealth Journey
          </h2>

          <p className="waste-description">
            Our commitment to sustainability goes beyond compliance. We've
            built a truly circular economy where every byproduct finds
            purpose, and waste is transformed into valuable resources.
          </p>

          <ul className="waste-list">
            <li>
              <span>✔</span>
              <div>
                <strong>Zero Liquid Discharge</strong>
                <p>
                  100% wastewater treatment and recycling with no discharge
                  to natural water bodies.
                </p>
              </div>
            </li>

            <li>
              <span>✔</span>
              <div>
                <strong>Carbon Sequestration</strong>
                <p>
                  Active tree plantation programs offsetting our carbon footprint.
                </p>
              </div>
            </li>

            <li>
              <span>✔</span>
              <div>
                <strong>Biomass Utilization</strong>
                <p>
                  Agricultural waste converted to energy, reducing dependency
                  on fossil fuels.
                </p>
              </div>
            </li>
          </ul>

          <button className="waste-btn">
            View Sustainability Report
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="waste-right">
          <div className="circle-wrapper">

            <div className="center-circle">
              <h3>Circular</h3>
              <p>Economy</p>
            </div>

            <div className="node node-top">
              <h4>Raw Grain</h4>
              <span>Locally sourced agricultural feedstock</span>
            </div>

            <div className="node node-right">
              <h4>Distillation</h4>
              <span>Energy-efficient processing</span>
            </div>

            <div className="node node-bottom-right">
              <h4>Spent Wash</h4>
              <span>Captured for treatment</span>
            </div>

            <div className="node node-bottom-left">
              <h4>Bio-composting</h4>
              <span>Organic fertilizer production</span>
            </div>

            <div className="node node-left">
              <h4>Field Return</h4>
              <span>Nutrients back to soil</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WasteToWealthSection;
