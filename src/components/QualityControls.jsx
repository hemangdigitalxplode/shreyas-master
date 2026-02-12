import React from 'react'
import QualityControl from '../assets/images/quality-control.jpg'

const QualityControls = () => {
    return (
        <>
            <section className="qc-sec-wrapper">
                <div className="qc-sec-container">

                    {/* Top Header */}
                    <div className="qc-sec-header">
                        <div>
                            <span className="qc-sec-tag">The Trust</span>
                            <h2 className="qc-sec-heading">
                                Quality Control & Certifications
                            </h2>
                        </div>

                        <p className="qc-sec-desc">
                            From lab to table, every grain undergoes rigorous testing to meet
                            international quality standards.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="qc-main-grid">

                        {/* LEFT IMAGE PLACEHOLDER */}
                        <div className="infraImage">
                            <img src={QualityControl} className='img-fluid' />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="qc-right-content">

                            <h3 className="qc-checklist-title">Quality Checklist</h3>

                            {/* Checklist Cards */}
                            <div className="qc-checklist-card">
                                <div className="qc-icon">💧</div>
                                <div>
                                    <h4>24/7 Moisture Testing</h4>
                                    <p>
                                        Continuous monitoring ensures optimal 12-14% moisture content
                                    </p>
                                </div>
                            </div>

                            <div className="qc-checklist-card">
                                <div className="qc-icon">📏</div>
                                <div>
                                    <h4>Grain Length Analysis</h4>
                                    <p>
                                        Precise measurement for consistent quality grading
                                    </p>
                                </div>
                            </div>

                            <div className="qc-checklist-card">
                                <div className="qc-icon">✨</div>
                                <div>
                                    <h4>Aroma Retention Checks</h4>
                                    <p>
                                        Specialized testing preserves authentic basmati fragrance
                                    </p>
                                </div>
                            </div>

                            {/* Certification Badge Row */}
                            <div className="qc-cert-badge">
                                <span>FSSAI</span>
                                <span>ISO 22000</span>
                                <span>HACCP</span>
                                <span>Halal</span>
                                <span>GMP</span>
                                <span>BRC</span>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Certification Row */}
                    <div className="qc-bottom-cert-row">
                        <span className="qc-dot green"></span> FSSAI Certified
                        <span className="qc-dot blue"></span> ISO 22000 Certified
                        <span className="qc-dot orange"></span> HACCP Certified
                        <span className="qc-dot darkgreen"></span> Halal Certified
                        <span className="qc-dot purple"></span> GMP Certified
                        <span className="qc-dot red"></span> BRC Certified
                    </div>

                </div>
            </section>

        </>
    )
}

export default QualityControls