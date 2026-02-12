import React from 'react'

const servicesData = [
    {
        id: 1,
        title: "EPC Services",
        subtitle: "Engineering, Procurement & Construction",
        description:
            "Full-service project delivery for renewable energy installations, from initial design through commissioning.",
        points: [
            "Detailed engineering",
            "Equipment sourcing",
            "Turnkey construction",
        ],
        icon: "bi-diagram-3",
    },
    {
        id: 2,
        title: "O&M Services",
        subtitle: "Operations & Maintenance",
        description:
            "Remote monitoring systems and on-site teams ensuring optimal energy yield and equipment longevity.",
        points: [
            "24/7 SCADA monitoring",
            "Preventive maintenance",
            "Performance optimization",
        ],
        icon: "bi-display",
    },
    {
        id: 3,
        title: "Energy Auditing",
        subtitle: "Deep-Dive Analysis",
        description:
            "Comprehensive analysis to identify heat recovery opportunities and power-saving potential in heavy industry.",
        points: [
            "Thermal imaging",
            "Load analysis",
            "ROI projections",
        ],
        icon: "bi-search",
    },
];

const TechnicalExcellence = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row g-5 align-items-start">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                Technical Excellence
                            </small>

                            <h2 className="fw-bold mt-2 mb-3">
                                Engineering for <br /> Maximum Efficiency
                            </h2>

                            <p className="text-muted mb-4">
                                Our engineering teams bring decades of experience in industrial
                                energy systems, ensuring every project delivers measurable
                                results and long-term value.
                            </p>

                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span>ISO 9001 Certified</span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span>500+ Projects Delivered</span>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <i className="bi bi-check-circle-fill text-success"></i>
                                    <span>Expert Engineering Team</span>
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="col-lg-6">
                            <div className="d-flex flex-column gap-4">
                                {servicesData.map((service) => (
                                    <div
                                        key={service.id}
                                        className="border rounded-4 p-4"
                                    >
                                        <div className="d-flex gap-3">
                                            {/* Icon */}
                                            <div
                                                className="d-flex align-items-center justify-content-center rounded-3 bg-success-subtle"
                                                style={{ width: "44px", height: "44px" }}
                                            >
                                                <i
                                                    className={`bi ${service.icon} text-success`}
                                                    style={{ fontSize: "20px" }}
                                                ></i>
                                            </div>

                                            {/* Content */}
                                            <div>
                                                <h6 className="fw-semibold mb-0">
                                                    {service.title}
                                                </h6>
                                                <small className="text-muted">
                                                    {service.subtitle}
                                                </small>

                                                <p className="text-muted small mt-2 mb-2">
                                                    {service.description}
                                                </p>

                                                <p className="small text-success mb-0">
                                                    • {service.points.join("  |  ")}
                                                </p>
                                            </div>
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

export default TechnicalExcellence