import React from 'react'

const IntelligentEnergyManagement = () => {
    return (
        <>
            <div className="container py-5">
                {/* Heading */}
                <div className="row mb-4 align-items-center">
                    <div className="col-lg-6">
                        <small className="text-success fw-semibold">Smart Grid</small>
                        <h2 className="fw-bold">Intelligent Energy Management</h2>
                    </div>
                    <div className="col-lg-6 text-lg-end text-muted">
                        We don't just consume energy; we manage it.
                        <br />
                        Real-time monitoring and optimization across our entire energy ecosystem.
                    </div>
                </div>

                <div className="row g-4">
                    {/* LEFT TABS */}
                    <div className="col-lg-4">
                        <div
                            className="nav nav-pills flex-lg-column gap-3"
                            role="tablist"
                        >
                            <button
                                className="nav-link active d-flex align-items-center gap-3 p-3 rounded-4"
                                data-bs-toggle="pill"
                                data-bs-target="#solar"
                                type="button"
                            >
                                <div className="bg-white text-success fw-bold rounded-3 d-flex align-items-center justify-content-center"
                                    style={{ width: 36, height: 36 }}>
                                    ☀
                                </div>
                                <div className="text-start">
                                    <div className="fw-semibold tabPillHead">Solar Array</div>
                                    <small className='pillContent'>2.4 MW</small>
                                </div>
                            </button>

                            <button
                                className="nav-link d-flex align-items-center gap-3 p-3 rounded-4"
                                data-bs-toggle="pill"
                                data-bs-target="#biomass"
                                type="button"
                            >
                                <div className="bg-light text-success fw-bold rounded-3 d-flex align-items-center justify-content-center"
                                    style={{ width: 36, height: 36 }}>
                                    🔥
                                </div>
                                <div className="text-start">
                                    <div className="fw-semibold tabPillHead">Biomass Boiler</div>
                                    <small className='pillContent'>8.2 MW</small>
                                </div>
                            </button>

                            <button
                                className="nav-link d-flex align-items-center gap-3 p-3 rounded-4"
                                data-bs-toggle="pill"
                                data-bs-target="#storage"
                                type="button"
                            >
                                <div className="bg-light text-success fw-bold rounded-3 d-flex align-items-center justify-content-center"
                                    style={{ width: 36, height: 36 }}>
                                    🔋
                                </div>
                                <div className="text-start">
                                    <div className="fw-semibold tabPillHead">Energy Storage</div>
                                    <small className='pillContent'>500 kWh</small>
                                </div>
                            </button>

                            <button
                                className="nav-link d-flex align-items-center gap-3 p-3 rounded-4"
                                data-bs-toggle="pill"
                                data-bs-target="#cogeneration"
                                type="button"
                            >
                                <div className="bg-light text-success fw-bold rounded-3 d-flex align-items-center justify-content-center"
                                    style={{ width: 36, height: 36 }}>
                                    🏭
                                </div>
                                <div className="text-start">
                                    <div className="fw-semibold tabPillHead">Cogeneration</div>
                                    <small className='pillContent'>12.6 MW</small>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-lg-8">
                        <div className="tab-content bg-white p-4 rounded-4 shadow-sm">
                            {/* Solar */}
                            <div className="tab-pane fade show active" id="solar">
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <div className="bg-success text-white rounded-3 d-flex align-items-center justify-content-center"
                                        style={{ width: 40, height: 40 }}>
                                        ☀
                                    </div>
                                    <div>
                                        <h5 className="mb-0 fw-bold">Solar Array</h5>
                                        <small className="text-success">Active</small>
                                    </div>
                                </div>

                                <p className="text-muted">
                                    Ground-mounted photovoltaic system feeding directly into the industrial grid.
                                </p>

                                <div className="row g-3 mb-3">
                                    <div className="col-md-4">
                                        <div className="bg-light rounded-4 p-3 text-center">
                                            <div className="small">Output</div>
                                            <div className="fw-bold text-success fs-5">2.4 MW</div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="bg-warning bg-opacity-25 rounded-4 p-3 text-center">
                                            <div className="small">Efficiency</div>
                                            <div className="fw-bold fs-5 text-warning">94%</div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="bg-light rounded-4 p-3 text-center">
                                            <div className="small">Uptime</div>
                                            <div className="fw-bold text-success fs-5">99.8%</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="fw-semibold mb-2">24h Performance</div>

                                {/* GRAPH PLACEHOLDER */}
                                <div
                                    className="rounded-4 bg-secondary bg-opacity-25"
                                    style={{ height: 140 }}
                                />
                            </div>

                            {/* Other Tabs */}
                            <div className="tab-pane fade" id="biomass">
                                <h5 className="fw-bold">Biomass Boiler</h5>
                                <p className="text-muted">High efficiency biomass-based system.</p>
                            </div>

                            <div className="tab-pane fade" id="storage">
                                <h5 className="fw-bold">Energy Storage</h5>
                                <p className="text-muted">Battery storage for load balancing.</p>
                            </div>

                            <div className="tab-pane fade" id="cogeneration">
                                <h5 className="fw-bold">Cogeneration</h5>
                                <p className="text-muted">Combined heat & power generation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default IntelligentEnergyManagement