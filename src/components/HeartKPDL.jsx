import React from 'react'

const featuresData = [
    {
        id: 1,
        icon: "fa-solid fa-gear",
        title: "Advanced Distillation",
        desc: "Multi-pressure vacuum distillation technology delivering superior purity levels exceeding 96% for pharmaceutical and beverage applications."
    },
    {
        id: 2,
        icon: "fa-solid fa-bottle-water",
        title: "Automated Bottling",
        desc: "High-speed bottling lines for IMFL and Country Liquor with precision filling, capping, and labeling at industrial scale."
    },
    {
        id: 3,
        icon: "fa-solid fa-warehouse",
        title: "Storage & Aging",
        desc: "High-capacity maturation warehouses for malt spirits with climate-controlled environments ensuring optimal aging conditions."
    }
];

const HeartKPDL = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                The Heart of KPDL
                            </small>
                            <h2 className="fw-bold mt-1">Infrastructure & Technology</h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                State-of-the-art facilities engineered for precision, efficiency, and unmatched production capacity.
                            </p>
                        </div>
                    </div>
                </div>

                <section className="fs-wrapper">
                    <div className="fs-container">

                        {featuresData.map((item) => (
                            <div key={item.id} className="fs-card">

                                <div className="icon-box">
                                    <i className={item.icon}></i>
                                </div>

                                <h3 className="fs-title">
                                    {item.title}
                                </h3>

                                <p className="fs-desc">
                                    {item.desc}
                                </p>

                            </div>
                        ))}

                    </div>
                </section>
            </section>

        </>
    )
}

export default HeartKPDL