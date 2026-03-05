import React, { useState } from "react";
import AboutImage from '../assets/images/home-about.jpeg'
import cardImg1 from '../assets/images/Background.png'
import cardImg2 from '../assets/images/Background2.png'
import cardImg3 from '../assets/images/Background3.png'
import cardImg4 from '../assets/images/potable-hero.jpg'
import SustainabilityTabs from "../components/SustainabilityTabs";
import UpcomingProjects from "../components/UpcomingProjects";
import EventsNewsSection from "../components/EventsNewsSection";
import GlobalSection from "../components/GlobalPresence";
import HeroSection from "../components/HeroSection";
import ExpandingSlider from "../components/ExpandingSlider";
import ExpandableCardSlider from "../components/ExpandableCardSlider";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import shreyasLogo from '../assets/images/new-shreyas.jpeg'
import keyaanLogo from '../assets/images/new-keyaan.jpeg'
import shreyasDistLogo from '../assets/images/new-shreyas-dist.jpeg'
import shreyasEnergyLogo from '../assets/images/new-energy-shreyas.jpeg'
import HomeSliderExpanding from "../components/HomeSliderExpanding";
import UpcomingProjectsThumb from '../assets/images/upcoming-projects.jpeg';

const Home = () => {
    const [activeTab, setActiveTab] = useState("verticals");
    return (
        <>
            <div className="heroBanner">
                <HeroSection />
            </div>
            <div className="container">
                {/* About section */}
                <div className="row align-items-center gy-4 aboutSection">
                    {/* LEFT: Image */}
                    <div className="col-md-6">
                        <img
                            src={AboutImage}
                            alt="About Shreyas Group"
                            className="img-fluid rounded home-about-img"
                        />
                    </div>
                    {/* RIGHT: Content */}
                    <div className="col-md-6">
                        <div className="leftCard">

                            <div className="eyebrow mb-2">
                                About Shreyas Group
                            </div>

                            <h1 className="mb-3">
                                Creating <br /> Integrated Value  <br /> for the Future
                            </h1>
                            <p>
                                Shreyas Group is a diversified industrial organization under visionary leadership of Hon’ble Chairman & Managing Director, Mr. Vinay Kumar Singh with a strong and growing presence across Distillery & Ethanol Production, Rice Milling & Sortex, Potable Liquor & Brewery, Renewable Solar Energy, and the proposed Aviation, Iron & Steel business.
                            </p>
                            <p>
                                Our distillery and ethanol division operates with advanced distillation technology and stringent quality, safety, and compliance standards to produce high-quality fuel ethanol meeting national and international specifications.
                            </p>
                            {/* CTA Button */}
                            <button className="btn aboutBtn mt-3">
                                Explore More
                            </button>

                        </div>
                    </div>

                </div>

                {/* Our business section */}
                <div className="ourBusinesses">
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                        <h2 className="mb-0 headBold">Our Business</h2>

                        <div className="business-tabs">
                            <button
                                className={`tab-btn ${activeTab === "verticals" ? "active" : ""}`}
                                onClick={() => setActiveTab("verticals")}
                            >
                                Verticals
                            </button>

                            <button
                                className={`tab-btn ${activeTab === "listed" ? "active" : ""}`}
                                onClick={() => setActiveTab("listed")}
                            >
                                List of Companies
                            </button>
                        </div>
                    </div>
                    {/* Tab Content */}
                    {activeTab === "verticals" && (
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={3}
                            navigation={{
                                nextEl: ".verticals-next",
                                prevEl: ".verticals-prev",
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                            }}
                        >
                            {/* Card 1 */}
                            <SwiperSlide>
                                <Link to="/food-grains">
                                    <div className="business-card">
                                        <img src={cardImg1} alt="Food & Grain" />
                                        <div className="overlay">
                                            <h5>Food & Grain</h5>
                                            <p className="d-none">
                                                Integrated rice processing across Basmati
                                                and Non-Basmati categories.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            {/* Card 2 */}
                            <SwiperSlide>
                                <Link to="/distrills-ethanol">
                                    <div className="business-card">
                                        <img src={cardImg2} alt="Distilleries & Ethanol" />
                                        <div className="overlay">
                                            <h5>Distilleries & Breweries</h5>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            {/* Card 3 */}
                            <SwiperSlide>
                                <Link to="/energy-biofuels">
                                    <div className="business-card">
                                        <img src={cardImg3} alt="Energy & Biofuels" />
                                        <div className="overlay">
                                            <h5>Energy & Biofuels</h5>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            {/* Card 4 */}
                            <SwiperSlide>
                                <Link to="/potable-spirits">
                                    <div className="business-card">
                                        <img src={cardImg4} alt="Energy & Biofuels" />
                                        <div className="overlay">
                                            <h5>Potable Spirits</h5>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/potable-spirits">
                                    <div className="business-card">
                                        <img src={UpcomingProjectsThumb} alt="Energy & Biofuels" />
                                        <div className="overlay">
                                            <h5>Upcoming Projects</h5>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    )}
                    {activeTab === "listed" && (
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={3}
                            navigation={{
                                nextEl: ".listed-next",
                                prevEl: ".listed-prev",
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                            }}
                        >
                            {/* Shreyas Sortex */}
                            <SwiperSlide>
                                <Link to="/shreyas-company">
                                    <div className="business-card">
                                        <img src={shreyasLogo} alt="Shreyas Sortex Industries Private Limited" />
                                        <div className="overlay">
                                            <h5>Shreyas Sortex Industries Pvt. Ltd.</h5>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            {/* Keyaan Distilleries */}
                            <SwiperSlide>
                                <Link to="/keyan-distelleries-pvt-ltd">
                                    <div className="business-card">
                                        <img src={keyaanLogo} alt="Keyaan Distilleries Private Limited" />
                                        <div className="overlay">
                                            <h5>Keyaan Distilleries Pvt. Ltd.</h5>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            {/* Shreyas Distilleries & Energy */}
                            <SwiperSlide>
                                <Link to="/distrills-ethanol">
                                    <div className="business-card">
                                        <img src={shreyasDistLogo} alt="Shreyas Distilleries & Energy Private Limited" />
                                        <div className="overlay">
                                            <h5>Shreyas Distilleries & Energy Pvt. Ltd.</h5>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            {/* Shreyas RE Energy */}
                            <SwiperSlide>
                                <Link to="/energy-biofuels">
                                    <div className="business-card">
                                        <img src={shreyasEnergyLogo} alt="Shreyas RE Energy Pvt Ltd." />
                                        <div className="overlay">
                                            <h5>Shreyas RE Energy Pvt Ltd.</h5>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    )}
                </div>

            </div>

            {/* slider section */}
            <div className="d-none">
                <div className="my-5">
                    <ExpandingSlider />
                </div>
            </div>
            {/* New slider here */}
            <div className="newSliderExpandingTabs">
                <HomeSliderExpanding />
            </div>
            {/* Sustainability section */}
            <div className="my-5">
                <SustainabilityTabs />
            </div>
            {/* map section */}
            <div className="container">
                <div className="my-5">
                    <GlobalSection />
                </div>
            </div>
            {/* upcoming projects */}
            <div className="container">
                <div className="my-5">
                    <UpcomingProjects />
                </div>
            </div>
            {/* Event section  */}
            <div className="container">
                <div className="my-5">
                    <EventsNewsSection />
                </div>
            </div>
            {/* our journey */}
            <div className="container">
                <div className="my-5">
                    <ExpandableCardSlider />
                </div>
            </div>
        </>
    )

}

export default Home;