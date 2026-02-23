import React from 'react'


const products = [
    {
        id: 1,
        category: "Rice",
        title: "Premium Basmati Rice",
        moisture: "<12%",
        purity: "99%",
        origin: "India",
        img: "https://via.placeholder.com/400x250",
    },
    {
        id: 2,
        category: "Rice",
        title: "Premium Sharbati Wheat",
        moisture: "<12%",
        purity: "99%",
        origin: "India",
        img: "https://via.placeholder.com/400x250",
    },
    {
        id: 3,
        category: "Rice",
        title: "Yellow Moong Dal",
        moisture: "<10%",
        purity: "99%",
        origin: "India",
        img: "https://via.placeholder.com/400x250",
    },
    {
        id: 4,
        category: "Rice",
        title: "Toor Dal (Arhar)",
        moisture: "<10%",
        purity: "99%",
        origin: "India",
        img: "https://via.placeholder.com/400x250",
    },
    {
        id: 5,
        category: "Rice",
        title: "Finger Millet (Ragi)",
        moisture: "<12%",
        purity: "98%",
        origin: "India",
        img: "https://via.placeholder.com/400x250",
    },
    {
        id: 6,
        category: "Rice",
        title: "Pearl Millet (Bajra)",
        moisture: "<11%",
        purity: "97.5%",
        origin: "India",
        img: "https://via.placeholder.com/400x250",
    },
    {
        id: 7,
        category: "Rice",
        title: "Sona Masoori Rice",
        moisture: "<13%",
        purity: "98%",
        origin: "India",
        img: "https://via.placeholder.com/400x250",
    },
];

const ShreyasProduct = () => {
    return (
        <>
            <section className="products-section">
                <div className="container">
                    {/* Filters */}
                    <div className="products-top">
                        <div className="filters">
                            {["All", "Rice", "Wheat", "Pulses", "Millets"].map((f, i) => (
                                <button key={i} className={i === 0 ? "active" : ""}>
                                    {f}
                                </button>
                            ))}
                        </div>

                        <select className="sort">
                            <option>Sort by: Popularity</option>
                            <option>Newest</option>
                            <option>Price Low to High</option>
                        </select>
                    </div>

                    {/* Cards */}
                    <div className="products-grid">
                        {products.map((p) => (
                            <div className="product-card" key={p.id}>
                                <img src={p.img} alt={p.title} />

                                <div className="product-body">
                                    <span className="badge">{p.category}</span>

                                    <h3>{p.title}</h3>

                                    <ul>
                                        <li>Moisture: {p.moisture}</li>
                                        <li>Purity: {p.purity}</li>
                                        <li>Origin: {p.origin}</li>
                                    </ul>

                                    <button className="btn light">View Specifications</button>
                                    <button className="btn primary">Inquiry / Get Quote</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default ShreyasProduct;