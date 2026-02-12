import React from "react";
import "./energyNexus.css";
import energyImage from '../../assets/images/energy-image.jpg';


interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: "⚡",
    title: "Energy Integration",
    description:
      "Seamless cogeneration systems that power our operations.",
  },
  {
    icon: "🍃",
    title: "Carbon Neutral",
    description:
      "Minimizing environmental footprint at every step.",
  },
  {
    icon: "🔄",
    title: "Circular Process",
    description:
      "Zero waste philosophy with complete resource utilization.",
  },
];

const EnergyNexusSection: React.FC = () => {
  return (
    <section className="energy-section">
      <div className="energy-container">

        <div className="energy-left">
          <img
            src={energyImage}
            alt="Distillation Facility"
            className="energy-image"
          />

          <div className="experience-badge">
            <h2>25+</h2>
            <span>Years of Excellence</span>
          </div>
        </div>


        <div className="energy-right">
          <p className="energy-subtitle">
            The Energy-Distillation Nexus
          </p>

          <h1 className="energy-title">
            Powering Progress
          </h1>

          <p className="energy-description">
            At Shreyas Distilleries & Energy, we've revolutionized the
            distillation process by seamlessly integrating energy production
            through biofuels and cogeneration directly into our operations.
            This innovative approach dramatically minimizes our carbon
            footprint while maximizing efficiency.
          </p>

          <p className="energy-description">
            Our state-of-the-art facilities combine traditional distillery
            expertise with cutting-edge green energy technology, creating a
            sustainable ecosystem where waste becomes wealth and every
            byproduct finds purpose.
          </p>

          <div className="energy-features">
            {features.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="energy-bottom-line" />
    </section>
  );
};

export default EnergyNexusSection;
