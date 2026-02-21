import React from "react";
import IsoImage from "../assets/images/iso-image.png"
import Leed from "../assets/images/leed.png"
import Food from "../assets/images/food.png"

const complianceDataUnique = [
  {
    id: 1,
    image: IsoImage,
    title: "ISO 14001",
    subtitle: "Environmental Management Systems",
    description:
      "Certified adherence to international environmental management standards, ensuring systematic reduction of our ecological footprint.",
  },
  {
    id: 2,
    image: Leed,
    title: "LEED",
    subtitle: "Leadership in Energy & Environmental Design",
    description:
      "Our facilities meet the highest standards for energy efficiency and sustainable building design, recognized globally.",
  },
  {
    id: 3,
    image: Food,
    title: "Food Safety",
    subtitle: "Consumer Health & Safety",
    description:
      "Comprehensive certifications ensuring the highest standards of consumer health, safety, and product quality across our supply chain.",
  },
];

const ComplianceSection = () => {
  return (
    <section className="complianceSectionWrapperUnique">
      <div className="complianceSectionContainerUnique">
        
        <div className="complianceHeaderRowUnique">
          
          <div className="complianceHeadingBlockUnique">
            <span className="complianceTagUnique">
              Compliance & Certifications
            </span>
            <h2 className="complianceMainHeadingUnique">
              Validated Through <br /> Global Standards
            </h2>
          </div>

          <div className="complianceDescriptionBlockUnique">
            <p className="complianceDescriptionTextUnique">
              Our commitments are backed by internationally recognized
              certifications and frameworks.
            </p>
          </div>

        </div>

        <div className="complianceCardsGridUnique">
          {complianceDataUnique.map((item) => (
            <div
              key={item.id}
              className="complianceSingleCardUnique"
            >
              <div className="complianceCardIconWrapperUnique">
                <span className="complianceCardIconUnique">
                    <img src={item.image}  alt={item.title}   className="complianceCardImageUnique"
/>                
                </span>
              </div>

              <h3 className="complianceCardTitleUnique">
                {item.title}
              </h3>

              <h4 className="complianceCardSubtitleUnique">
                {item.subtitle}
              </h4>

              <p className="complianceCardDescriptionUnique">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComplianceSection;
