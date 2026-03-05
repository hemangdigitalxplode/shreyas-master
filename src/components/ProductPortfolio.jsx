import React from "react";
import cardImg1 from '../assets/images/potable-card-1.jpg'
import cardImg2 from '../assets/images/potable-card-2.jpg'
import cardImg3 from '../assets/images/potable-card-3.jpg'
import cardImg4 from '../assets/images/potable-card-4.jpg'
import cardImg5 from '../assets/images/beer.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductPortfolio = () => {
    const coreCapabilitiesData = [
        {
            id: 1,
            image: cardImg1,
            heading: 'Extra Neutral Alcohol (ENA)',
            text: "Grain and molasses based, high-purity alcohol for premium spirits",
        },
        {
            id: 2,
            image: cardImg4,
            heading: 'IMFL',
            text: "Automated bottling and packaging for Indian Made Foreign Liquor",
        },
        {
            id: 4,
            image: cardImg2,
            heading: 'CL & UPML',
            text: "Grain-based spirits designed for high-volume domestic markets",
        },
        {
            id: 3,
            image: cardImg3,
            heading: 'Malt Spirits',
            text: "Premium malt spirit production with optional aging capabilities",
        },
        {
            id: 5,
            image: cardImg5,   // new image import kar lena
            heading: 'Breweries',
            text: "State-of-the-art brewing facilities for high-quality beer production",
        },
    ];

    return (
        <>
            <section className="core-capabilities-section">
                <div className="container">
                    <h2 className="core-capabilities-heading">Product Portfolio</h2>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={4}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                    >
                        {coreCapabilitiesData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="core-capabilities-card">
                                    <div className="core-capabilities-image">
                                        <img src={item.image} alt={item.heading} />
                                    </div>
                                    <h2 className="potableHeading">{item.heading}</h2>
                                    <p className="core-capabilities-text">{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </section>
        </>
    )
}

export default ProductPortfolio;