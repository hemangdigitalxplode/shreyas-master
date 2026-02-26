import React, { useState } from "react";
import PotableHero from "../components/PotableHero";
import AboutPotable from "../components/AboutPotable";
import IntegratedBeveragesOperations from "../components/IntegratedBeveragesOperations";
import ProductPortfolio from "../components/ProductPortfolio";
import ExpandingSliderPotable from "../components/ExpandingSliderPotable";
import PotableQuality from "../components/PotableQuality";
import PotableSustainability from "../components/PotableSustainability";
import PotableGrowthFuture from "../components/PotableGrowthFuture";
import AgeVerificationModal from "../components/AgeVerificationModal";


const PotableSpritis = () => {
    const [verified, setVerified] = useState(false);
    return (
        <>
            {/* Blur When Not Verified */}
            <div className={!verified ? "blur-content" : ""}>

                <div className='heroBannerContainer'>
                    <PotableHero />
                </div>

                {/* about-us */}
                <div className='heroBannerContainer container'>
                    <AboutPotable />
                </div>

                {/* Tab section */}
                <div className='container'>
                    <IntegratedBeveragesOperations />
                </div>

                {/* Portfolio section */}
                <div className="container">
                    <ProductPortfolio />
                </div>

                {/* Slider */}
                <div className="potableSliderContainer">
                    <ExpandingSliderPotable />
                </div>

                {/* Quality */}
                <div className="container">
                    <PotableQuality />
                </div>

                {/* Sustainability */}
                <div className="container my-5">
                    <PotableSustainability />
                </div>

                {/* Growth */}
                <div className="container">
                    <PotableGrowthFuture />
                </div>

            </div>

            {/* Age Modal */}
            {!verified && (
                <AgeVerificationModal
                    onAccept={() => setVerified(true)}
                />
            )}

        </>
    )
}

export default PotableSpritis;