import React from 'react'

const JourneryJobOpenings = () => {

    const jobsData = [
        {
            id: 1,
            title: "Senior Process Engineer",
            department: "Engineering",
            location: "Ahmedabad",
            type: "Full-time",
            posted: "2 days ago",
        },
        {
            id: 2,
            title: "Quality Control Specialist",
            department: "Engineering",
            location: "Mumbai",
            type: "Full-time",
            posted: "5 days ago",
        },
        {
            id: 3,
            title: "Supply Chain Manager",
            department: "Logistics",
            location: "Delhi",
            type: "Full-time",
            posted: "3 days ago",
        },
        {
            id: 4,
            title: "Warehouse Supervisor",
            department: "Logistics",
            location: "Ahmedabad",
            type: "Full-time",
            posted: "7 days ago",
        },
        {
            id: 5,
            title: "Export Sales Executive",
            department: "Sales",
            location: "Mumbai",
            type: "Full-time",
            posted: "1 day ago",
        },
        {
            id: 6,
            title: "Business Development Manager",
            department: "Sales",
            location: "Bangalore",
            type: "Full-time",
            posted: "4 days ago",
        },
        {
            id: 7,
            title: "HR Coordinator",
            department: "Admin",
            location: "Ahmedabad",
            type: "Full-time",
            posted: "6 days ago",
        },
        {
            id: 8,
            title: "Office Administrator",
            department: "Admin",
            location: "Mumbai",
            type: "Part-time",
            posted: "10 days ago",
        },
    ];

    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">
                                Join Our Team
                            </small>
                            <h2 className="fw-bold mt-1">Current Openings</h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Find your perfect role and become part of our mission to
                                transform global agriculture.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Job section */}
                <div className="container">

                    {/* FILTER BAR */}
                    <div className="card mb-4 border-0 shadow-sm">
                        <div className="card-body">
                            <div className="row g-2 align-items-center">
                                <div className="col-lg-5">
                                    <div className="input-group">
                                        <span className="input-group-text bg-transparent">
                                            <i className="bi bi-search"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search job titles..."
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="d-flex flex-wrap gap-2">
                                        <button className="btn btn-success btn-sm">All</button>
                                        <button className="btn btn-outline-secondary btn-sm">Engineering</button>
                                        <button className="btn btn-outline-secondary btn-sm">Logistics</button>
                                        <button className="btn btn-outline-secondary btn-sm">Sales</button>
                                        <button className="btn btn-outline-secondary btn-sm">Admin</button>
                                    </div>
                                </div>

                                <div className="col-lg-2 text-lg-end">
                                    <select className="form-select form-select-sm">
                                        <option>All Locations</option>
                                        <option>Ahmedabad</option>
                                        <option>Mumbai</option>
                                        <option>Delhi</option>
                                        <option>Bangalore</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* JOB LIST */}
                    <div className="d-flex flex-column gap-3">
                        {jobsData.map((job) => (
                            <div
                                key={job.id}
                                className="card border-0 shadow-sm"
                            >
                                <div className="card-body d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-3">

                                    {/* LEFT */}
                                    <div>
                                        <h6 className="fw-semibold mb-2">{job.title}</h6>

                                        <div className="d-flex flex-wrap gap-3 text-muted small">
                                            <span>
                                                <i className="bi bi-briefcase me-1"></i>
                                                {job.department}
                                            </span>
                                            <span>
                                                <i className="bi bi-geo-alt me-1"></i>
                                                {job.location}
                                            </span>
                                            <span>
                                                <i className="bi bi-clock me-1"></i>
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* RIGHT */}
                                    <div className="d-flex align-items-center gap-3">
                                        <small className="text-muted">
                                            Posted {job.posted}
                                        </small>
                                        <button className="btn btn-success btn-sm">
                                            Apply Now <i className="bi bi-arrow-right ms-1"></i>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default JourneryJobOpenings