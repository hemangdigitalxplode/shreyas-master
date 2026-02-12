import React from 'react'
import GrwoFutureImage from '../assets/images/grow-future.jpg'

const GrowthFuture = () => {
    return (
        <>
            <div className="row align-items-center gy-4 aboutSection">
                {/* LEFT: Image */}
                <div className="col-md-6">
                    <div className="leftCard">
                        <h1 className="mb-3 ethanolHeading">
                            Growth & future <br /> outlook
                        </h1>
                        <h6 className='smallHeading'>Expanding into value-added distillation and beverage segments</h6>
                        <p>
                            The Distilleries & Ethanol vertical is structured for strategic expansion into value-added segments segments such as Ethanol, ENA and alco-bev spirits. Our scalable infrastructure and technology-led approach enable us to adapt to evolving market and regulatory landscapes.
                        </p>
                        {/* CTA Button */}
                        <button className="btn aboutBtn mt-3">
                            Future-ready World-class <br />
                            Diversified Products
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

export default GrowthFuture