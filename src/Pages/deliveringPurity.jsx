import React from 'react'
import DeliveringHero from '../components/DeliveringHero'
import WorldClassInfrastructure from '../components/WorldClassInfrastructure'
import ProcessingFacilities from '../components/ProcessingFacilities'
import QualityControls from '../components/QualityControls'
import FutureResearchDevelopment from '../components/FutureResearchDevelopment'
import ExcellenceCTA from '../components/ExcellenceCTA'

const DeliveringPurity = () => {
    return (
        <>
            {/* hero section  */}
            <div className='heroBannerContainer'>
                <DeliveringHero />
            </div>

            {/* World class infra */}
            <div className="container">
                <WorldClassInfrastructure />
            </div>

            {/* Processing facilities */}
            <div className="container">
                <ProcessingFacilities />
            </div>

            {/* Quality controls */}
            <div className="container">
                <QualityControls />
            </div>

            {/* research & development */}
            <div className="container">
                <FutureResearchDevelopment />
            </div>

            <div className="ctaDiv">
                <ExcellenceCTA />
            </div>
        </>
    )
}

export default DeliveringPurity