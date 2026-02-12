import React from 'react'

const impactData = [
    {
        id: 1,
        icon: "bi-cloud",
        value: "45,000+",
        title: "Metric Tons CO₂",
        subtitle: "Carbon offset annually",
    },
    {
        id: 2,
        icon: "bi-lightning-charge",
        value: "128M",
        title: "Units of Green Power",
        subtitle: "Generated to date",
    },
    {
        id: 3,
        icon: "bi-bar-chart",
        value: "72%",
        title: "Reduction",
        subtitle: "In fossil fuel dependency",
    },
];

const CarbonSustainabilityImpact = () => {
    return (
        <>
            <section className="py-5" style={{ backgroundColor: "#eef7e9" }}>
                <div className="container">
                    {/* Header */}
                    <div className="row mb-4 align-items-start">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                Our Impact
                            </small>
                            <h2 className="fw-bold mt-2">
                                Sustainability Results
                            </h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Measurable environmental impact driving India's
                                transition to clean energy.
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="row g-4">
                        {impactData.map((item) => (
                            <div key={item.id} className="col-12 col-md-4">
                                <div className="bg-white rounded-4 p-4 text-center h-100 shadow-sm">

                                    {/* Icon */}
                                    <div className="mb-3">
                                        <i
                                            className={`bi ${item.icon}`}
                                            style={{
                                                fontSize: "22px",
                                                color: "#f4b400",
                                            }}
                                        ></i>
                                    </div>

                                    {/* Value */}
                                    <h2 className="fw-bold text-success mb-1">
                                        {item.value}
                                    </h2>

                                    {/* Title */}
                                    <div className="fw-semibold">
                                        {item.title}
                                    </div>

                                    {/* Subtitle */}
                                    <small className="text-muted">
                                        {item.subtitle}
                                    </small>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default CarbonSustainabilityImpact