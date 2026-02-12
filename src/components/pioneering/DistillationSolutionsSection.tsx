import React from "react";
import "./distillationSolutions.css";

interface SolutionItem {
  badge: string;
  badgeColor: "yellow" | "orange";
  title: string;
  description: string;
  icon: string;
}

const solutions: SolutionItem[] = [
  {
    badge: "99.9% Purity",
    badgeColor: "yellow",
    title: "Ethanol Production",
    description:
      "Fuel-grade ethanol meeting the highest standards for government blending programs. Our multi-pressure vacuum distillation ensures exceptional purity.",
    icon: "🏭",
  },
  {
    badge: "Industrial Grade",
    badgeColor: "yellow",
    title: "Extra Neutral Alcohol (ENA)",
    description:
      "High-purity alcohol base for industrial applications and premium beverage production. Crafted with precision distillation techniques.",
    icon: "🧪",
  },
  {
    badge: "45 MW Capacity",
    badgeColor: "orange",
    title: "Cogeneration Power",
    description:
      "Surplus green energy supplied directly to the grid. Our biomass-powered cogeneration plants contribute to national renewable energy goals.",
    icon: "⚡",
  },
  {
    badge: "Sustainable Byproduct",
    badgeColor: "yellow",
    title: "DDGS (Animal Feed)",
    description:
      "Distillers Dried Grains with Solubles - a high-protein, sustainable byproduct perfect for animal nutrition and feed applications.",
    icon: "🌾",
  },
];

const DistillationSolutionsSection: React.FC = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-container">
        {/* HEADER */}
        <div className="solutions-header">
          <div className="header-left">
            <p className="solutions-subtitle">Products & Services</p>
            <h2 className="solutions-title">
              Comprehensive Distillation Solutions
            </h2>
          </div>

          <div className="header-right">
            <p>
              From fuel-grade ethanol to sustainable animal feed, our
              integrated approach delivers value at every stage of the
              production cycle.
            </p>
          </div>
        </div>

        {/* CARD GRID */}
        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div key={index} className="solution-card">
              <div className="card-icon">{item.icon}</div>

              <div className="card-content">
                <span className={`badge ${item.badgeColor}`}>
                  {item.badge}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a href="#" className="learn-more">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistillationSolutionsSection;
