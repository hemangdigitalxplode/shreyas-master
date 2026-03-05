import React from 'react'
import infraImage from '../assets/images/delivery-second-section.jpg'

const WorldClassInfrastructure = () => {
    return (
        <>
            <section className="infra-sec-wrapper">
                <div className="infra-sec-container">

                    {/* LEFT CONTENT */}
                    <div className="infra-sec-left">

                        <span className="infra-sec-tag">The Infrastructure</span>
                        <h2 className="infra-sec-heading">
                            Infrastructure That Powers Production
                        </h2>

                        <p className="infra-sec-desc">
                            Our state-of-the-art facility spans over 500,000 sq ft, featuring fully automated, touch-free processing lines that ensure maximum efficiency and uncompromised hygiene standards. With a daily processing capacity of 2,000 metric tonnes, we deliver consistency at scale.
                        </p>

                        <p className="infra-sec-desc">
                            Featuring fully automated, touch-free production lines, our facility ensures maximum operational efficiency while maintaining uncompromised hygiene and safety standards. With high-volume daily production capabilities, we deliver consistent quality at scale for domestic and global markets.
                        </p>

                        {/* Feature Cards */}
                        {/* Feature Cards */}
                        <div className="infra-feature-list">
                            <div className="infra-feature-card">
                                <div className="infra-feature-icon">
                                    <i className="fa-solid fa-gears"></i>
                                </div>
                                <div>
                                    <h4>Fully Automated PLC Systems</h4>
                                    <p>
                                        Advanced programmable logic controllers ensure precision control across brewing, fermentation, distillation, filtration, and packaging processes.
                                    </p>
                                </div>
                            </div>

                            <div className="infra-feature-card">
                                <div className="infra-feature-icon">
                                    <i className="fa-solid fa-wind"></i>
                                </div>
                                <div>
                                    <h4>Hygienic Processing Environment</h4>
                                    <p>
                                        Controlled, dust-free production zones with specialized filtration systems safeguard product integrity across malting, brewing, and bottling operations.
                                    </p>
                                </div>
                            </div>

                            <div className="infra-feature-card">
                                <div className="infra-feature-icon">
                                    <i className="fa-solid fa-temperature-half"></i>
                                </div>
                                <div>
                                    <h4>Climate-Controlled Storage</h4>
                                    <p>
                                        Optimized temperature and humidity management systems maintain ideal conditions for fermentation, liquor maturation, and malt preservation.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="infra-sec-right">

                        <div className="infraImage">
                            <img src={infraImage} className='img-fluid' />
                        </div>

                        {/* Stats */}
                        <div className="infra-stats-box">

                            <div className="infra-stat-item">
                                <h3>500,000</h3>
                                <span>Sq. Ft. Facility</span>
                            </div>

                            <div className="infra-stat-item">
                                <h3>2,000</h3>
                                <span>MT Daily Capacity</span>
                            </div>

                            <div className="infra-stat-item">
                                <h3>100%</h3>
                                <span>Quality Assurance</span>
                            </div>

                        </div>
                        <section className="capacity-section">
                            <div className="container">
                                <div className="capacity-wrapper">

                                    <div className="capacity-item">
                                        <h2>5 Lakhs</h2>
                                        <p>Beer</p>
                                    </div>

                                    <div className="capacity-item">
                                        <h2>6 Lakhs </h2>
                                        <p>Cases Potable Liquor</p>
                                    </div>

                                    <div className="capacity-item">
                                        <h2>10 Lakhs</h2>
                                        <p>Malt</p>
                                    </div>

                                    <div className="capacity-item">
                                        <h2>400 KL</h2>
                                        <p>Ethanol</p>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WorldClassInfrastructure