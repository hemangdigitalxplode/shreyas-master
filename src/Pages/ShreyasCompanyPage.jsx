import React from 'react'
import ShreyasHome from '../components/ShreyasHome'
import ShreyasProduct from '../components/ShreyasProduct'

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
        </>
    )
}

export default ShreyasCompanyPage