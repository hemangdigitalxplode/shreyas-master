import React from "react";

const EnergyEfficientMachinery = () => {
  return (
    <section className="eem-section">
      <div className="eem-container">
        {/* Header */}
        <div className="eem-header">
          <h1 className="eem-title">Energy-Efficient Machinery</h1>
          <p className="eem-subtitle">
            Upgrading the industrial core to minimize power wastage across all production lines.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="eem-cards-wrapper">
          {/* Left Card */}
          <div className="eem-card">
            <div className="eem-icon-box">
              ☀
            </div>

            <h3 className="eem-card-title">Grade A Equipment</h3>
            <p className="eem-card-description">
              A showcase of the transition to the highest energy-rated processing machinery.
            </p>

            <div className="eem-tags">
              <span className="eem-tag">A+++</span>
              <span className="eem-tag">ISO 50001</span>
              <span className="eem-tag">Smart Grid</span>
            </div>
          </div>

          {/* Right Card */}
          <div className="eem-card">
            <div className="eem-card-top">
              <div className="eem-icon-box">
                ☀
              </div>
              <div>
                <h4 className="eem-mini-title">SPM</h4>
                <span className="eem-status">Active</span>
              </div>
            </div>

            <h3 className="eem-card-title">Efficiency Audits</h3>

            <p className="eem-card-description">
              Online Monitoring of boiler efficiency through SPM
            </p>

            <div className="eem-tags">
              <span className="eem-tag">Online Monitoring</span>
              <span className="eem-tag">Less than PM 2.5</span>
              <span className="eem-tag">ML Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyEfficientMachinery;
