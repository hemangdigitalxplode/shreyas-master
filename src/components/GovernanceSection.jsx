import React from "react";
import UserIcon from "../assets/images/Users.png"
import Ethics from "../assets/images/ethics.png"
import Heart from "../assets/images/heart-n.png"

const GovernanceSection = () => {
  return (
    <section className="govSectionWrapperUnique">
      
      <div className="govSectionContainerUnique">

        <div className="govSectionHeaderBlockUnique">
          <span className="govSectionTagUnique">Governance Framework</span>
          <h2 className="govSectionMainHeadingUnique">
            Strong Leadership Drives Sustainable Outcomes
          </h2>
        </div>

        <div className="govBoardOversightBlockUnique">
          <h3 className="govBoardOversightTitleUnique">Board Oversight</h3>

          <div className="govBoardCardsGridUnique">

            <div className="govBoardCardOneUnique">
              <div className="govBoardIconBoxOneUnique">
                <span className="govBoardIconOneUnique">
                    <img className="w-100" src={UserIcon} />
                </span>
              </div>
              <div className="govBoardTextBlockOneUnique">
                <h4 className="govBoardNameOneUnique">Rajiv Menon</h4>
                <p className="govBoardRoleOneUnique">
                  Chairman, Sustainability Committee
                </p>
              </div>
            </div>

            <div className="govBoardCardTwoUnique">
              <div className="govBoardIconBoxTwoUnique">
                <span className="govBoardIconTwoUnique"> 
                    <img className="w-100" src={UserIcon} /></span>
              </div>
              <div className="govBoardTextBlockTwoUnique">
                <h4 className="govBoardNameTwoUnique">Priya Sharma</h4>
                <p className="govBoardRoleTwoUnique">
                  Chief Sustainability Officer
                </p>
              </div>
            </div>

            <div className="govBoardCardThreeUnique">
              <div className="govBoardIconBoxThreeUnique">
                <span className="govBoardIconThreeUnique">
                     <img className="w-100" src={UserIcon} /></span>
              </div>
              <div className="govBoardTextBlockThreeUnique">
                <h4 className="govBoardNameThreeUnique">Anand Kulkarni</h4>
                <p className="govBoardRoleThreeUnique">
                  Head of ESG Compliance
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="govLowerCardsWrapperUnique">

          <div className="govEthicsCardUnique">
            <div className="govEthicsIconBoxUnique">
              <span className="govEthicsIconUnique">
                  <img className="w-100" src={Ethics} /></span>
        
            </div>
            <div className="govEthicsContentUnique">
              <h4 className="govEthicsTitleUnique">Ethics Committee</h4>
              <p className="govEthicsDescriptionUnique">
                Our independent Ethics Committee oversees ESG compliance and 
                ethical conduct across all business divisions. They conduct 
                quarterly reviews and maintain a zero-tolerance policy for 
                governance violations.
              </p>
            </div>
          </div>

          <div className="govCoreValuesCardUnique">
            <div className="govCoreValuesIconBoxUnique">
              <span className="govCoreValuesIconUnique">
                  <img className="w-100" src={Heart} />
              </span>
            </div>
            <div className="govCoreValuesContentUnique">
              <h4 className="govCoreValuesTitleUnique">Core Values</h4>
              <p className="govCoreValuesDescriptionUnique">
                Governance is woven into every link of the Shreyas Group value 
                chain — from responsible sourcing and ethical manufacturing to 
                transparent stakeholder communication and community investment.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default GovernanceSection;
