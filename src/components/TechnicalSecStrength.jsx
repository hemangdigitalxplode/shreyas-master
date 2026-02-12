import React from "react";

const TechnicalSecStrength = () => {

return(

<>

<section className="ts-bg">
      <div className="ts-container">
        <div className="ts-header">
          <div className="ts-header-left">
            <span className="ts-tag">Performance Data</span>
            <h2 className="ts-title">Technical Specifications</h2>
          </div>

          <div className="ts-header-right">
            <p>
              Our steel consistently exceeds IS 1786:2008 requirements,
              delivering superior mechanical properties for demanding
              applications.
            </p>
          </div>
        </div>

        <div className="ts-table-wrapper">
          <table className="ts-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>IS 1786:2008</th>
                <th>Shreyas Standard</th>
                <th>Improvement</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>0.2% Proof Stress</td>
                <td>Min 500 N/mm²</td>
                <td className="ts-highlight">✓ 520+ N/mm²</td>
                <td className="ts-improve">↗ +4%</td>
              </tr>

              <tr>
                <td>Elongation</td>
                <td>Min 16.0%</td>
                <td className="ts-highlight">✓ 18.0%+</td>
                <td className="ts-improve">↗ +12.5%</td>
              </tr>

              <tr>
                <td>Tensile Strength</td>
                <td>Min 565 N/mm²</td>
                <td className="ts-highlight">✓ 600+ N/mm²</td>
                <td className="ts-improve">↗ +6%</td>
              </tr>

              <tr>
                <td>TS/YS Ratio</td>
                <td>Min 1.10</td>
                <td className="ts-highlight">✓ 1.15</td>
                <td className="ts-improve">↗ +4.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

</>

)


}

export default TechnicalSecStrength;