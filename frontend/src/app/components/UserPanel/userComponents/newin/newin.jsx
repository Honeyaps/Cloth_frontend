import { Navbar } from "../navbar/navbar";
import { useEffect, useState } from "react";
import './newin.css';
import { Footer } from "../footer/footer";
import UserAPIService from "../../../../services/user_service";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom"; 
import { LoadingSpinner } from "../../../../shared/helpers/helper";

export const Newin = () => {
    const [activeCategory, setActiveCategory] = useState('All'); 
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await UserAPIService.getProducts();
                const products = response.data.product;
                setAllProducts(products); 
                setFilteredProducts(products); 
            } catch (err) {
                console.error('Error fetching products:', err);
                toast.error('Error fetching products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredProducts(allProducts); 
        } else {
            const newFilteredProducts = allProducts.filter((product) => product.category === category);
            setFilteredProducts(newFilteredProducts);
        }
    };

    const handleProductClick = (productId) => {
        navigate(`/product-view/${productId}`); 
    };

    return (
        <>
            <Navbar />
            <div className="container px-5 mt-4">
                {/* Category Filter Buttons */}
                <div className="row">
                    <div className="d-flex text-center justify-content-center flex-wrap gap-5 align-items-center mb-4">
                        {["All", "Ladies", "Men", "Baby", "Kids", "Sport"].map((category) => (
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

                {/* Filter and Sort Options */}
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

                {/* Display Filtered Products */}
                <div className="row mt-5">
                    {loading ? (
                        <LoadingSpinner />
                    ) : filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div 
                                key={product.id} 
                                className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4"
                                onClick={() => handleProductClick(product._id)} 
                                style={{ cursor: 'pointer' }} 
                            >
                                <img
                                    src={product.card_pic}
                                    alt={product.productName} 
                                    className="card_img img-fluid"
                                />
                                <h6>{product.productName}</h6>
                                <p className="price">RS {product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products found for this category.</p>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
};
