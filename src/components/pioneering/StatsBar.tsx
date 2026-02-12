import React from "react";
import "./statsBar.css";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "200 KLPD", label: "Ethanol Production Capacity" },
  { value: "45 MW", label: "Green Energy Cogeneration" },
  { value: "100%", label: "Zero Liquid Discharge" },
  { value: "25+", label: "Years of Excellence" },
];

const StatsBar: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`stat-item ${
              index !== stats.length - 1 ? "with-border" : ""
            }`}
          >
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
