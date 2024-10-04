import { Navbar } from "../navbar/navbar"
import { useState } from "react";
import './newin.css'
import { Footer } from "../footer/footer";

export const Newin = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <>
            <Navbar />
            <div className="container px-5 mt-4">
                <div className="row">
                <div className="d-flex text-center justify-content-center flex-wrap gap-5 align-items-center mb-4">
                    {["Ladies", "Men", "Baby", "Kids", "Sport"].map((category) => (
                        <a
                            key={category}
                            href="#"
                            className={`category ${activeCategory === category ? "active" : ""}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </a>
                    ))}
                </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <p>Filter :</p>
                        <select className="ms-3 p-2 border filter_box">
                            <option selected>Size</option>
                            <option>xxl</option>
                            <option>xl</option>
                        </select>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                    <p>Sort By :</p>
                        <select className="ms-3 p-2 border filter_box">
                            <option selected>Price</option>
                            <option>Price High to Low</option>
                            <option>Price Low to High</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-5">
                    <img src="main_pics/hmgoepprod.jpeg" alt="" />
                </div>
            </div>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <img
                            src="main_pics/card-demo_img.avif"
                            alt="styles"
                            className="card_img img-fluid"
                        />
                        <h6>Style</h6>
                        <p className="price">RS 450,00</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <img
                            src="main_pics/card-demo_img.avif"
                            alt="styles"
                            className="card_img img-fluid"
                        />
                        <h6>Style</h6>
                        <p className="price">RS 450,00</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <img
                            src="main_pics/card-demo_img.avif"
                            alt="styles"
                            className="card_img img-fluid"
                        />
                        <h6>Style</h6>
                        <p className="price">RS 450,00</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <img
                            src="main_pics/card-demo_img.avif"
                            alt="styles"
                            className="card_img img-fluid"
                        />
                        <h6>Style</h6>
                        <p className="price">RS 450,00</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <img
                            src="main_pics/card-demo_img.avif"
                            alt="styles"
                            className="card_img img-fluid"
                        />
                        <h6>Style</h6>
                        <p className="price">RS 450,00</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <img
                            src="main_pics/card-demo_img.avif"
                            alt="styles"
                            className="card_img img-fluid"
                        />
                        <h6>Style</h6>
                        <p className="price">RS 450,00</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <img
                            src="main_pics/card-demo_img.avif"
                            alt="styles"
                            className="card_img img-fluid"
                        />
                        <h6>Style</h6>
                        <p className="price">RS 450,00</p>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}