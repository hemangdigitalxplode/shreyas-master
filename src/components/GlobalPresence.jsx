import React from "react";
import mapImage from '../assets/images/updated-map.png'

const GlobalSection = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="section-title">Serving Global Markets <br /> with Realiablity</h2>
                <a href="/feeding-the-world">
                    <button className="btn btn-outline-success view-more-btn">
                        Export With Confidence
                    </button>
                </a>

            </div>
            {/* Map section */}
            <div className="mapSection">
                <img src={mapImage} alt="global-presence" className="img-fluid" />
            </div>
        </>
    )
}

export default GlobalSection;