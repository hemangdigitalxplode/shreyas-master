import React from 'react'

const FooterNew = () => {
    return (
        <footer className="sg-footer-wrapper">
            <div className="container">
                <div className="row sg-footer-top">

                    {/* Logo + Map */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="sg-footer-logo">
                            <img
                                src="/logo.png"   // Replace with your logo
                                alt="Company Logo"
                                className="img-fluid"
                            />
                        </div>

                        <div className="sg-footer-map mt-3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.61401954845!2d77.0688997!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05f4d15b7f01%3A0x8f2b5c7c62cbd8b6!2sDelhi!5e0!3m2!1sen!2sin!4v1710000000000"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="sg-footer-heading">Quick Links</h5>
                        <ul className="sg-footer-links">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Manufacturing</li>
                            <li>Sustainability</li>
                            <li>Quality & Certifications</li>
                            <li>Gallery</li>
                            <li>Exports</li>
                            <li>Site map</li>
                        </ul>
                    </div>

                    {/* Companies */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="sg-footer-heading">List of Companies</h5>
                        <ul className="sg-footer-links">
                            <li>Shreyas Sortex Industries Private Limited</li>
                            <li>Keyaan Distilleries Private Limited</li>
                            <li>Shreyas Distilleries & Energy Private Limited</li>
                        </ul>
                    </div>

                    {/* Businesses */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="sg-footer-heading">Businesses</h5>
                        <ul className="sg-footer-links">
                            <li>Food and Grain</li>
                            <li>Distilleries & Ethanol</li>
                            <li>Energy & Biofuels</li>
                            <li>Potable Spirits</li>
                        </ul>
                    </div>

                </div>

                <div className="sg-footer-divider"></div>

                <div className="sg-footer-bottom-links">
                    <span>About Us</span>
                    <span>|</span>
                    <span>Sustainability</span>
                    <span>|</span>
                    <span>Newsroom</span>
                    <span>|</span>
                    <span>Careers</span>
                    <span>|</span>
                    <span>Downloads</span>
                    <span>|</span>
                    <span>Contact Us</span>
                    <span>|</span>
                    <span>Locate us</span>
                </div>

                <div className="sg-footer-follow">
                    <span>Follow Us On</span>
                </div>

            </div>
        </footer>
    )
}

export default FooterNew