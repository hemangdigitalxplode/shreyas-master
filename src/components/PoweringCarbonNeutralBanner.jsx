import React, { useEffect, useState } from "react";
import heroImage from '../assets/images/powering-carbon-banner.png';

const PoweringCarbonNeutralBanner = () => {
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
            titleBold: "Empowering Future by Renewable Energy",
            desc: "Transitioning our manufacturing hubs to 100% clean energy to ensure a sustainable industrial legacy.",
            ctaBtn: "Explore Our Energy"
        }
    ];

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
                            className="hero-img"
                        />
                        {/* Overlay */}
                        <div className="hero-overlay-potable">
                            <div className="container">
                                <div className="hero-content ethanolHeroContent">
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
                                    <button className="btn hero-btn foodGrainHeroBtn d-none">
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

export default PoweringCarbonNeutralBanner;