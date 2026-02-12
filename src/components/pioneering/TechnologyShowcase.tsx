import React from "react";
import "./technologyShowcase.css";

const TechnologyShowcase: React.FC = () => {
  return (
    <section className="tech-section">
      <div className="tech-container">

        {/* HEADER */}
        <div className="tech-header">
          <div className="tech-left">
            <p className="tech-subtitle">Manufacturing Excellence</p>
            <h2 className="tech-title">Technology Showcase</h2>
          </div>

          <div className="tech-right">
            <p>
              Explore our cutting-edge facilities and learn about the advanced
              technologies that power our sustainable operations.
            </p>
          </div>
        </div>

        {/* SCHEMATIC BOARD */}
        <div className="tech-board">

          <div className="board-title">
            <h3>Interactive Plant Schematic</h3>
            <p>Click on the hotspots to explore our technology</p>
          </div>

          {/* HOTSPOTS */}
          <div className="hotspot hotspot-left">🧪</div>
          <div className="hotspot hotspot-top">⚙</div>
          <div className="hotspot hotspot-right">♻</div>
          <div className="hotspot hotspot-center active">🏭</div>

          {/* INFO CARD */}
          <div className="info-card">
            <h4>Multi-Pressure Distillation</h4>
            <p>
              State-of-the-art multi-column distillation with vacuum technology
              achieving 99.9% purity levels.
            </p>
          </div>

        </div>

        {/* CERTIFICATIONS */}
        <div className="certifications">
          <div className="cert-pill">🛡 ISO 9001:2015</div>
          <div className="cert-pill">🌿 ISO 14001:2018</div>
          <div className="cert-pill">🏅 OHSAS 18001</div>
          <div className="cert-pill">✔ ZLD Certified</div>
        </div>

      </div>
    </section>
  );
};

export default TechnologyShowcase;
