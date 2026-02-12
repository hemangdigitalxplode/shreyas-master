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
                            World-Class Infrastructure
                        </h2>

                        <p className="infra-sec-desc">
                            Our state-of-the-art facility spans over 500,000 square feet,
                            featuring fully automated, touch-free processing lines that
                            ensure maximum efficiency and uncompromised hygiene standards.
                            With a daily processing capacity of 2,000 metric tonnes, we
                            deliver consistency at scale.
                        </p>

                        {/* Feature Cards */}
                        <div className="infra-feature-list">

                            <div className="infra-feature-card">
                                <div className="infra-feature-icon">⚙️</div>
                                <div>
                                    <h4>Fully Automated PLC Systems</h4>
                                    <p>Advanced programmable logic controllers for precision control</p>
                                </div>
                            </div>

                            <div className="infra-feature-card">
                                <div className="infra-feature-icon">🌬️</div>
                                <div>
                                    <h4>Dust-Free Environment</h4>
                                    <p>HEPA-filtered clean room processing zones</p>
                                </div>
                            </div>

                            <div className="infra-feature-card">
                                <div className="infra-feature-icon">🌡️</div>
                                <div>
                                    <h4>Climate-Controlled Storage</h4>
                                    <p>Optimal temperature and humidity management</p>
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

                    </div>
                </div>
            </section>

        </>
    )
}

export default WorldClassInfrastructure