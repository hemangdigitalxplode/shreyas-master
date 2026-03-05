import React from "react";
import productImg from "../assets/images/bio-energy-image.png";
import { Flame, TrendingDown, Leaf } from "lucide-react";

const BioEnergyPowering = () => {
  return (
    <section className="bio-energy-section">
      <div className="bio-energy-container">

        {/* Left Image */}
        <div className="bio-energy-image-wrapper">
          <img
            src={productImg}
            alt="Bio Energy Plant"
            className="bio-energy-image"
          />
        </div>

        {/* Right Content */}
        <div className="bio-energy-content">

          <h2 className="bio-energy-heading">
            Driving the Future  <br /> with Clean Energy
          </h2>

          <p className="bio-energy-subtext">
            Advancing renewable energy adoption by transforming agricultural biomass into sustainable thermal power, reducing fossil fuel dependence and strengthening circular energy systems.
          </p>

          {/* Feature 1 */}
          <div className="bio-energy-feature">
            <div className="bio-energy-icon-box">
              <Flame size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="bio-energy-feature-title">Biomass Boilers</h4>
              <p className="bio-energy-feature-text">
                Renewable agricultural byproducts such as rice husks fuel high-efficiency thermal systems, converting waste into clean industrial energy.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bio-energy-feature">
            <div className="bio-energy-icon-box">
              <TrendingDown size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="bio-energy-feature-title">Energy Independence</h4>
              <p className="bio-energy-feature-text">
                Significant reduction in coal and conventional grid power usage through integrated biomass-based renewable systems.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bio-energy-feature">
            <div className="bio-energy-icon-box">
              <Leaf size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="bio-energy-feature-title">Circular Energy Model</h4>
              <p className="bio-energy-feature-text">
                By-products are repurposed as renewable inputs, creating a closed-loop system that maximises resource efficiency and minimises environmental impact.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BioEnergyPowering;
