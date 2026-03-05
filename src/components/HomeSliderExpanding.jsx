import { useState } from "react";
import foodGrainsSlider1 from '../assets/images/slider-1.png'
import foodGrainsSlider2 from '../assets/images/slider-2.png'
import foodGrainsSlider3 from '../assets/images/slider-3.png'
import foodGrainsSlider4 from '../assets/images/slider-4.png'
import foodGrainsSlider5 from '../assets/images/slider-5.png'
// Ethnol inputs
import ethanolSlider1 from '../assets/images/plant-picture-clean-room-equipment-stainless-steel-machines.jpg'
import ethanolSlider2 from '../assets/images/slider-2.png'
import ethanolSlider3 from '../assets/images/contemporary-winemaker-factory.jpg'
import ethanolSlider4 from '../assets/images/Layer-616.jpg'
import ethanolSlider5 from '../assets/images/Layer-617.jpg'
// Biofuels inputs
import energyBiofuelsSlider1 from '../assets/images/bioSlider1.jpg'
import energyBiofuelsSlider2 from '../assets/images/sliderImage2.jpg'
import energyBiofuelsSlider3 from '../assets/images/sliderImage3.jpg'
import energyBiofuelsSlider4 from '../assets/images/sliderImage4.jpg'
import energyBiofuelsSlider5 from '../assets/images/slider-5.png'
// Potable Inputs
import potableSpiritsSlider1 from '../assets/images/sliderImage-1.jpg'
import potableSpiritsSlider2 from '../assets/images/sliderImage2.jpg'
import potableSpiritsSlider3 from '../assets/images/sliderImage3.jpg'
import potableSpiritsSlider4 from '../assets/images/sliderImage4.jpg'
import potableSpiritsSlider5 from '../assets/images/slider-5.png'

