import React, { useEffect, useState } from "react";
import heroImage from '../assets/images/banner-n-sust-m.png';
import heroImage2 from '../assets/images/sust-banner-2.jpeg';
import heroImage3 from '../assets/images/sust-banner-3.jpeg';

const SustainabilityHubBanner = () => {
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
            titleBold: "Committed to a <br /> Greener Tomorrow.",
            desc: "At Shreyas Group, we integrate sustainable practices into every stage of our value chain, ensuring growth that respects the planet.",
            ctaBtn: "Download Sustainability Report"
        },
        {
            id: 2,
            image: heroImage2,
            subtitle: "Established Excellence in Steel Manufacturing",
            titleBold: "Committed to a <br /> Greener Tomorrow.",
            desc: "At Shreyas Group, we integrate sustainable practices into every stage of our value chain, ensuring growth that respects the planet.",
            ctaBtn: "Download Sustainability Report"
        },
        {
            id: 3,
            image: heroImage3,
            subtitle: "Established Excellence in Steel Manufacturing",
            titleBold: "Committed to a <br /> Greener Tomorrow.",
            desc: "At Shreyas Group, we integrate sustainable practices into every stage of our value chain, ensuring growth that respects the planet.",
            ctaBtn: "Download Sustainability Report"
        },
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
                            className="hero-img-food-grains"
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
                                    <button className="btn hero-btn foodGrainHeroBtn">
                                        {slide.ctaBtn}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                {/* Bottom Controls Wrapper */}
                <div className="hero-controls-sust">

                    {/* Progress line */}
                    <div className="hero-controls__progress d-none">
                        <span className="hero-controls__progress-indicator"></span>
                    </div>

                    {/* Stats + Arrows */}
                    <div className="hero-controls__row">

                        {/* Stats */}
                        <div className="hero-controls__stats">
                            {heroSlides[activeSlide]?.stats?.map((stat, i) => (
                                <div key={i} className="hero-controls__stat">
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="hero-controls__arrows">
                            <button
                                className="hero-controls__arrow"
                                onClick={() =>
                                    setActiveSlide(
                                        activeSlide === 0 ? heroSlides.length - 1 : activeSlide - 1
                                    )
                                }
                            >
                                <i class="fa-solid fa-arrow-left"></i>
                            </button>

                            <button
                                className="hero-controls__arrow"
                                onClick={() =>
                                    setActiveSlide(
                                        activeSlide === heroSlides.length - 1 ? 0 : activeSlide + 1
                                    )
                                }
                            >
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SustainabilityHubBanner;