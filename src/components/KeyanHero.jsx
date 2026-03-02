import React, { useEffect, useState } from 'react'
import heroImage from '../assets/images/keyan-banner.jpg';
import stamp3 from '../assets/images/kpdl-logo.jpg'

const KeyanHero = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Auto slide (optional – remove if not needed)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) =>
                prev === heroSlides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const heroSlides = [
        {
            id: 1,
            image: heroImage,
            titleBold: "Finest &<br/> Efficient Distillation at Scale",
            desc:
                "A premier production facility dedicated to high-volume manufacturing of ENA, Malt Spirits, and Ethanol with uncompromising quality standards.",
            stats: [
                { value: "7+MW", label: "Integrated Power Capacity" },
                { value: "100% Renewable", label: "Biofuel-Driven Energy" },
                { value: "Multi-Fuel", label: "Biomass Flexiblity" },
                { value: "Zero Emission", label: "Clean Energy Systems" },
            ],
            ctaBtn: "Explore Production Capacity"
        }
    ];

    const handleOpenPPT = () => {
        window.open("/presentations/company-profile.pptx", "_blank");
    };
    return (
        <>
            <section className="hero-section">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${activeSlide === index ? "active" : ""}`}
                    >
                        {/* Image */}
                        <img
                            src={slide.image}
                            alt="Hero"
                            className="hero-img-food-grains"
                        />
                        {/* Overlay */}
                        <div className="hero-overlay-potable">
                            <div className="container">
                                <div className="hero-content ethanolHeroContent">
                                    {/* STAMPS */}
                                    <div className="hero-stamps">
                                        <img src={stamp3} alt="Shreyas Logo" />
                                        {/* <img src={stamp1} alt="KDPL Logo" /> */}
                                    </div>

                                    {/* TITLE */}
                                    <h1>
                                        <span
                                            className="headBold"
                                            dangerouslySetInnerHTML={{ __html: slide.titleBold }}
                                        ></span>
                                    </h1>

                                    {/* DESC */}
                                    <p>{slide.desc}</p>

                                    {/* CTA */}
                                    <button
                                        className="btn hero-btn foodGrainHeroBtn"
                                        onClick={handleOpenPPT}
                                    >
                                        {slide.ctaBtn}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

        </>
    )
}

export default KeyanHero