import React from "react";
import TmtImage from '../assets/images/tmt-image.png';
import BilletImage from '../assets/images/billetimage.png';
import SteelImage from '../assets/images/steel.png';

const PortfolioStrength = () => {

return(

    <>
    
<section className="ppf-section">
  <div className="ppf-container">
      <div className="ppf-header">
        <span className="ppf-tag">What We Offer</span>
        <h2 className="ppf-title">Product Portfolio</h2>
      </div>

      <div className="ppf-grid">
        <div className="ppf-card">
          <img
            className="ppf-image"
            src={TmtImage}
            alt="TMT Rebars"
          />

          <div className="ppf-overlay">
            <h4 className="ppf-card-title">TMT Rebars</h4>
            <p className="ppf-card-desc">
              High-bond strength bars for earthquake-resistant construction.
            </p>
            <span className="ppf-card-meta">
              Grades: Fe 500D, Fe 550D
            </span>
          </div>
        </div>

        <div className="ppf-card">
          <img
            className="ppf-image"
            src={BilletImage}
            alt="Billet & Blooms"
          />

          <div className="ppf-overlay">
            <h4 className="ppf-card-title">Billet & Blooms</h4>
            <p className="ppf-card-desc">
              High-quality raw steel for further forging and rolling.
            </p>
            <span className="ppf-card-meta">
              Custom chemical compositions
            </span>
          </div>
        </div>

        <div className="ppf-card">
          <img
            className="ppf-image"
            src={SteelImage}
            alt="Structural Steel"
          />

          <div className="ppf-overlay">
            <h4 className="ppf-card-title">Structural Steel</h4>
            <p className="ppf-card-desc">
              Angles, Channels, and Beams for industrial frameworks.
            </p>
            <span className="ppf-card-meta">
              Standard & Heavy Sections
            </span>
          </div>
        </div>
      </div>
      </div>
    </section>
    
    </>
)


}
export default PortfolioStrength;

