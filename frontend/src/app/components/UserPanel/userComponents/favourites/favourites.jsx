import React, { useEffect, useState } from "react";
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import UserAPIService from "../../../../services/user_service";
import { useNavigate } from "react-router-dom";

export const Favourites = () => {
    const [cartItems, setCartItems] = useState([]); 
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await UserAPIService.getCartItems({ userId });
                const suggestedItems = response.data.product.filter(item => item.status === -9);
                setCartItems(suggestedItems);  
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, [userId]); 

    const handleProductClick = (productId) => {
        navigate(`/product-view/${productId}`); 
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <h1 className="mt-3">Recommended Products Just for You</h1>
                <div className="row mt-3">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div
                                key={item.productId}
                                className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4"
                                onClick={() => handleProductClick(item.productId)} 
                                style={{ cursor: 'pointer' }} 
                            >
                                <img
                                    src={item.productDetail.card_pic}
                                    alt={item.productDetail.productName}
                                    className="card_img img-fluid"
                                />
                                <h6>{item.productDetail.productName}</h6>
                                <p className="price">RS {item.productDetail.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};
