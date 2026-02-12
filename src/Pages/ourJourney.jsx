import React from 'react'
import OurJourneyHero from '../components/OurJourneyHero'
import JourneryVision from '../components/JourneryVision'
import CarrerJourney from '../components/CarrerJourney'
import CultureJourney from '../components/CultureJourney'
import JourneryTestimonial from '../components/JourneryTestimonial'
import JourneryJobOpenings from '../components/JourneryJobOpenings'

const OurJourney = () => {
    return (
        <>
            <div className='heroBannerContainer'>
                <OurJourneyHero />
            </div>

            <div className="container">
                <JourneryVision />
            </div>

            <div className="container">
                <CarrerJourney />
            </div>

            <div className="container">
                <CultureJourney />
            </div>

            <div className="container">
                <JourneryTestimonial />
            </div>

            {/* Job section */}
            <div className="container">
                <JourneryJobOpenings />
            </div>




        </>
    )
}

export default OurJourney