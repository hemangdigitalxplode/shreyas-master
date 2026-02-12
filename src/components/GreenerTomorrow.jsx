import React from 'react'
import BgImage from '../assets/images/bg-kpdl.jpg'

const GreenerTomorrow = () => {
    return (
        <>
            <section className="circular-section position-relative text-white">

                {/* Background Image (ADD YOUR IMAGE HERE) */}
                <img
                    src={BgImage}  // 👈 yaha image lagana
                    alt="Solar Background"
                    className="bg-image"
                />

                {/* Overlay */}
                <div className="overlay"></div>

                <div className="container position-relative z-2 py-5">

                    {/* Top Heading */}
                    <div className="row mb-5">
                        <div className="col-lg-6">
                            <p className="section-subtitle mb-2">Circular Economy</p>
                            <h2 className="section-title">
                                Engineering a Greener Tomorrow
                            </h2>
                        </div>

                        <div className="col-lg-6 d-flex align-items-center">
                            <p className="section-description mb-0">
                                Our facility is designed as a Circular Ecosystem, where byproducts
                                become resources and waste is engineered out of the cycle.
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="row g-4 mb-5">

                        {/* Card 1 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="eco-card eco-card-green h-100">
                                <span className="badge-tag">Water Positive</span>
                                <div className="icon-box mb-3">
                                    <i className="bi bi-beaker"></i>
                                </div>
                                <h5 className='fw-bold'>Zero Liquid Discharge</h5>
                                <p>
                                    100% water recycling with Multi-Effect Evaporators and
                                    integrated effluent treatment.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="eco-card h-100">
                                <span className="badge-tag light">Self-Sufficient</span>
                                <div className="icon-box mb-3">
                                    <i className="bi bi-fire"></i>
                                </div>
                                <h5 className='fw-bold'>Green Energy Cogeneration</h5>
                                <p>
                                    Biomass-powered Combined Heat & Power system for complete
                                    energy self-sufficiency.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="eco-card h-100">
                                <span className="badge-tag light">Zero Waste</span>
                                <div className="icon-box mb-3">
                                    <i className="bi bi-flower1"></i>
                                </div>
                                <h5 className='fw-bold'>DDGS Production</h5>
                                <p>
                                    High-protein animal feed byproduct supporting sustainable
                                    livestock and poultry industries.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="eco-card h-100">
                                <span className="badge-tag light">Carbon Neutral</span>
                                <div className="icon-box mb-3">
                                    <i className="bi bi-building"></i>
                                </div>
                                <h5 className='fw-bold'>CO₂ Capture</h5>
                                <p>
                                    Fermentation gases captured, purified, and liquefied for food
                                    and industrial applications.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Stats Bar */}
                    <div className="stats-bar text-center">
                        <div className="row g-0">

                            <div className="col-md-3 stat-item">
                                <h3>2.5M</h3>
                                <p>Liters/Year<br />Water Recycled</p>
                            </div>

                            <div className="col-md-3 stat-item">
                                <h3>8.2</h3>
                                <p>MWh/Year<br />Green Power</p>
                            </div>

                            <div className="col-md-3 stat-item">
                                <h3>1,200</h3>
                                <p>Tons/Year<br />CO₂ Sequestered</p>
                            </div>

                            <div className="col-md-3 stat-item border-0">
                                <h3>100%</h3>
                                <p>Waste Diverted</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default GreenerTomorrow