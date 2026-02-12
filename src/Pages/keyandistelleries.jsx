import React from 'react'
import KeyanHero from '../components/KeyanHero'
import HeartKPDL from '../components/HeartKPDL'
import B2B from '../components/B2B'
import WhyKpdl from '../components/WhyKpdl'
import QualityControlKpdl from '../components/QualityControlKpdl'
import GreenerTomorrow from '../components/GreenerTomorrow'

const Keyandistelleries = () => {
    return (
        <>
            {/* hero section  */}
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




        </>
    )
}

export default Keyandistelleries