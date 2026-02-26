import { useState } from "react";
import AgeVerificationModal from "../components/AgeVerificationModal";
import KeyanHero from '../components/KeyanHero'
import HeartKPDL from '../components/HeartKPDL'
import B2B from '../components/B2B'
import WhyKpdl from '../components/WhyKpdl'
import QualityControlKpdl from '../components/QualityControlKpdl'
import GreenerTomorrow from '../components/GreenerTomorrow'

const Keyandistelleries = () => {
    const [verified, setVerified] = useState(false);
    return (
        <>
            {/* Blur Content Until Verified */}
            <div className={!verified ? "blur-content" : ""}>

                {/* hero section */}
                <div className='heroBannerContainer'>
                    <KeyanHero />
                </div>

                <div className="container">
                    <HeartKPDL />
                </div>

                {/* B2B product catalogue */}
                <div className="container">
                    <B2B />
                </div>

                <div className="container">
                    <QualityControlKpdl />
                </div>

                <div className='heroBannerContainer'>
                    <GreenerTomorrow />
                </div>

                {/* Why KPDL */}
                <section className='why-kdpl-section'>
                    <div className="container">
                        <WhyKpdl />
                    </div>
                </section>

            </div>

            {/* Age Verification Modal */}
            {!verified && (
                <AgeVerificationModal
                    onAccept={() => setVerified(true)}
                />
            )}
        </>
    )
}

export default Keyandistelleries