import React, { useState } from "react";
import Slider1 from '../assets/images/slider-1.png'
import Slider2 from '../assets/images/slider-2.png'
import Slider3 from '../assets/images/slider-3.png'
import Slider4 from '../assets/images/slider-4.png'
import Slider5 from '../assets/images/slider-5.png'

const slidesData = [
    {
        id: 1,
        img: Slider1,
        title: "Title",
        boxTitle: "State of the Art Manufacturing Infrastructure",
        boxSubTitle: "<b>World Class</b> Distillation",
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
        boxSubTitle: "Standard Manufacturing Practices",
    },
    {
        id: 4,
        img: Slider4,
        title: "Title",
        boxTitle: "Experience the World-Class Quality",
        boxSubTitle: "International Quality Standard",
    },
    {
        id: 4,
        img: Slider5,
        title: "Title",
        boxTitle: "High Capacity Manufacturing",
        boxSubTitle: "Export to 40+ Countries",
    },
];


const ExpandingSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
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
                            <div className="info-right" dangerouslySetInnerHTML={{ __html: slide.boxSubTitle }} />

                        </div>
                    )}
                </div>
            ))}

        </section>
    );
};

export default ExpandingSlider;
