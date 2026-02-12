import React from "react";

import Laboratoryimg from '../assets/images/laboratoryimg.png';
import Spectro from '../assets/images/Spectro.png';
import TestingMachine from '../assets/images/testing-machine.png';
import MicroStructure from '../assets/images/MicroStructure.png';


const TestingLaboratoryStrength = () => {

return (

    <>
    
<section className="tl-bg">
      <div className="tl-container">
        <div className="tl-header">
          <div className="tl-header-left">
            <span className="tl-tag">Quality Assured</span>
            <h2 className="tl-title">Testing Laboratory</h2>
          </div>

          <div className="tl-header-right">
            <p>
              Our state-of-the-art testing laboratory ensures every batch meets
              the highest quality standards through comprehensive analysis and
              verification.
            </p>
          </div>
        </div>

        <div className="tl-content">
          {/* Left Image */}
          <div className="tl-image-wrap">
            <img
              src={Laboratoryimg}
              alt="Testing Laboratory"
            />
          </div>

          {/* Right Info */}
          <div className="tl-info">
            <div className="tl-card">
              <div className="tl-icon"><img src={Spectro} className="icons-tl"/></div>
              <div>
                <h4>Spectrometer Analysis</h4>
                <p>
                  Testing chemical purity including Carbon, Sulphur, and
                  Phosphorus levels for optimal steel composition.
                </p>
              </div>
            </div>

            <div className="tl-card">
              <div className="tl-icon"><img src={TestingMachine} className="icons-tl"/></div>
              <div>
                <h4>Universal Testing Machine</h4>
                <p>
                  Verifying load-bearing capacity, flexibility, and tensile
                  strength under controlled conditions.
                </p>
              </div>
            </div>

            <div className="tl-card">
              <div className="tl-icon"><img src={MicroStructure} className="icons-tl"/></div>
              <div>
                <h4>Microstructure Examination</h4>
                <p>
                  Ensuring a toughened tempered martensite rim and a ductile
                  pearlite core structure.
                </p>
              </div>
            </div>

            <div className="tl-stats">
              <span className="tl-rate">99.8%</span>
              <span className="tl-rate-text">Quality Pass Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
)

}

export default TestingLaboratoryStrength;