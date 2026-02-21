import React from "react";

const timelineData = [
  {
    year: "2015",
    title: "Initial Solar Installation",
  },
  {
    year: "2020",
    title:
      "Elimination of Single Use Plastics in Manufacturing",
  },
  {
    year: "2024",
    title: "Launch of Integrated Bio-Fuel Project",
  },
  {
    year: "2030",
    title: "Full Carbon Neutrality (Goal)",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="jt-section">
      <div className="jt-container">

        {/* Header */}
        <div className="jt-header">
          <div className="jt-left">
            <span className="jt-subtitle">Our Roadmap</span>
            <h2 className="jt-title">The Journey to 2030</h2>
          </div>

          <div className="jt-right">
            <p>
              Measurable environmental impact driving India's
              transition to clean energy.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="jt-timeline">

          <div className="jt-line"></div>

          <div className="jt-items">
            {timelineData.map((item, index) => (
              <div className="jt-item" key={index}>
                <div className="jt-dot"></div>
                <h3 className="jt-year">{item.year}</h3>
                <p className="jt-text">{item.title}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default JourneyTimeline;
