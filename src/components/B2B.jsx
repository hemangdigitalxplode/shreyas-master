import React from 'react'

const B2B = () => {

    const products = [
        {
            icon: "fa-flask",
            badge: "96%+",
            title: "Extra Neutral Alcohol (ENA)",
            description:
                "Grain-based, pharmaceutical & beverage grade with superior neutral profile.",
            tags: ["Grain-based", "Pharmaceutical Grade", "Beverage Grade"],
        },
        {
            icon: "fa-fire-flame-simple",
            badge: "Premium",
            title: "Potable Spirits",
            description:
                "The perfect base for premium vodka and gin production with exceptional clarity.",
            tags: ["Vodka Base", "Gin Base", "Crystal Clear"],
        },
        {
            icon: "fa-wheat-awn",
            badge: "Aged",
            title: "IMFL, CL & Ethanol",
            description:
                "High-quality matured and unmatured malts for whiskey and spirits production.",
            tags: ["Matured Options", "Unmatured Options", "Premium Quality"],
        },
        {
            icon: "fa-industry",
            badge: "99.6%",
            title: "Fuel-Grade Ethanol",
            description:
                "High-purity anhydrous ethanol for oil marketing companies and fuel blending.",
            tags: ["IS 15464:2022", "OMC Approved", "Fuel Blending"],
        },
    ];

    return (
        <>
            <section className="core-products-section py-5">
                <div className="container">
                    {/* Heading */}
                    <div className="row align-items-start mb-5">
                        <div className="col-lg-6">
                            <p className="section-subtitle mb-2 text-success fw-bold">B2B Product Catalog</p>
                            <h2 className="section-title">Core Product Categories</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="section-description mt-3 mt-lg-0 text-dark">
                                Premium bulk products manufactured to exceed national and
                                international standards.
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="row g-4">
                        {products.map((item, index) => (
                            <div key={index} className="col-sm-6 col-lg-3">
                                <div className="product-card h-100">
                                    {/* Badge */}
                                    {/* <span className="product-badge">{item.badge}</span> */}

                                    {/* Icon */}
                                    <div className="icon-box">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>

                                    {/* Title */}
                                    <h5 className="mt-3 fw-semibold">{item.title}</h5>

                                    {/* Description */}
                                    <p className="text-muted small">{item.description}</p>

                                    <hr />

                                    {/* Tags */}
                                    <div className="d-flex flex-wrap gap-2">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className="product-tag">
                                                {tag}
                                            </span>
                                        ))}
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

export default B2B