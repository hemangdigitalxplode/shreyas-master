import React from 'react'

const advantages = [
    {
        title: "Strategic Logistics",
        description:
            "Proximity to major grain belts and transport hubs ensures reliable raw material supply and efficient distribution to clients nationwide.",
        points: ["Near Grain Sources", "Rail Connectivity", "Port Access"],
    },
    {
        title: "Custom Manufacturing",
        description:
            "Flexible production capabilities with tailored solutions designed to meet diverse client specifications and industry requirements.",
        points: ["Custom Formulations", "Private Labeling", "R&D Support"],
    },
    {
        title: "Operational Excellence",
        description:
            "Modern infrastructure and robust systems ensure uninterrupted production and consistent product quality.",
        points: ["24/7 Operations", "Redundant Systems", "99.5% Uptime"],
    },
];

const WhyKpdl = () => {
    return (
        <>
            <section className="  py-5">
                <div className="container">
                    <div className="row g-4 align-items-start">

                        {/* Left Content */}
                        <div className="col-lg-4">
                            <p className="section-subtitle mb-2 fw-bold text-success">Strategic Advantage</p>
                            <h2 className="section-title">Why KDPL?</h2>
                            <p className="section-description mt-3 text-dark">
                                Partner with a facility built for scale, reliability, and excellence.
                            </p>
                        </div>

                        {/* Right Cards */}
                        <div className="col-lg-8">
                            <div className="row g-4">
                                {advantages.map((item, index) => (
                                    <div key={index} className="col-md-6 col-xl-4">
                                        <div className="advantage-card h-100">

                                            <div className="icon-box mb-3">
                                                <i className="fa-solid fa-fire-flame-simple"></i>
                                            </div>

                                            <h5 className="fw-semibold">{item.title}</h5>

                                            <p className="text-muted small">
                                                {item.description}
                                            </p>

                                            <ul className="advantage-list mt-3">
                                                {item.points.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyKpdl