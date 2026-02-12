import React from 'react'
import img1 from '../assets/images/regulatory-compliance.jpg'
import img2 from '../assets/images/global-offices.jpg'
import img3 from '../assets/images/customized-solutions.jpg'

const InternationalOperations = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                Operations
                            </small>
                            <h2 className="fw-bold mt-1">International Operations</h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Expert capabilities designed for seamless global trade
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Regulatory Compliance */}
            <section className="container py-5">
                <div className="row align-items-center g-4">

                    {/* Left Image */}
                    <div className="col-lg-6">
                        <img src={img1} className='img-fluid' />
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3">
                            Regulatory <br /> Compliance
                        </h2>

                        <p className="text-muted mb-4">
                            Adherence to USFDA, EU, and Middle Eastern food safety standards
                            ensures our products meet the highest international quality
                            benchmarks.
                        </p>

                        <div className="d-flex flex-wrap gap-2">
                            <span className="compliance-badge">USFDA Certified</span>
                            <span className="compliance-badge">EU Compliant</span>
                            <span className="compliance-badge">FSSAI Approved</span>
                        </div>
                    </div>

                </div>
            </section>
            {/* Global Offices */}
            <section className="container py-5">
                <div className="row align-items-center g-4">

                    {/* Right Content */}
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3">
                            Global <br /> Offices
                        </h2>

                        <p className="text-muted mb-4">
                            Representative offices and trade hubs in key locations including Dubai, Singapore, and London provide localized support for our global partners.
                        </p>

                        <div className="d-flex flex-wrap gap-2">
                            <span className="compliance-badge">Dubai</span>
                            <span className="compliance-badge">Singapore</span>
                            <span className="compliance-badge">London</span>
                        </div>
                    </div>

                    {/* Left Image */}
                    <div className="col-lg-6">
                        <img src={img2} className='img-fluid' />
                    </div>
                </div>
            </section>

            {/* Customized solutions */}
            <section className="container py-5">
                <div className="row align-items-center g-4">

                    {/* Left Image */}
                    <div className="col-lg-6">
                        <img src={img3} className='img-fluid' />
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3">
                            Customized <br /> Solutions
                        </h2>

                        <p className="text-muted mb-4">
                            Private Labeling (OEM) and custom packaging sizes for international brands. We adapt our offerings to meet your specific market requirements.
                        </p>

                        <div className="d-flex flex-wrap gap-2">
                            <span className="compliance-badge">Private Labeling</span>
                            <span className="compliance-badge">Custom Packaging</span>
                            <span className="compliance-badge">OEM Solutions</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default InternationalOperations