import React from "react";
import WaterSteward from "../assets/images/water-steward.png"; 
import Tenm from "../assets/images/ten-m.png"; 
import Integrated from "../assets/images/integrated.png"; 
import Advance from "../assets/images/advance.png"; 

const WaterStewardhip = () => {

    return (

    <section className="plastic-section">
          <div className="plastic-container">
    

             {/* Left SIDE */}
            <div className="plastic-right">
              <img src={WaterSteward} alt="Plastic Neutrality" />
    
             
            </div>


            {/* Right SIDE */}
            <div className="plastic-left">
              <h2>Water Stewardship</h2>
    
              <p>
                Preserving our most vital resource. Our internal water recycling plants, integrated within every Shreyas Group manufacturing unit, ensure that water is treated, purified, and reused across our operations.
              </p>
    
              <div className="plastic-cards">
    
                {/* Row 1 */}
                <div className="plastic-row">
                  <div className="icon-box">
                    <img className="w-100" src={Tenm}/>
                  </div>
                  <div className="content-box">
                    <span className="card-title">10M</span>
                    <span className="card-sub">Recyclable Laminates</span>
                  </div>
                </div>
    
                {/* Row 2 */}
                <div className="plastic-row">
                  <div className="icon-box">
                    <img className="w-100" src={Integrated}/>
                  </div>
                  <div className="content-box">
                    <span className="card-title">Integrated Recycling Plants</span>
                    
                  </div>
                </div>
    
                {/* Row 3 */}
                <div className="plastic-row">
                  <div className="icon-box">
                   <img className="w-100" src={Advance}/>
                  </div>
                  <div className="content-box">
                    <span className="card-title">Advanced Filtration</span>
                    <span className="card-subs">
                      Eco-Certified Packaging
                    </span>
                  </div>
                </div>
    
              </div>
            </div>
    
           
    
          </div>
        </section>
    )

}
export default WaterStewardhip;