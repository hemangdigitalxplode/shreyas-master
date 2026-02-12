import React from 'react'
import MapImage from '../assets/images/map-region.jpg'

const markets = [
    {
        id: 1,
        title: "Middle East",
        desc: "Largest market for Premium Basmati",
        active: true,
    },
    {
        id: 2,
        title: "Europe",
        desc: "High focus on organic and pesticide-free varieties",
    },
    {
        id: 3,
        title: "Africa",
        desc: "Bulk supply of non-basmati long-grain rice",
    },
    {
        id: 4,
        title: "North America",
        desc: "Specialty grains for the gourmet retail sector",
    },
];

const ExportRegions = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Header */}
                    <div className="row align-items-start mb-4">
                        <div className="col-lg-6">
                            <small className="text-success fw-semibold">

                            </small>
                            <h2 className="fw-bold mt-1">Export Regions</h2>
                        </div>

                        <div className="col-lg-6">
                            <p className="text-muted mb-0">
                                Click on the hotspots to explore our presence across
                                different continents
                            </p>
                        </div>
                    </div>
                </div>
                {/* map section comes here */}
                <div className="mapDiv">
                    <img src={MapImage} className='img-fluid' alt='Export Regions' />
                </div>
                <div className="container py-4">
                    <div className="row g-3">
                        {markets.map((item) => (
                            <div key={item.id} className="col-lg-3 col-md-6">
                                <div
                                    className={`market-card h-100 ${item.active ? "active" : ""
                                        }`}
                                >
                                    <h6 className="fw-semibold mb-1">{item.title}</h6>
                                    <p className="mb-0 small">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default ExportRegions