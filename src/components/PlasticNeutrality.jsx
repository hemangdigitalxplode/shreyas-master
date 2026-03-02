import React from "react";
import productImg from "../assets/images/plastic-img.png";
import Recyclable from "../assets/images/Recyclable.png";
import SingleUse from "../assets/images/Single-Use.png";
import AllSKUs from "../assets/images/All SKUs.png";

const PlasticNeutrality = () => {
  return (
    <section className="plastic-section">
      <div className="plastic-container">

        {/* LEFT SIDE */}
        <div className="plastic-left">
          <h2>Plastic Neutrality</h2>

          <p>
            Our commitment to eliminating waste at the source. We've transitioned
            to 100% recyclable laminates for all consumer goods and achieved a
            landmark milestone in 2020 the complete elimination of single-use
            plastics across all manufacturing facilities.
          </p>

          <div className="plastic-cards">

            {/* Row 1 */}
            <div className="plastic-row">
              <div className="icon-box">
                <img className="w-100" src={Recyclable} />
              </div>
              <div className="content-box">
                <span className="card-title">100%</span>
                <span className="card-sub">Recyclable Laminates</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="plastic-row">
              <div className="icon-box">
                <img className="w-100" src={SingleUse} />
              </div>
              <div className="content-box">
                <span className="card-title">Zero</span>
                <span className="card-sub">
                  Carbon Emission
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="plastic-row">
              <div className="icon-box">
                <img className="w-100" src={AllSKUs} />
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

export default PlasticNeutrality;
