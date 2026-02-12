import React from 'react'
import { Shield, Lightbulb, Award } from "react-bootstrap-icons";



const valuesData = [
    {
        id: 1,
        title: "Integrity",
        description: "Doing the right thing for our farmers and global partners.",
        icon: Shield,
        bgClass: "bg-success-subtle",
        iconClass: "text-success",
    },
    {
        id: 2,
        title: "Innovation",
        description: "Utilizing AI-driven technology for a sustainable future.",
        icon: Lightbulb,
        bgClass: "bg-warning-subtle",
        iconClass: "text-warning",
    },
    {
        id: 3,
        title: "Quality",
        description: "Maintaining excellence across our integrated value chain.",
        icon: Award,
        bgClass: "bg-success-subtle",
        iconClass: "text-success",
    },
    {
        id: 4,
        title: "Safety",
        description: "Ensuring a secure environment for every team member.",
        icon: Award,
        bgClass: "bg-warning-subtle",
        iconClass: "text-warning",
    },
];

const JourneryVision = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                Core Foundation
                            </small>
                            <h2 className="fw-bold mt-1">Our Values</h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Transitioning from the "Big Picture" to the "Inner Culture" the
                                principles that guide everything we do.
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="row g-4">
                        {valuesData.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.id} className="col-12 col-sm-6 col-lg-3">
                                    <div className="card h-100 border rounded-4">
                                        <div className="card-body">
                                            <div
                                                className={`d-inline-flex align-items-center justify-content-center rounded-3 mb-3 ${item.bgClass}`}
                                                style={{ width: "56px", height: "56px" }}
                                            >
                                                <Icon className={item.iconClass} size={24} />
                                            </div>

                                            <h5 className="fw-semibold">{item.title}</h5>

                                            <p className="text-muted small mb-0">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default JourneryVision