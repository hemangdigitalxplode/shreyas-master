import React, { useState } from 'react'
import Slider1 from '../assets/images/plant-picture-clean-room-equipment-stainless-steel-machines.jpg'
import Slider2 from '../assets/images/slider-2.png'
import Slider3 from '../assets/images/contemporary-winemaker-factory.jpg'
import Slider4 from '../assets/images/Layer-616.jpg'
import Slider5 from '../assets/images/Layer-617.jpg'


const slidesData = [
    {
        id: 1,
        img: Slider1,
        title: "Title",
        boxTitle: "State of the Art Manufacturing Infrastructure",
        boxSubTitle: "Japanese Satake Milling & Sortex",
    },
    {
        id: 2,
        img: Slider2,
        title: "Title",
        boxTitle: "Advanced Processing Facilities",
        boxSubTitle: "Global Quality Standards",
    },
    {
        id: 3,
        img: Slider3,
        title: "Title",
        boxTitle: "Integrated Rice Processing",
        boxSubTitle: "Zero Discharge Operations",
    },
    {
        id: 4,
        img: Slider4,
        title: "Title",
        boxTitle: "High Capacity Manufacturing",
        boxSubTitle: "Export to 30+ Countries",
    },
    {
        id: 4,
        img: Slider5,
        title: "Title",
        boxTitle: "High Capacity Manufacturing",
        boxSubTitle: "Export to 30+ Countries",
    },
];

const ExpandingSliderEthanol = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <section className="slider-container">
                {slidesData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <img src={slide.img} alt={slide.title} />

                        {/* Vertical title (optional if you already have) */}
                        <h2 className="title">{slide.title}</h2>

                        {/* ✅ Bottom Left Info Box (ONLY ACTIVE SLIDE) */}
                        {activeIndex === index && (
                            <div className="info-box">
                                <div className="info-left">
                                    {slide.boxTitle}
                                </div>
                                <div className="info-right">
                                    {slide.boxSubTitle}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </section>

        </>
    )
}

export default ExpandingSliderEthanol