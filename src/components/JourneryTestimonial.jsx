import React from 'react'

const JourneryTestimonial = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">

                            {/* Testimonial Card */}
                            <div
                                className="position-relative rounded-4 p-4 p-lg-5"
                                style={{ backgroundColor: "#0a7a0a" }}
                            >
                                {/* Quote Icon */}
                                <div
                                    className="position-absolute"
                                    style={{ top: "16px", left: "24px" }}
                                >
                                    <span
                                        className="fw-bold"
                                        style={{
                                            fontSize: "64px",
                                            lineHeight: "1",
                                            color: "#f4c430",
                                        }}
                                    >
                                        “
                                    </span>
                                </div>

                                {/* Text */}
                                <p className="text-white fs-5 mt-4 mb-4">
                                    The tech here is cutting-edge, but the people are what make
                                    Shreyas home. Every day, I'm surrounded by colleagues who
                                    inspire me to grow and excel.
                                </p>

                                {/* Author */}
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-semibold"
                                        style={{
                                            width: "42px",
                                            height: "42px",
                                            backgroundColor: "#f4c430",
                                            fontSize: "14px",
                                        }}
                                    >
                                        RP
                                    </div>

                                    <div>
                                        <div className="text-white fw-semibold">
                                            Rajesh Patel
                                        </div>
                                        <small className="text-white-50">
                                            Production Lead, 5 years at Shreyas
                                        </small>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default JourneryTestimonial;