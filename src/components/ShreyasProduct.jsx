import React from 'react'
import img1 from '../assets/images/bajra.jpg'
import img2 from '../assets/images/basmati-rice.jpg'
import img3 from '../assets/images/dal-arhar.jpg'
import img4 from '../assets/images/masoori-rice.jpg'
import img5 from '../assets/images/moong-dal.jpg'
import img6 from '../assets/images/raagi.jpg'
import img7 from '../assets/images/wheat.jpg'


const products = [
    {
        id: 1,
        category: "Rice",
        title: "Premium Basmati Rice",
        moisture: "<12%",
        purity: "99%",
        origin: "India",
        img: img2,
    },
    {
        id: 2,
        category: "Rice",
        title: "Premium Sharbati Wheat",
        moisture: "<12%",
        purity: "99%",
        origin: "India",
        img: img7,
    },
    {
        id: 3,
        category: "Rice",
        title: "Yellow Moong Dal",
        moisture: "<10%",
        purity: "99%",
        origin: "India",
        img: img5,
    },
    {
        id: 4,
        category: "Rice",
        title: "Toor Dal (Arhar)",
        moisture: "<10%",
        purity: "99%",
        origin: "India",
        img: img3,
    },
    {
        id: 5,
        category: "Rice",
        title: "Finger Millet (Ragi)",
        moisture: "<12%",
        purity: "98%",
        origin: "India",
        img: img6,
    },
    {
        id: 6,
        category: "Rice",
        title: "Pearl Millet (Bajra)",
        moisture: "<11%",
        purity: "97.5%",
        origin: "India",
        img: img1,
    },
    {
        id: 7,
        category: "Rice",
        title: "Sona Masoori Rice",
        moisture: "<13%",
        purity: "98%",
        origin: "India",
        img: img4,
    },
];

const ShreyasProduct = () => {
    return (
        <>
            <section className="grain-products-section">
                <div className="grain-container">

                    <div className="grain-top">
                        <div className="grain-filters">
                            {["All", "Rice", "Wheat", "Pulses", "Millets"].map((f, i) => (
                                <button key={i} className={i === 0 ? "active" : ""}>
                                    {f}
                                </button>
                            ))}
                        </div>

                        <select className="grain-sort">
                            <option>Sort by: Popularity</option>
                            <option>Newest</option>
                            <option>Price Low to High</option>
                        </select>
                    </div>

                    <div className="grain-grid">
                        {products.map((p) => (
                            <div className="grain-card" key={p.id}>
                                <img src={p.img} alt={p.title} />

                                <div className="grain-body">
                                    <span className="grain-badge">{p.category}</span>

                                    <h3>{p.title}</h3>

                                    <ul>
                                        <li>Moisture: {p.moisture}</li>
                                        <li>Purity: {p.purity}</li>
                                        <li>Origin: {p.origin}</li>
                                    </ul>

                                    <button className="grain-btn grain-light">
                                        View Specifications
                                    </button>

                                    <button className="grain-btn grain-primary">
                                        Inquiry / Get Quote
                                    </button>
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