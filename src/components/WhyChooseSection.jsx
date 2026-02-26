import React from "react";
import { Leaf, Cpu, Package } from "lucide-react";
import WhyImage from '../assets/images/why-choose.jpg'

const WhyChooseSection = () => {
    return (
        <section className="why-section">
            <div className="why-container">

                {/* LEFT IMAGE */}
                <div className="why-image">
                    <img src={WhyImage} className="w-100" />
                </div>

                {/* RIGHT CONTENT */}
                <div className="why-content">
                    <h2>Why Choose Our Grains?</h2>

                    <div className="why-item">
                        <div className="icon">
                            <Leaf size={22} />
                        </div>
                        <p>Non-GMO Certified</p>
                    </div>

                    <div className="why-item">
                        <div className="icon">
                            <Cpu size={22} />
                        </div>
                        <p>Advanced Sorting Technology</p>
                    </div>

                    <div className="why-item">
                        <div className="icon">
                            <Package size={22} />
                        </div>
                        <p>Custom Packaging Sizes (25kg / 50kg)</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseSection;