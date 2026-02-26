import React from "react";
import AboutGrainsImage from '../assets/images/Layer 15.png';
import bgImage from '../assets/images/aboutGrainsBg.png'

const AboutFoodGrains = () => {
    return (
        <>
            <div className="food-grains-about container">
                <div className="row align-items-center gy-4 aboutSection position-relative">

                    {/* CENTER BACKGROUND IMAGE (DIV ke andar) */}
                    <div className="aboutBgImageWrap">
                        <img className="img-fluid BgImageWrap" src={bgImage} alt="Background Grain" />
                    </div>

                    {/*  */}
                    {/* LEFT: Image */}
                    <div className="col-md-6 position-relative">
                        <img
                            src={AboutGrainsImage}
                            alt="About Shreyas Group"
                            className="aboutFoodGrains"
                        />
                    </div>

                    {/* RIGHT: Content */}
                    <div className="col-md-6 position-relative">
                        <div className="leftCard">
                            <div className="eyebrow mb-2">About</div>

                            <h1 className="mb-3">
                                Shreyas Sortex <br /> Industries Pvt. Ltd.
                            </h1>

                            <h6 className="aboutGrainsEyebrow my-4">
                                M/s Shreyas Sortex Industries Pvt. Ltd. is a professionally managed Private Limited
                                Company with its registered office at House No. 301/401, Sahara Uphar-Type-2, Near Udaya
                                Public School, Rustampur, Gorakhpur, Uttar Pradesh–273001.
                            </h6>

                            <p>
                                Established in 2014 in District Ballia, Uttar Pradesh, Shreyas Sortex was founded under the visionary
                                leadership of Mr. Vinay Kumar Singh, Managing Director, whose entrepreneurial drive and strong
                                industry insight have propelled the company into the forefront of the Indian rice sector.
                            </p>

                            <a href="/shreyas-company">
                                <button className="btn aboutBtn mt-3">Explore More</button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AboutFoodGrains;