import React from "react";
import productImg from "../assets/images/solar-capacity.png";
import Recyclable from "../assets/images/Recyclable.png";
import SingleUse from "../assets/images/Single-Use.png";
import AllSKUs from "../assets/images/All SKUs.png";

const SolarCapacityPowering = () => {
  return (
    <section className="plastic-section">
      <div className="plastic-container">

        {/* LEFT SIDE */}
        <div className="plastic-left">
          <h2>Solar-Driven Energy Ecosystem
          </h2>
          <p>
            Harnessing solar power as a core renewable energy source, generating clean megawatts across our facilities while optimising performance through real-time energy monitoring systems.
          </p>

          <div className="plastic-cards">

            {/* Row 1 */}
            <div className="plastic-row">
              <div className="icon-box">
                <img className="w-100" src={Recyclable} />
              </div>
              <div className="content-box">
                <span className="card-title">7+ MW</span>
                <span className="card-sub">Installed Renewable Solar Capacity</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="plastic-row">
              <div className="icon-box">
                <img className="w-100" src={SingleUse} />
              </div>
              <div className="content-box">
                <span className="card-title">100%</span>
                <span className="card-sub">
                  Clean Energy Integration
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="plastic-row">
              <div className="icon-box">
                <img className="w-100" src={AllSKUs} />
              </div>
              <div className="content-box">
                <span className="card-title">24/7</span>
                <span className="card-sub">
                  Live Energy Analytics
                </span>
              </div>
            </div>
            {/* Row-4 */}
            <div className="plastic-row">
              <div className="icon-box">
                <img className="w-100" src={AllSKUs} />
              </div>
              <div className="content-box">
                <span className="card-title">Reduced</span>
                <span className="card-sub">
                  Grid Dependence
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="plastic-right">
          <img src={productImg} alt="Plastic Neutrality" />

          <div className="plastic-badge">
            <span className="badge-number">0%</span>
            <span className="badge-text">Single-use plastic</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolarCapacityPowering;
