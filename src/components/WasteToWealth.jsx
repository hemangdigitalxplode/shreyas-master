import React from "react";

import { Leaf, Flame, Beef, Recycle } from "lucide-react";

const WasteToWealth = () => {
  const wasteData = [
    {
      icon: <Leaf size={26} />,
      title: "Byproduct Identification",
      desc: "Collection of rice husks and other milling byproducts from our processing facilities.",
    },
    {
      icon: <Flame size={26} />,
      title: "Bio-Fuel Conversion",
      desc: "Husks are converted into bio-fuel to power industrial boilers, reducing fossil fuel dependence.",
    },
    {
      icon: <Beef size={26} />,
      title: "Animal Feed Production",
      desc: "Remaining byproducts are processed into nutrient-rich animal feed, ensuring zero waste.",
    },
    {
      icon: <Recycle size={26} />,
      title: "100% Recyclable Packaging",
      desc: "The cycle completes with fully recyclable packaging, closing the loop on our production system.",
    },
  ];

  return (
    <section className="hmw2w-sec-wrapper">
      <div className="hmw2w-sec-container">

        <div className="hmw2w-sec-header">
          <h2 className="hmw2w-sec-heading">Waste-to-Wealth</h2>
          <p className="hmw2w-sec-description">
            Repurposing byproducts to create a closed-loop system. Every output
            from our rice milling process finds a second life.
          </p>
        </div>

        <div className="hmw2w-sec-grid">
          {wasteData.map((item, index) => (
            <div className="hmw2w-sec-card" key={index}>
              <div className="hmw2w-sec-iconbox">
                {item.icon}
              </div>
              <h3 className="hmw2w-sec-card-title">{item.title}</h3>
              <p className="hmw2w-sec-card-text">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="hmw2w-sec-footer-text">
          100% Recyclable Packaging Goal Achieved
        </div>

      </div>
    </section>
  );
};

export default WasteToWealth;
