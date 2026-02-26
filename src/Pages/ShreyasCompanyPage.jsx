import React from 'react'
import ShreyasHome from '../components/ShreyasHome'
import ShreyasProduct from '../components/ShreyasProduct'
import WhyChooseSection from '../components/WhyChooseSection'
import BulkOrderInquiry from '../components/BulkOrderInquiry'

const ShreyasCompanyPage = () => {
    return (
        <>
            <div className='heroBannerContainer'>
                <ShreyasHome />
            </div>

            {console.log("Page rendered!")}
            <div className="">

                <ShreyasProduct />
            </div>

            <div className="whySection">
                <WhyChooseSection />
            </div>

            <div className="bulkImportEnq">
                <BulkOrderInquiry />
            </div>
        </>
    )
}

export default ShreyasCompanyPage