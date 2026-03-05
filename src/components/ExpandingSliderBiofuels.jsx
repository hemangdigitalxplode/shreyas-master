import React, { useState } from 'react'
import Slider1 from '../assets/images/bioSlider1.jpg'
import Slider2 from '../assets/images/sliderImage2.jpg'
import Slider3 from '../assets/images/sliderImage3.jpg'
import Slider4 from '../assets/images/sliderImage4.jpg'
import Slider5 from '../assets/images/slider-5.png'

const slidesData = [
    {
        id: 1,
        img: Slider1,
        title: "Title",
        boxTitle: "State of the Art Manufacturing Infrastructure",
        boxSubTitle: "Energy Efficient Technology",
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
        boxTitle: "Automatic Process Control",
        boxSubTitle: "High Scale Standard",
    },
    {
        id: 4,
        img: Slider5,
        title: "Title",
        boxTitle: "High Quality Standard",
        boxSubTitle: "World Class Quality Lab",
    },
];

const ExpandingSliderBiofuels = () => {
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

                        {/* ✅ Title only on inactive slides */}
                        {activeIndex !== index && (
                            <h2 className="title">{slide.boxTitle}</h2>
                        )}

                        {/* ✅ Info box only on active slide */}
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

export default ExpandingSliderBiofuels