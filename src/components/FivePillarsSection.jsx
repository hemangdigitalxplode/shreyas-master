import React from "react";
import Green from "../assets/images/Green.png"
import Carbon from "../assets/images/Carbon.png"
import Renewable from "../assets/images/Renewable.png"
import ESG from "../assets/images/ESG.png"
import Social from "../assets/images/Social.png"

const FivePillarsSection = () => {
  return (
    <section className="fp-section">
      <div className="fp-container">

        {/* Header */}
        <div className="fp-header">
          <h2 className="fp-title">The Five Pillars</h2>
          <p className="fp-subtitle">
            Our sustainability strategy is built on five interconnected pillars.
          </p>
        </div>

        {/* Top Row */}
        <div className="fp-row fp-row-top">

          <div className="fp-card">
            <div className="fp-icon">
              <img className="w-100" src={Green} />
            </div>
            <h3>Green Initiatives</h3>
            <p>
              Our journey in waste management and eco-friendly packaging.
            </p>
            <a href="/green-initiatives">Read More</a>
          </div>

          <div className="fp-card">
            <div className="fp-icon"><img className="w-100" src={Carbon} /></div>
            <h3>Carbon Footprint</h3>
            <p>
              Our journey in waste management and eco-friendly packaging.
            </p>
            <a href="/carbon-footprint">Read More</a>
          </div>

          <div className="fp-card">
            <div className="fp-icon fp-icon-yellow"><img className="w-100" src={Renewable} /></div>
            <h3>Renewable Energy</h3>
            <p>
              Transitioning our manufacturing hubs to 100% clean energy.
            </p>
            <a href="#">Read More</a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="fp-row fp-row-bottom">

          <div className="fp-card">
            <div className="fp-icon"><img className="w-100" src={ESG} /></div>
            <h3>ESG Commitments</h3>
            <p>
              Transparent reporting on Environmental, Social, and Governance goals.
            </p>
            <a href="/esg">Read More</a>
          </div>

          <div className="fp-card">
            <div className="fp-icon"><img className="w-100" src={Social} /></div>
            <h3>Social Responsibility</h3>
            <p>
              Empowering the communities where we live and work.
            </p>
            <a href="#">Read More</a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FivePillarsSection;
