import React from 'react'
import cardImg1 from '../assets/images/ethanol-card-1.jpg'
import cardImg2 from '../assets/images/ethanol-card-2.jpg'
import cardImg3 from '../assets/images/ethanol-card-3.jpg'
import cardImg4 from '../assets/images/ethanol-card-4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CoreCapibilities = () => {
    const coreCapabilitiesData = [
        {
            id: 1,
            image: cardImg1,
            text: "World-class Brewery with Latest Technologies",
        },
        {
            id: 2,
            image: cardImg2,
            text: "Finest Indian Malt Spirits",
        },
        {
            id: 3,
            image: cardImg3,
            text: "Captive power generation and optimised steam utilities",
        },
        {
            id: 4,
            image: cardImg4,
            text: "Efficient by-product management supporting circular economy practices",
        },
        {
            id: 5,
            image: cardImg4,
            text: "Production of Finest Indian Malt Whiskey, World-class Maturation Facilities",
        },
    ];


    return (
        <>
            <section className="core-capabilities-section">
                <div className="container">
                    <h2 className="core-capabilities-heading">Core Capabilities</h2>

                    {/* Swiper should NOT be wrapped in grid styles */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={4}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {coreCapabilitiesData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="core-capabilities-card">
                                    <div className="core-capabilities-image">
                                        <img src={item.image} alt="Core capability" />
                                    </div>
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

export default CoreCapibilities