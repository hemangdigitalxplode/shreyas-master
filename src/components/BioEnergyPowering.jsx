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
            Bio-Energy & <br /> Thermal Efficiency
          </h2>

          <p className="bio-energy-subtext">
            Reducing reliance on fossil fuels through circular thermal energy turning 
            agricultural waste into industrial power.
          </p>

          {/* Feature 1 */}
          <div className="bio-energy-feature">
            <div className="bio-energy-icon-box">
              <Flame size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="bio-energy-feature-title">Biomass Boilers</h4>
              <p className="bio-energy-feature-text">
                Agricultural byproducts like rice husks power our thermal systems, 
                converting waste into clean heat energy.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bio-energy-feature">
            <div className="bio-energy-icon-box">
              <TrendingDown size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="bio-energy-feature-title">Grid Independence</h4>
              <p className="bio-energy-feature-text">
                62% reduction in coal and grid power consumption since 2018 
                through circular thermal energy systems.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bio-energy-feature">
            <div className="bio-energy-icon-box">
              <Leaf size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="bio-energy-feature-title">Zero Waste Cycle</h4>
              <p className="bio-energy-feature-text">
                Every byproduct becomes a resource closing the loop on 
                industrial energy waste.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BioEnergyPowering;
