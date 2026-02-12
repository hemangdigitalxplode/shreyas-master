import React from 'react'
import HeroCarbonNeutral from '../components/HeroCarbonNeutral'
import CarbonNeutralCoreEnergyVitals from '../components/CarbonNeutralCoreEnergyVitals'
import TechnicalExcellence from '../components/TechnicalExcellence'
import CarbonSustainabilityImpact from '../components/CarbonSustainabilityImpact'
import StrategicAlliance from '../components/StrategicAlliance'
import IntelligentEnergyManagement from '../components/IntelligentEnergyManagement'
import ReadyToDecarbonise from '../components/ReadyToDecarbonise'

const CarbonNeutralFace = () => {
    return (
        <>
            {/* hero section  */}
            <div className='heroBannerContainer'>
                <HeroCarbonNeutral />
            </div>

            {/* Core verticals */}
            <div className="container">
                <CarbonNeutralCoreEnergyVitals />
            </div>

            {/* Intelligent Energy Management */}
            <div className="container">
                <IntelligentEnergyManagement />
            </div>

            {/* Technical Excellence */}
            <div className="container">
                <TechnicalExcellence />
            </div>

            <div className="">
                <CarbonSustainabilityImpact />
            </div>

            <div className="container">
                <StrategicAlliance />
            </div>

            <div className="ctaBox">
                <ReadyToDecarbonise />
            </div>

        </>
    )
}

export default CarbonNeutralFace