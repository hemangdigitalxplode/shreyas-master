import React from 'react'

const ProcessingFacilities = () => {
    return (
        <>
            <section className="pf-sec-wrapper">
                <div className="pf-sec-container">

                    {/* Header Row */}
                    <div className="pf-sec-header">
                        <div>
                            <span className="pf-sec-tag">The Workflow</span>
                            <h2 className="pf-sec-heading">Processing Facilities</h2>
                        </div>

                        <p className="pf-sec-desc">
                            Our integrated processing line transforms raw paddy into premium
                            quality rice through four precision-engineered stages.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="pf-cards-grid">

                        {/* Card 1 - Active */}
                        <div className="pf-card pf-card-active">
                            <div className="pf-icon pf-icon-active">🔽</div>

                            <h3>Cleaning & Grading</h3>
                            <p className="pf-card-desc">
                                High-capacity vibro-destoners and aspirators remove impurities
                                with 99.9% efficiency.
                            </p>

                            <ul className="pf-bullet-list">
                                <li style={{ color: 'white' }}>Capacity: 50 MT/hour</li>
                                <li style={{ color: 'white' }}>Multi-stage separation</li>
                                <li style={{ color: 'white' }}>Automated grading systems</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="pf-card">
                            <div className="pf-icon">⚙️</div>

                            <h3>Precision Milling</h3>
                            <p className="pf-card-desc">
                                Whitening and polishing with minimal grain breakage using advanced
                                silky technology.
                            </p>

                            <ul className="pf-bullet-list">
                                <li>Breakage rate: &lt;2%</li>
                                <li>Uniform polish finish</li>
                                <li>Temperature controlled</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="pf-card">
                            <div className="pf-icon">👁️</div>

                            <h3>Color Sorting</h3>
                            <p className="pf-card-desc">
                                AI-powered optical sorters ensure 100% purity with real-time
                                defect detection.
                            </p>

                            <ul className="pf-bullet-list">
                                <li>5,000+ grains/second</li>
                                <li>RGB + NIR technology</li>
                                <li>AI defect learning</li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="pf-card">
                            <div className="pf-icon">📦</div>

                            <h3>Smart Packaging</h3>
                            <p className="pf-card-desc">
                                Automated weighing and vacuum-sealing preserves freshness and
                                extends shelf life.
                            </p>

                            <ul className="pf-bullet-list">
                                <li>±0.5g accuracy</li>
                                <li>Nitrogen flush sealing</li>
                                <li>Tamper-evident design</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ProcessingFacilities