import React, { useEffect, useState } from "react";
import heroImage from '../assets/images/strength.jpg';

const EmpoweringHero = () => {
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
            subtitle: "Established Excellence in Steel Manufacturing",
            titleBold: "Empowering Our Ecosystem",
            desc:
                "Building a future where our growth translates into progress for the communities we serve.",
            stats: [
                { value: "7+MW", label: "Integrated Power Capacity" },
                { value: "100% Renewable", label: "Biofuel-Driven Energy" },
                { value: "Multi-Fuel", label: "Biomass Flexiblity" },
                { value: "Zero Emission", label: "Clean Energy Systems" },
            ],
            ctaBtn: "Discover Our Impact"
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

                                    <h5 className="subtitle">{slide.subtitle}</h5>
                                    <h1>
                                        <span
                                            className="headBold"
                                            dangerouslySetInnerHTML={{ __html: slide.titleBold }}
                                        ></span>
                                    </h1>

                                    {/* DESC */}
                                    <p>{slide.desc}</p>

                                    {/* CTA */}
                                    <button className="btn hero-btn foodGrainHeroBtn">
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

export default EmpoweringHero