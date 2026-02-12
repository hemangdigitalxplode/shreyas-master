import React from 'react'

const statsData = [
    {
        id: 1,
        icon: "🏅", // yahan SVG ya image bhi laga sakta hai
        iconBg: "bg-success bg-opacity-10",
        title: "20+ Years",
        desc: "Excellence in international trade and export compliance",
    },
    {
        id: 2,
        icon: "📦",
        iconBg: "bg-warning bg-opacity-25",
        title: "500,000+ Metric Tons",
        desc:
            "Large-scale rooftop and ground-mounted solar arrays for captive industrial use.",
    },
    {
        id: 3,
        icon: "👥",
        iconBg: "bg-success bg-opacity-10",
        title: "200+ Global Partners",
        desc:
            "High-efficiency thermal systems that maximize energy output from every unit of fuel.",
    },
];

const ServingGlobalMarket = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">

                            </small>
                            <h2 className="fw-bold mt-1">Serving Global Markets</h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Our reach extends across continents, delivering excellence
                                at every step
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row g-4">
                        {statsData.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6">
                                <div className="h-100 border rounded-4 p-4 bg-white">
                                    {/* Icon */}
                                    <div
                                        className={`rounded-4 d-flex align-items-center justify-content-center mb-4 ${item.iconBg}`}
                                        style={{ width: 56, height: 56 }}
                                    >
                                        <span className="fs-4">{item.icon}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="fw-bold mb-3">{item.title}</h3>

                                    {/* Description */}
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </section>

        </>
    )
}

export default ServingGlobalMarket