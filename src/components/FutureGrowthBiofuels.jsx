import React from 'react'
import GrwoFutureImage from '../assets/images/bioFuelsGrowth.jpg'

const FutureGrowthBiofuels = () => {
    return (
        <>
            <div className="row align-items-center gy-4 aboutSection">
                {/* LEFT: Image */}
                <div className="col-md-6">
                    <div className="leftCard">
                        <h1 className="mb-3 ethanolHeading">
                            Growth & future <br /> outlook
                        </h1>
                        <h6 className='smallHeading'>Expanding Renewable Energy & Biofuel Capabilities</h6>
                        <p>
                            The Energy & Biofuels vertical is focused on expanding advanced renewable energy and next-generation biofuel solutions. By scaling biofuel production, strengthening biomass-to-energy systems, and enhancing integrated power capacity, we are building a resilient, low-carbon energy ecosystem. Backed by scalable infrastructure and a technology-driven approach, we remain agile to evolving policies and industry needs while accelerating the transition toward cleaner, future-ready energy solutions.
                        </p>
                        {/* CTA Button */}
                        <button className="btn aboutBtn mt-3">
                            Explore Our Renewable Energy Capabilities
                        </button>

                    </div>
                </div>
                {/* RIGHT: Content */}
                <div className="col-md-6">
                    <img
                        src={GrwoFutureImage}
                        alt="About Shreyas Group"
                        className="img-fluid"
                    />
                </div>


            </div >

        </>
    )
}

export default FutureGrowthBiofuels