import React from 'react'
import QualityImage from '../assets/images/quality-kpdl.jpg'

const steps = [
    {
        id: "1.",
        title: "Raw Material Gatekeeping",
        desc: "Every grain shipment tested for moisture, starch yield, and purity."
    },
    {
        id: "2.",
        title: "In-Process Monitoring",
        desc: "Real-time SCADA monitoring of temperature, pH, and pressure."
    },
    {
        id: "3.",
        title: "Final Analytical Validation",
        desc: "Rigorous battery of tests in our NABL-standard laboratory."
    }
];

const capabilities = [
    "Gas Chromatography (GC)",
    "Karl Fischer Titration",
    "UV-Vis Spectroscopy",
    "HPLC Analysis",
    "Sensory Evaluation"
];

const QualityControlKpdl = () => {
    return (
        <>
            <section className="quality-section py-5">
                <div className="container">

                    {/* Heading */}
                    <div className="mb-5">
                        <p className="section-subtitle mb-2 text-success fw-bold">Technical Excellence</p>
                        <h2 className="section-title">Quality Control</h2>
                    </div>

                    <div className="row g-5 align-items-start">

                        {/* Left Image + Accreditations */}
                        <div className="col-lg-6">
                            <img
                                src={QualityImage}
                                alt="Lab"
                                className="img-fluid rounded-4 shadow-sm"
                            />

                            <div className="mt-4">
                                <h6 className="accreditation-title">Certification</h6>
                                <div className="d-flex flex-wrap gap-4 accreditation-list">
                                    <span>ISO 9001</span>
                                    <span>ISO 14001</span>
                                    {/* <span>ISO 45001</span> */}
                                    <span>FSSAI</span>
                                    {/* <span>NABL</span> */}
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-lg-6">
                            <h5 className="fw-semibold mb-4">
                                Three-Tier Quality Assurance
                            </h5>

                            {steps.map((step, index) => (
                                <div key={index} className="quality-card mb-3">
                                    <div className="d-flex">
                                        <div className="number-box me-3">
                                            {step.id}
                                        </div>
                                        <div>
                                            <h6 className="fw-semibold mb-1">{step.title}</h6>
                                            <p className="text-muted small mb-0">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Advanced Capabilities */}
                            <div className="mt-4">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-shield-check me-2 fs-5 text-warning"></i>
                                    <h6 className="fw-semibold mb-0">
                                        Advanced Analytical Capabilities
                                    </h6>
                                </div>

                                <div className="capabilities-box p-3 rounded-4">
                                    <div className="row g-2">
                                        {capabilities.map((item, i) => (
                                            <div key={i} className="col-sm-6">
                                                <div className="d-flex align-items-center small">
                                                    <i className="bi bi-dot text-success me-1"></i>
                                                    {item}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QualityControlKpdl