const HomeSliderExpanding = () => {
    const foodGrainsSlidesData = [
        {
            id: 1,
            img: foodGrainsSlider1,
            title: "Title",
            boxTitle: "State-of-the-Art Grain Processing Infrastructure",
            boxSubTitle: "<b>Japanese Sortex</b> Advanced Cleaning Technology",
        },
        {
            id: 2,
            img: foodGrainsSlider2,
            title: "Title",
            boxTitle: "Advanced Sorting & Grading Facilities",
            boxSubTitle: "Global Food Safety & Quality Standards",
        },
        {
            id: 3,
            img: foodGrainsSlider3,
            title: "Title",
            boxTitle: "Integrated Rice & Food Grain Processing",
            boxSubTitle: "Standardized Manufacturing Practices",
        },
        {
            id: 4,
            img: foodGrainsSlider4,
            title: "Title",
            boxTitle: "High Capacity Milling & Packaging",
            boxSubTitle: "International Quality Certifications",
        },
        {
            id: 5,
            img: foodGrainsSlider5,
            title: "Title",
            boxTitle: "Experience Premium Food Grain Quality",
            boxSubTitle: "Exporting to 40+ Countries Worldwide",
        },
    ];
    const ethanolSlidesData = [
        {
            id: 1,
            img: ethanolSlider1,
            title: "Title",
            boxTitle: "Advanced Ethanol Manufacturing",
            boxSubTitle: "Precision Fermentation & Distillation Process",
        },
        {
            id: 2,
            img: ethanolSlider2,
            title: "Title",
            boxTitle: "Modern Processing Infrastructure",
            boxSubTitle: "High Efficiency Production Standards",
        },
        {
            id: 3,
            img: ethanolSlider3,
            title: "Title",
            boxTitle: "Integrated Biofuel Processing",
            boxSubTitle: "Sustainable & Zero Waste Operations",
        },
        {
            id: 4,
            img: ethanolSlider4,
            title: "Title",
            boxTitle: "High Capacity Ethanol Plant",
            boxSubTitle: "Consistent Bulk Production Capability",
        },
        {
            id: 5,
            img: ethanolSlider5,
            title: "Title",
            boxTitle: "World-Class Quality Assurance",
            boxSubTitle: "Meeting Global Biofuel Standards",
        },
    ];
    const energyBiofuelsSlidesData = [
        {
            id: 1,
            img: energyBiofuelsSlider1,
            title: "Title",
            boxTitle: "State-of-the-Art Energy Biofuel Infrastructure",
            boxSubTitle: "High-Efficiency & Sustainable Technology",
        },
        {
            id: 2,
            img: energyBiofuelsSlider2,
            title: "Title",
            boxTitle: "Advanced Biofuel Processing Facilities",
            boxSubTitle: "Compliance with Global Energy Standards",
        },
        {
            id: 3,
            img: energyBiofuelsSlider3,
            title: "Title",
            boxTitle: "Automated Energy Process Control",
            boxSubTitle: "High-Scale & Reliable Operations",
        },
        {
            id: 4,
            img: energyBiofuelsSlider4,
            title: "Title",
            boxTitle: "Premium Quality Biofuel Standards",
            boxSubTitle: "World-Class Energy Testing Laboratory",
        },
        {
            id: 5,
            img: energyBiofuelsSlider5,
            title: "Title",
            boxTitle: "Sustainable Green Energy Solutions",
            boxSubTitle: "Future-Ready Renewable Fuel Systems",
        },
    ];
    const potableSpiritsSlidesData = [
        {
            id: 1,
            img: potableSpiritsSlider1,
            title: "Title",
            boxTitle: "Manufacturing & Process Excellence",
            boxSubTitle: "World-Class Distillation Systems",
        },
        {
            id: 2,
            img: potableSpiritsSlider2,
            title: "Title",
            boxTitle: "Advanced Bottling & Processing Facilities",
            boxSubTitle: "Global Quality & Compliance Standards",
        },
        {
            id: 3,
            img: potableSpiritsSlider3,
            title: "Title",
            boxTitle: "Automated Quality Process Control",
            boxSubTitle: "High-Scale Production Precision",
        },
        {
            id: 4,
            img: potableSpiritsSlider4,
            title: "Title",
            boxTitle: "High Capacity Manufacturing",
            boxSubTitle: "More Than 11 Lakh Cases Annual Production",
        },
        {
            id: 5,
            img: potableSpiritsSlider5,
            title: "Title",
            boxTitle: "Premium Quality Standards",
            boxSubTitle: "World-Class Testing & Quality Lab",
        },
    ];


    const [activeTab, setActiveTab] = useState("green");
    const [foodGrainsActiveIndex, setFoodGrainsActiveIndex] = useState(0);
    const [ethanolActiveIndex, setEthanolActiveIndex] = useState(0);
    const [energyBiofuelsActiveIndex, setEnergyBiofuelsActiveIndex] = useState(0);
    const [potableSpiritsActiveIndex, setPotableSpiritsActiveIndex] = useState(0);


    return (
        <>
            <section className="container my-5">
                {/* Header Row */}
                <div className="sustainability-header">
                    <h2 className="sustainability-title">Manufacturing Infrastructure</h2>

                    <div className="sustainability-tabs">
                        <button
                            className={`s-tab ${activeTab === "green" ? "active" : ""}`}
                            onClick={() => setActiveTab("green")}
                        >
                            Food & Grains
                        </button>

                        <button
                            className={`s-tab ${activeTab === "csr" ? "active" : ""}`}
                            onClick={() => setActiveTab("csr")}
                        >

                            Distilleries & Breweries
                        </button>

                        <button
                            className={`s-tab ${activeTab === "cert" ? "active" : ""}`}
                            onClick={() => setActiveTab("cert")}
                        >
                            Energy & Biofuels
                        </button>

                        <button
                            className={`s-tab ${activeTab === "roadmap" ? "active" : ""}`}
                            onClick={() => setActiveTab("roadmap")}
                        >
                            Potable Spirits
                        </button>
                    </div>
                </div>

                {/* Tab Content Placeholder */}
                <div className="mt-4">
                    {activeTab === "green" && (
                        <section className="slider-container-home-page">
                            {foodGrainsSlidesData.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`slide ${foodGrainsActiveIndex === index ? "active" : ""}`}
                                    onClick={() => setFoodGrainsActiveIndex(index)}
                                >
                                    <img src={slide.img} alt={slide.title} />

                                    {/* ✅ Overlay only on inactive slides */}
                                    {foodGrainsActiveIndex !== index && (
                                        <div className="slide-overlay"></div>
                                    )}

                                    {foodGrainsActiveIndex !== index && (
                                        <h2 className="title">{slide.boxTitle}</h2>
                                    )}

                                    {foodGrainsActiveIndex === index && (
                                        <div className="info-box">
                                            <div className="info-left">
                                                {slide.boxTitle}
                                            </div>
                                            <div
                                                className="info-right"
                                                dangerouslySetInnerHTML={{ __html: slide.boxSubTitle }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </section>
                    )}
                    {activeTab === "csr" && (
                        <section className="slider-container-home-page">
                            {ethanolSlidesData.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`slide ${ethanolActiveIndex === index ? "active" : ""}`}
                                    onClick={() => setEthanolActiveIndex(index)}
                                >
                                    <img src={slide.img} alt={slide.title} />

                                    {/* ✅ Overlay only on inactive slides */}
                                    {ethanolActiveIndex !== index && (
                                        <div className="slide-overlay"></div>
                                    )}

                                    {/* Title only on inactive slides */}
                                    {ethanolActiveIndex !== index && (
                                        <h2 className="title">{slide.boxTitle}</h2>
                                    )}

                                    {/* Info box only on active slide */}
                                    {ethanolActiveIndex === index && (
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
                    )}

                    {activeTab === "cert" && (
                        <section className="slider-container-home-page">
                            {energyBiofuelsSlidesData.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`slide ${energyBiofuelsActiveIndex === index ? "active" : ""
                                        }`}
                                    onClick={() => setEnergyBiofuelsActiveIndex(index)}
                                >
                                    <img src={slide.img} alt={slide.title} />

                                    {/* ✅ Overlay only on inactive slides */}
                                    {energyBiofuelsActiveIndex !== index && (
                                        <div className="slide-overlay"></div>
                                    )}

                                    {/* Title only on inactive slides */}
                                    {energyBiofuelsActiveIndex !== index && (
                                        <h2 className="title">{slide.boxTitle}</h2>
                                    )}

                                    {/* Info box only on active slide */}
                                    {energyBiofuelsActiveIndex === index && (
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
                    )}

                    {activeTab === "roadmap" && (
                        <section className="slider-container-home-page">
                            {potableSpiritsSlidesData.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`slide ${potableSpiritsActiveIndex === index ? "active" : ""
                                        }`}
                                    onClick={() => setPotableSpiritsActiveIndex(index)}
                                >
                                    <img src={slide.img} alt={slide.title} />

                                    {/* ✅ Overlay only on inactive slides */}
                                    {potableSpiritsActiveIndex !== index && (
                                        <div className="slide-overlay"></div>
                                    )}

                                    {/* Title only on inactive slides */}
                                    {potableSpiritsActiveIndex !== index && (
                                        <h2 className="title">{slide.boxTitle}</h2>
                                    )}

                                    {/* Info box only on active slide */}
                                    {potableSpiritsActiveIndex === index && (
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
                    )}
                </div>

            </section>
        </>
    )
}

export default HomeSliderExpanding