import React from "react";
import CountUp from "react-countup";

const SustainabilityNumbers = () => {
  return (
    <section className="sn-section">
      <div className="sn-container">

        <h2 className="sn-title">Sustainability by the Numbers</h2>

        <div className="sn-stats">

          <div className="sn-item">
            <h3>
              <CountUp end={40} duration={2} suffix="%" />
            </h3>
            <p>Reduction in Carbon Emissions</p>
          </div>

          <div className="sn-divider"></div>

          <div className="sn-item">
            <h3>
              <CountUp end={10} duration={2} suffix="M+" />
            </h3>
            <p>Reduction in Carbon Emissions</p>
          </div>

          <div className="sn-divider"></div>

          <div className="sn-item">
            <h3>
              <CountUp end={50} duration={2} suffix="K+" />
            </h3>
            <p>Reduction in Carbon Emissions</p>
          </div>

          <div className="sn-divider"></div>

          <div className="sn-item">
            <h3>
              <CountUp end={100} duration={2} suffix="%" />
            </h3>
            <p>Reduction in Carbon Emissions</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SustainabilityNumbers;
