import React from "react";

const timelineData = [
  {
    year: "2014",
    text: "Energy Efficient Bioler Installation",
    side: "left",
    filled: true,
  },
  {
    year: "2024",
    text: "Biomass boilers operational",
    side: "right",
  },
  {
    year: "2022",
    text: "50% renewable energy achieved",
    side: "left",
  },
  {
    year: "2025",
    text: "Solar energy integration",
    side: "right",
  },
  {
    year: "2026",
    text: "2GW Solar Bess Programe",
    side: "left",
  },
  {
    year: "2030",
    text: "Full Carbon Neutrality",
    side: "right",
  },
];

const PathToHundred = () => {
  return (
    <section className="pth-section">
      <div className="pth-container">

        {/* Heading */}
        <h2 className="pth-heading">The Path to 100%</h2>
        <p className="pth-subtext">
          Transparency in our energy transition tracking every megawatt
          towards our Carbon Neutrality goal.
        </p>

        {/* Progress */}
        <div className="pth-progress-wrapper">
          <div className="pth-progress-left">
            <span className="pth-label">Renewable Energy Conservation</span>
            <h3 className="pth-percentage">73%</h3>
          </div>

          <div className="pth-progress-right">
            <span>Target: 100% by 2030 </span>
            <small>100% Carbon Neutral</small>
          </div>
        </div>

        <div className="pth-progress-bar">
          <div className="pth-progress-fill"></div>
        </div>

        {/* Timeline */}
        <div className="pth-timeline">
          <div className="pth-line"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`pth-timeline-item ${item.side}`}
            >
              <div className="pth-content">
                <h4>{item.year}</h4>
                <p>{item.text}</p>
              </div>

              <div
                className={`pth-dot ${item.filled ? "filled" : ""}`}
              ></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PathToHundred;
