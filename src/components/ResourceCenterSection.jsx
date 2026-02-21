import React from "react";

import Doc from "../assets/images/doc.png"
import Download from "../assets/images/download.png"

const resourceDataUnique = [
  {
    id: 1,
    title: "Annual Sustainability Report 2023",
    description:
      "Comprehensive year-over-year impact data across all ESG pillars.",
    fileSize: "PDF · 4.2 MB",
    fileUrl: "/pdfs/report-2023.pdf",
  },
  {
    id: 2,
    title: "Annual Sustainability Report 2022",
    description:
      "Comprehensive year-over-year impact data across all ESG pillars.",
    fileSize: "PDF · 4.2 MB",
    fileUrl: "/pdfs/report-2022.pdf",
  },
  {
    id: 3,
    title: "Annual Sustainability Report 2021",
    description:
      "Comprehensive year-over-year impact data across all ESG pillars.",
    fileSize: "PDF · 4.2 MB",
    fileUrl: "/pdfs/report-2021.pdf",
  },
];

const ResourceCenterSection = () => {
  return (
    <section className="resourceSectionWrapperUnique">
      <div className="resourceSectionContainerUnique">

        {/* Header */}
        <div className="resourceHeaderRowUnique">
          <div className="resourceHeadingBlockUnique">
            <span className="resourceTagUnique">Resource Center</span>
            <h2 className="resourceMainHeadingUnique">
              Public Disclosures
            </h2>
          </div>

          <div className="resourceDescriptionBlockUnique">
            <p className="resourceDescriptionTextUnique">
              Direct access to our governance documents and sustainability reports.
            </p>
          </div>
        </div>

        {/* List */}
        <div className="resourceListWrapperUnique">
          {resourceDataUnique.map((item) => (
            <div key={item.id} className="resourceSingleItemUnique">

              <div className="resourceLeftBlockUnique">
                <div className="resourceIconBoxUnique">
                  <img className="w-100" src={Doc} />
                    </div>

                <div className="resourceTextBlockUnique">
                  <h3 className="resourceItemTitleUnique">
                    {item.title}
                  </h3>
                  <p className="resourceItemDescriptionUnique">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="resourceRightBlockUnique">
                <span className="resourceFileSizeUnique">
                  {item.fileSize}
                </span>

                <a
                  href={item.fileUrl}
                  download
                  className="resourceDownloadButtonUnique"
                >
                   <img className="w-100" src={Download} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResourceCenterSection;
