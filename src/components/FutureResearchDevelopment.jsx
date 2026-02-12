import React from 'react'
import ResearchImage from '../assets/images/research-development.jpg'

const FutureResearchDevelopment = () => {
    return (
        <>
            <section className="rd-sec-wrapper">
                <div className="rd-sec-container">

                    {/* LEFT CONTENT */}
                    <div className="rd-sec-left">

                        <span className="rd-sec-tag">The Future</span>

                        <h2 className="rd-sec-heading">
                            Research & Development
                        </h2>

                        <p className="rd-sec-sub">
                            Where Tradition Meets Science
                        </p>

                        {/* Cards */}
                        <div className="rd-card-list">

                            <div className="rd-card">
                                <div className="rd-icon">🧪</div>
                                <div>
                                    <h4>Innovation Labs</h4>
                                    <p>
                                        Developing new parboiling techniques to retain higher
                                        nutritional value while enhancing texture and taste profiles.
                                    </p>
                                </div>
                            </div>

                            <div className="rd-card">
                                <div className="rd-icon">🌐</div>
                                <div>
                                    <h4>Product Development</h4>
                                    <p>
                                        Crafting specialty rice blends tailored for global culinary
                                        needs, from sushi rice to aromatic pilafs.
                                    </p>
                                </div>
                            </div>

                            <div className="rd-card">
                                <div className="rd-icon">🌱</div>
                                <div>
                                    <h4>Sustainable Tech</h4>
                                    <p>
                                        Pioneering R&D on biodegradable packaging materials and
                                        carbon-neutral processing methods.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Stats */}
                        <div className="rd-stats-row">

                            <div>
                                <h3>25+</h3>
                                <span>Patents Filed</span>
                            </div>

                            <div>
                                <h3>12</h3>
                                <span>Research Partners</span>
                            </div>

                            <div>
                                <h3>50+</h3>
                                <span>Scientists & Engineers</span>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE PLACEHOLDER */}
                    <div className="rd-sec-right">
                        <div className="infraImage">
                            <img src={ResearchImage} className='img-fluid' />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default FutureResearchDevelopment