import React from 'react'

const servicesData = [
    {
        title: "Packaging",
        description:
            "Vacuum-sealed, moisture-proof bulk and retail packaging",
        bullets: ["Food-grade materials", "Extended shelf life", "Custom sizes available"],
        iconPlaceholder: "/icons/packaging.png",
    },
    {
        title: "Storage",
        description:
            "Strategic proximity to major ports for rapid dispatch",
        bullets: ["Mundra Port", "Kandla Port", "Climate-controlled facilities"],
        iconPlaceholder: "/icons/storage.png",
    },
    {
        title: "Tracking",
        description:
            "Real-time shipment tracking and documentation transparency",
        bullets: ["24/7 monitoring", "Digital documentation", "Client portal access"],
        iconPlaceholder: "/icons/tracking.png",
    },
    {
        title: "Delivery",
        description:
            "Integrated multi-modal transport ensuring on-time arrival",
        bullets: ["Road transport", "Rail freight", "Sea shipping"],
        iconPlaceholder: "/icons/delivery.png",
    },
];



const LogisticsSupplyChain = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                Logistics
                            </small>
                            <h2 className="fw-bold mt-1">Logistics & Supply Chain</h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Reliable, efficient, and transparent from our warehouse to your destination
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section__wrapper">
                <div className="services-section__grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="services-section__card">
                            {/* Icon Placeholder - Replace src with your exported icons */}
                            <div className="services-section__icon-box">
                                <img
                                    src={service.iconPlaceholder || "/placeholder.svg"}
                                    alt={`${service.title} icon`}
                                    className="services-section__icon-img"
                                />
                            </div>

                            <h3 className="services-section__title">{service.title}</h3>

                            <p className="services-section__description">{service.description}</p>

                            <ul className="services-section__bullet-list">
                                {service.bullets.map((bullet, bIndex) => (
                                    <li key={bIndex} className="services-section__bullet-item">
                                        <span className="services-section__bullet-dot" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default LogisticsSupplyChain