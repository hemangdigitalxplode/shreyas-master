import React from 'react'

const CarbonNeutralCoreEnergyVitals = () => {

    const solutionsData = [
        {
            id: 1,
            title: "Bio-Energy & Biofuels",
            description:
                "Advanced Ethanol blending and biomass to energy conversion systems for sustainable industrial power.",
            icon: "bi-fire",
            iconBg: "bg-success-subtle",
            iconColor: "text-success",
            tags: ["Ethanol Blending", "Biomass Conversion", "Biogas Generation"],
            tagBg: "bg-success-subtle",
        },
        {
            id: 2,
            title: "Solar PV Solutions",
            description:
                "Large-scale rooftop and ground-mounted solar arrays for captive industrial use.",
            icon: "bi-sun",
            iconBg: "bg-warning-subtle",
            iconColor: "text-warning",
            tags: ["Rooftop Systems", "Captive Power", "Ground-Mounted Arrays"],
            tagBg: "bg-warning-subtle",
        },
        {
            id: 3,
            title: "Cogeneration Systems",
            description:
                "High-efficiency thermal systems that maximize energy output from every unit of fuel.",
            icon: "bi-gear",
            iconBg: "bg-success-subtle",
            iconColor: "text-success",
            tags: ["Heat Recovery", "Steam Turbines", "Combined Heat & Power"],
            tagBg: "bg-success-subtle",
        },
    ];

    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                Our Solutions
                            </small>
                            <h2 className="fw-bold mt-1">Core Energy Verticals</h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Comprehensive renewable energy solutions designed for
                                industrial scale operations
                            </p>
                        </div>
                    </div>
                </div>


                {/* card section  */}
                <div className="container">
                    <div className="row g-4">
                        {solutionsData.map((item) => (
                            <div key={item.id} className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border rounded-4 shadow-sm">
                                    <div className="card-body p-4">

                                        {/* Icon */}
                                        <div
                                            className={`d-inline-flex align-items-center justify-content-center rounded-3 mb-3 ${item.iconBg}`}
                                            style={{ width: "56px", height: "56px" }}
                                        >
                                            <i
                                                className={`bi ${item.icon} ${item.iconColor}`}
                                                style={{ fontSize: "24px" }}
                                            ></i>
                                        </div>

                                        {/* Title */}
                                        <h5 className="fw-bold mb-2">{item.title}</h5>

                                        {/* Description */}
                                        <p className="text-muted small mb-3">
                                            {item.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="d-flex flex-wrap gap-2">
                                            {item.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className={`badge rounded-pill fw-normal text-dark ${item.tagBg}`}
                                                    style={{ padding: "8px 12px" }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default CarbonNeutralCoreEnergyVitals