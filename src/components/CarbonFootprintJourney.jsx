import React from "react";

const timelineData = [

  {
    year: "2020",
    title: "Elimination of Single Use Plastics",
    subtitle: "Complete phase-out across all facilities and supply chains.",
  },
  {
    year: "2024",
    title: "Integrated Bio-Fuel Project",
    subtitle: "Launch of our proprietary bio-fuel processing initiative.",
  },
  {
    year: "2030",
    title: "Full Carbon Neutrality",
    subtitle: "Achieving net-zero carbon emissions across all operations.",
  },
];

const CarbonFootprintJourney = () => {
  return (
    <section className="jt-section cfj">
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
                <p className="jt-text-n">{item.subtitle}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CarbonFootprintJourney;
