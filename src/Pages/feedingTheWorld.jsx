import React from 'react'
import FeedingWorldHero from '../components/FeedingWorldHero'
import ServingGlobalMarket from '../components/ServingGlobalMarket'
import ExportRegions from '../components/ExportRegions'
import InternationalOperations from '../components/InternationalOperations'
import LogisticsSupplyChain from '../components/LogisticsSupplyChain'

const FeedingTheWorld = () => {
    return (
        <>
            {/* hero section  */}
            <div className='heroBannerContainer'>
                <FeedingWorldHero />
            </div>

            {/* Serving global markets */}
            <div className="container">
                <ServingGlobalMarket />
            </div>

            {/* Export regions */}
            <div className="container">
                <ExportRegions />
            </div>

            {/* Internation operations */}
            <div className="container">
                <InternationalOperations />
            </div>

            {/* Logistics & supply  */}
            <div className="">
                <LogisticsSupplyChain />
            </div>

        </>
    )
}

export default FeedingTheWorld