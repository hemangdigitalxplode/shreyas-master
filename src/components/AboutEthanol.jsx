import React from 'react'
import AboutImage from '../assets/images/ethanol-about.jpg'

const AboutEthanol = () => {
    return (
        <>
            <div className="row align-items-center gy-4 aboutSection">
                {/* LEFT: Image */}
                <div className="col-md-6">
                    <img
                        src={AboutImage}
                        alt="About Shreyas Group"
                        className="img-fluid aboutEthanol"
                    />
                </div>
                {/* RIGHT: Content */}
                <div className="col-md-6">
                    <div className="leftCard">

                        <div className="eyebrow mb-2">
                            About
                        </div>

                        <h1 className="mb-3 ethanolHeading">
                            Distilleries & Breweries
                        </h1>
                        <h6 className='smallHeading'>An integral part of Shreyas Group’s sustainable growth journey</h6>
                        <p>
                            The Distilleries & Ethanol vertical of Shreyas Group represents our commitment to Finest malt spirits and world-class breweries development. Supporting India's sustainable growth and world-class alco-bev drinks
                        </p>
                        <p>
                            Our operations integrate grain-based Ethanol ENA finest malt, brewery products with modern utilities, CO₂ recovery and DDGS corn oil, cattle feed, power export and energy optimization system. By combining technology-led processes with scalable infrastructure, we continue to strengthen our position in the bioenergy and Alco-bev System.
                        </p>
                        {/* CTA Button */}
                        <button className="btn aboutBtn mt-3">
                            Explore More
                        </button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutEthanol