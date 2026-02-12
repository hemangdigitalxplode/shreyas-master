import React from 'react'
import CarrerImage from '../assets/images/build-carrer.jpg';

const CarrerJourney = () => {

    return (
        <>
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center g-5">

                        {/* LEFT – IMAGE PLACEHOLDER */}
                        <div className="col-lg-6">
                            <div
                                className="w-100 rounded-4 bg-secondary-subtle d-flex align-items-center justify-content-center"
                                style={{ minHeight: "420px" }}
                            >
                                {/* Replace this div with <img /> later */}
                                <img src={CarrerImage} className='img-fluid' alt='carrer-image' />

                            </div>
                        </div>

                        {/* RIGHT – CONTENT */}
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                Professional Growth
                            </small>

                            <h2 className="fw-bold mt-2 mb-3">
                                Build Your Career
                            </h2>

                            <p className="text-muted mb-4">
                                Join a team that values your growth as much as our own.
                                With internal training programs, mentorship opportunities,
                                and the chance to work with world-class infrastructure,
                                your career potential is limitless.
                            </p>

                            {/* FEATURES LIST */}
                            <div className="d-flex flex-column gap-3 mb-4">

                                <div className="border rounded-3 p-3 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-success-subtle rounded-circle p-2">
                                            <i className="bi bi-graph-up-arrow text-success"></i>
                                        </div>
                                        <span className="fw-medium">
                                            Structured Career Paths
                                        </span>
                                    </div>
                                    <i className="bi bi-check-circle-fill text-warning"></i>
                                </div>

                                <div className="border rounded-3 p-3 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-success-subtle rounded-circle p-2">
                                            <i className="bi bi-lightning-charge text-success"></i>
                                        </div>
                                        <span className="fw-medium">
                                            Skill Enhancement Workshops
                                        </span>
                                    </div>
                                    <i className="bi bi-check-circle-fill text-warning"></i>
                                </div>

                                <div className="border rounded-3 p-3 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-success-subtle rounded-circle p-2">
                                            <i className="bi bi-globe text-success"></i>
                                        </div>
                                        <span className="fw-medium">
                                            Global Exposure in Agri-Export Markets
                                        </span>
                                    </div>
                                    <i className="bi bi-check-circle-fill text-warning"></i>
                                </div>

                            </div>

                            {/* STATS */}
                            <div className="d-flex gap-5">
                                <div>
                                    <h3 className="fw-bold text-success mb-0">25+</h3>
                                    <small className="text-muted">
                                        Countries Exported
                                    </small>
                                </div>

                                <div>
                                    <h3 className="fw-bold text-success mb-0">15+</h3>
                                    <small className="text-muted">
                                        Years of Excellence
                                    </small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CarrerJourney