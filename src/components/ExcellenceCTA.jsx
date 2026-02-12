import React from 'react'

const ExcellenceCTA = () => {
    return (
        <>
            <section className="excta-wrapper">

                {/* Background Slot (Optional future use) */}
                <div className="excta-bg-slot"></div>

                <div className="excta-container">

                    <span className="excta-tag">
                        Partner With Excellence
                    </span>

                    <h2 className="excta-heading">
                        Experience our excellence firsthand.
                    </h2>

                    <p className="excta-desc">
                        Whether you're looking for bulk export partnerships or want to explore
                        our technical specifications, we're here to help.
                    </p>

                    <div className="excta-btn-group">
                        <button className="excta-btn-primary">
                            Enquire for Bulk Export
                        </button>

                        <button className="excta-btn-secondary">
                            View Technical Specifications
                        </button>
                    </div>

                </div>
            </section>

        </>
    )
}

export default ExcellenceCTA