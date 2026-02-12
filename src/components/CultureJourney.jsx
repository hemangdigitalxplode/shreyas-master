import React, { useState } from "react";
import CardImage1 from '../assets/images/team-collaboration.jpg'
import CardImage2 from '../assets/images/work-env.jpg'
import CardImage3 from '../assets/images/collaborative-space.jpg'

const sliderData = [
    {
        id: 1,
        title: "Team Celebrations",
        desc:
            "Festival celebrations & team retreats",
        img: CardImage1,
    },
    {
        id: 2,
        title: "Work Environment",
        desc:
            "State-of-the-art manufacturing floors",
        img: CardImage2,
    },
    {
        id: 3,
        title: "Collabrative Space",
        desc:
            "Modern offices fostering innovations",
        img: CardImage3,
    },
];

const CultureJourney = () => {
    const [activeId, setActiveId] = useState(1);
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                The Culture
                            </small>
                            <h2 className="fw-bold mt-1">Life at Shreyas</h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Discover the vibrant culture and collaborative spirit that makes
                                Shreyas Sortex Group a great place to work.
                            </p>
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
                                    <h3 className="journerCardHeading">{item.title}</h3>
                                    {/* <p>{item.desc}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default CultureJourney