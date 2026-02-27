import React, { useState } from "react";
import CardImage1 from '../assets/images/our-journey-card-1.png'
import CardImage2 from '../assets/images/our-journey-card-2.png'
import CardImage3 from '../assets/images/our-journey-card-3.png'

const sliderData = [
    {
        id: 1,
        title: "Build Your Career",
        desc:
            "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients.",
        img: CardImage1,
        href: '/our-journey'
    },
    {
        id: 2,
        title: "Our Values",
        desc:
            "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients.",
        img: CardImage2,
        href: ''
    },
    {
        id: 3,
        title: "Life at Shreyas Group",
        desc:
            "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients.",
        img: CardImage3,
        href: ''
    },
];

const ExpandableCardSlider = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <section className="game-section">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="section-title">Be a Part of Our Growth Journey </h2>
                    <p className="subText">Empowering motivated individuals to grow with our diversified businesses.</p>
                </div>


            </div>
            <div className="slider-wrapper">
                {sliderData.map((item) => (
                    <div
                        key={item.id}
                        className={`card-item ${activeId === item.id ? "active" : ""}`}
                        style={{ backgroundImage: `url(${item.img})` }}
                        onClick={() => setActiveId(item.id)}
                    >
                        <div className="item-desc">
                            <a href={item.href} className="text-white">
                                <h3 className="journerCardHeading">{item.title}</h3>
                            </a>
                            {/* <p>{item.desc}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpandableCardSlider;
