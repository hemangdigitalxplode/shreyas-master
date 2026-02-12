import React from 'react'
import CtaBanner from '../assets/images/excellence-cta-banner.jpg'

const ReadyToDecarbonise = () => {
    return (
        <>
            <section className="dc-section-wrapper">
                {/* Background Slot - You can add bg later */}
                <div className="dc-bg-overlay"></div>

                <div className="dc-content-container">
                    <h2 className="dc-main-heading">
                        Ready to Decarbonize Your Operations?
                    </h2>

                    <p className="dc-sub-text">
                        Partner with us to develop customized renewable energy solutions
                        for your industrial needs.
                    </p>

                    <button className="dc-primary-btn">
                        Schedule a Consultation
                    </button>
                </div>
            </section>
        </>
    )
}

export default ReadyToDecarbonise