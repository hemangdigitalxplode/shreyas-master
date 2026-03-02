import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/hero_banner.png";
import heroImage2 from "../assets/images/Background2.png";
import heroImage3 from "../assets/images/Background3.png";

const HeroSection = () => {
  const heroSlides = [
    {
      id: 1,
      image: heroImage,
      titleBold: "Processed with Care",
      titleSub: "Delivered with Trust",
      desc:
        "Delivering premium Basmati and Non-Basmati rice through advanced technology, certified quality systems, and sustainable operations.",
      stats: [
        { value: "74 MT", label: "/ Hour Capacity" },
        { value: "10+", label: "Global Certifications" },
        { value: "40+", label: "Export Countries" },
        { value: "Zero", label: "Discharge Operations" },
      ],
      button: {
        label: "Know More",
        link: "/food-grains",
      },
    },
    {
      id: 2,
      image: heroImage2,
      titleBold: "State of the Art Manufacturing",
      titleSub: "Infrastructure Excellence",
      desc:
        "World-class Japanese milling, advanced sortex systems, and scalable infrastructure built for quality and efficiency.",
      stats: [
        { value: "100%", label: "Automation" },
        { value: "Japanese", label: "Sortex Tech" },
        { value: "ISO", label: "Certified Plants" },
        { value: "Zero", label: "Waste Policy" },
      ],
      button: {
        label: "Know More",
        link: "/delivery-purity",
      },
    },
    {
      id: 3,
      image: heroImage3,
      titleBold: "Sustainable & Responsible",
      titleSub: "Future Focused Growth",
      desc:
        "Committed to zero discharge operations, renewable energy adoption, and global quality benchmarks.",
      stats: [
        { value: "Green", label: "Energy Use" },
        { value: "Zero", label: "Liquid Discharge" },
        { value: "Eco", label: "Friendly Systems" },
        { value: "Global", label: "Compliance" },
      ],
      button: {
        label: "Know More",
        link: "/delivery-purity",
      },
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide (optional – remove if not needed)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  return (
    <section className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">

                <h1>
                  <span className="headBold">{slide.titleBold}</span> <br />
                  <span className="headSubText">{slide.titleSub}</span>
                </h1>

                <p>{slide.desc}</p>

                <div className="hero-stats">
                  {slide.stats.map((stat, i) => (
                    <div key={i}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <a href={slide.button.link} className="btn hero-btn">
                  {slide.button.label}
                </a>

              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Slider Arrows */}
      <div className="hero-arrows">
        <button
          className="hero-arrow left"
          onClick={() =>
            setActiveSlide(
              activeSlide === 0 ? heroSlides.length - 1 : activeSlide - 1
            )
          }
        >
          ←
        </button>

        <button
          className="hero-arrow right"
          onClick={() =>
            setActiveSlide(
              activeSlide === heroSlides.length - 1 ? 0 : activeSlide + 1
            )
          }
        >
          →
        </button>
      </div>
      {/* Thumbnail Previews */}
      <div className="hero-thumbnails">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-thumb ${activeSlide === index ? "active" : ""
              }`}
            onClick={() => setActiveSlide(index)}
          >
            <img src={slide.image} alt={`Preview ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
