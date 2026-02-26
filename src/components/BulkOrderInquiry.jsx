import React from "react";
import FormImage from '../assets/images/form.png'

const BulkOrderInquiry = () => {
    return (
        <section className="bulkq-section">
            <div className="bulkq-container">

                {/* LEFT CONTENT */}
                <div className="bulkq-left">
                    <p className="bulkq-subtitle">Inquiry Form</p>
                    <h2 className="bulkq-title">Bulk Order Inquiry</h2>
                    <p className="bulkq-desc">
                        Tell us your requirements and we'll
                        prepare a custom quote.
                    </p>

                    <div className="bulkq-image">
                        <img src={FormImage} alt="Grains Plant" />
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="bulkq-form-wrapper">
                    <form className="bulkq-form">

                        <div className="bulkq-row">
                            <div className="bulkq-field">
                                <label>Name *</label>
                                <input type="text" />
                            </div>

                            <div className="bulkq-field">
                                <label>Email *</label>
                                <input type="email" />
                            </div>
                        </div>

                        <div className="bulkq-row">
                            <div className="bulkq-field">
                                <label>Phone</label>
                                <input type="text" />
                            </div>

                            <div className="bulkq-field">
                                <label>Estimated Quantity (MT)</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="bulkq-checkbox-group">
                            <label className="bulkq-label">
                                Grains Interested In
                            </label>

                            <div className="bulkq-checkboxes">
                                {[
                                    "Basmati Rice",
                                    "Sona Masoori Rice",
                                    "Sharbati Wheat",
                                    "Moong Dal",
                                    "Toor Dal",
                                    "Finger Millet",
                                    "Pearl Millet",
                                ].map((item, i) => (
                                    <label key={i} className="bulkq-checkbox">
                                        <input type="checkbox" />
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="bulkq-field">
                            <label>Message</label>
                            <textarea rows="4"></textarea>
                        </div>

                        <button type="submit" className="bulkq-submit">
                            Submit Requirement
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default BulkOrderInquiry;