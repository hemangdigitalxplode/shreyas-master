import React from "react";
import Iconfire from'../assets/images/fire.png';
import Iconcharge from'../assets/images/charge.png';
import Icontemp from'../assets/images/temp.png';

const ProcessSectionStrength = () => {
  return (
    <section className="process-section">
      <div className="process-header">
        <div className="left">
          <span className="tag">Our Process</span>
          <h2>Manufacturing Excellence</h2>
        </div>

        <div className="right">
          <p>
            Precision metallurgy with controlled cooling process that ensures
            exceptional ductility and tensile strength of our steel products.
          </p>
        </div>
      </div>

      <div className="process-cards">
        <div className="process-card">
          <div className="icon-box"><img src={Iconfire} className="icon-img"/></div>
          <h4>Induction Furnace</h4>
          <p>
            Advanced induction melting technology for precise temperature
            control and superior metal quality.
          </p>
        </div>

        <div className="process-card">
          <div className="icon-box"><img src={Iconcharge} className="icon-img"/></div>
          <h4>Rolling Mill</h4>
          <p>
            State-of-the-art rolling mill ensuring uniform cross-sections and
            consistent product dimensions.
          </p>
        </div>

        <div className="process-card">
          <div className="icon-box"><img src={Icontemp} className="icon-img"/></div>
          <h4>Controlled Cooling</h4>
          <p>
            Precision cooling process that guarantees optimal ductility and
            tensile strength.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionStrength;
