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
          <h2>Solar Capacity & Live Analytics
</h2>

          <p>
            Harnessing solar energy as our primary power pillar generating clean megawatts across every facility.
          </p>

          <div className="plastic-cards">

            {/* Row 1 */}
            <div className="plastic-row">
              <div className="icon-box">
                <img className="w-100" src={Recyclable}/>
              </div>
              <div className="content-box">
                <span className="card-title">100%</span>
                <span className="card-sub">Recyclable Laminates</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="plastic-row">
              <div className="icon-box">
                <img className="w-100" src={SingleUse}/>
              </div>
              <div className="content-box">
                <span className="card-title">Since 2020</span>
                <span className="card-sub">
                  Single-Use Plastics Eliminated
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="plastic-row">
              <div className="icon-box">
               <img className="w-100" src={AllSKUs}/>
              </div>
              <div className="content-box">
                <span className="card-title">All SKUs</span>
                <span className="card-sub">
                  Eco-Certified Packaging
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
