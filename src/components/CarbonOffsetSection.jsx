import React from "react";
import indiaMap from "../assets/images/india-map.jpg"; 

const CarbonOffsetSection = () => {
  return (
    <section className="cosb-section py-5 mt-3">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="cosb-title">
              Carbon Offsetting <br /> & Afforestation
            </h1>

            <p className="cosb-subtitle">
              Balancing residual emissions through nature-based
              solutions across India.
            </p>

            <div className="row g-4 mt-4">

              {/* 50,000+ Card */}
              <div className="col-md-6">
                <div className="cosb-stat-card h-100">
                  <h2 className="cosb-stat-number">50,000+</h2>
                  <p className="cosb-stat-text">
                    Trees Planted <br /> Across India
                  </p>
                </div>
              </div>

              {/* Karnataka Card */}
              <div className="col-md-6">
                <div className="cosb-info-card h-100">
                  <h4 className="cosb-state-title">Karnataka</h4>

                  <div className="mb-4">
                    <span className="cosb-tree-number">9,200</span>
                    <div className="cosb-tree-label">Trees Planted</div>
                  </div>

                  <div>
                    <p className="cosb-species-title">Species Planted</p>

                    <div className="d-flex flex-wrap gap-2">
                      <span className="cosb-tag">Sandalwood</span>
                      <span className="cosb-tag">Teak</span>
                      <span className="cosb-tag">Rosewood</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6">
            <div className="cosb-image-wrapper text-center">
              <img
                src={indiaMap}
                alt="Afforestation Map India"
                className="img-fluid cosb-map-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CarbonOffsetSection;
