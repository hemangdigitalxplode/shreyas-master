import React from 'react'

const partnersData = [
    {
        id: 1,
        short: "MNRE",
        name: "Ministry of New and Renewable Energy",
    },
    {
        id: 2,
        short: "IREDA",
        name: "Indian Renewable Energy Development Agency",
    },
    {
        id: 3,
        short: "SECI",
        name: "Solar Energy Corporation of India",
    },
    {
        id: 4,
        short: "EBP",
        name: "Ethanol Blended Petrol Programme",
    },
];

const certifications = [
    "ISO 14001",
    "ISO 9001",
    "Green Building",
    "LEED Certified",
];


const StrategicAlliance = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">

                    {/* HEADER */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                Partnerships
                            </small>
                            <h2 className="fw-bold mt-2">
                                Strategic Alliances
                            </h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Collaborating with government bodies and industry leaders
                                to accelerate India's renewable energy transition.
                            </p>
                        </div>
                    </div>

                    {/* PARTNER CARDS */}
                    <div className="row g-4 mb-5">
                        {partnersData.map((partner) => (
                            <div key={partner.id} className="col-12 col-sm-6 col-lg-3">
                                <div
                                    className="h-100 rounded-4 d-flex flex-column justify-content-center align-items-center text-center px-3"
                                    style={{
                                        backgroundColor: "#f8f8f4",
                                        minHeight: "110px",
                                    }}
                                >
                                    <div className="fw-semibold mb-1">
                                        {partner.short}
                                    </div>
                                    <small className="text-muted">
                                        {partner.name}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CERTIFICATIONS */}
                    <div
                        className="rounded-4 py-4 px-3 text-center"
                        style={{ backgroundColor: "#f8f8f4" }}
                    >
                        <h6 className="fw-semibold mb-3">
                            Certifications & Compliance
                        </h6>

                        <div className="d-flex flex-wrap justify-content-center gap-3 text-muted small">
                            {certifications.map((item, index) => (
                                <span key={index}>
                                    {item}
                                    {index !== certifications.length - 1 && " |"}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default StrategicAlliance