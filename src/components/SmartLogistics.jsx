import React from "react";
import GPS from "../assets/images/GPS.png"
import Fleet from "../assets/images/Fleet.png"

const SmartLogistics = () => {
  return (
    <section className="sl-section">
      <div className="sl-container">
        <div className="sl-header">
          <h1 className="sl-title">Carbon Neutral</h1>
          <p className="sl-subtitle">
            Optimizing the value chain to reduce transportation emissions.
          </p>
        </div>

        <div className="sl-card-wrapper">
          {/* Card 1 */}
          <div className="sl-card">
            <div className="sl-icon-box sl-icon-green">
              <img className="w-100" src={GPS} />
            </div>
            <h3 className="sl-card-title">ESP</h3>
            <p className="sl-card-text">
              An Electrostatic Precipitator (ESP) in a boiler process removes fly ash from flue gas using electric forces. Dust-laden gas enters, passing through high-voltage discharge electrodes (negative) that charge particles.
            </p>
          </div>

          {/* Card 2 */}
          <div className="sl-card">
            <div className="sl-icon-box sl-icon-yellow">
              <img className="w-100" src={Fleet} />
            </div>
            <h3 className="sl-card-title">Ash Recycle</h3>
            <p className="sl-card-text">
              Boiler ash, specifically bottom ash, can be recycled by returning it to the combustion chamber to reduce landfill footprint, or repurposed for construction materials like bricks, cement, and road base construction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="sl-highlight-card">
            <h2 className="sl-percentage">40%</h2>
            <p className="sl-highlight-text">
              Reduction in <br /> Carbon Emissions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLogistics;
