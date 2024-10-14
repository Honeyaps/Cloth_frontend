import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { RiDeleteBinLine } from "react-icons/ri";
import './bag.css';
import { useEffect, useState } from "react";
import UserAPIService from "../../../../services/user_service";
import { toast } from "sonner";
import { useCart } from "../../../../services/common_service";
import { Order } from "./order/order";


export const ShoppingBag = () => {
    const { cartItems, removeFromCart, setCartItems, updateCartItemQuantity } = useCart();
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const [isOpen, setIsOpen] = useState(false);

    const checkout = () => {
        if (!token) {
            toast.error("Please login to checkout");
            return;
        }
        setIsOpen(true);
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            if (!userId) return;

            try {
                const response = await UserAPIService.getCartItems({ userId });
                setCartItems(response.data.product);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, [userId, setCartItems]);

    const handleRemoveFromCart = async (productId, size) => {
        try {
            await UserAPIService.removeCartItem({ userId, productId, size });
            removeFromCart(productId, size);
            toast.success("Item removed from cart");
        } catch (error) {
            console.error("Error removing item from cart:", error);
            toast.error("Error removing item from cart");
        }
    };

    const handleQuantityChange = (productId, size, quantity) => {
        updateCartItemQuantity(productId, size, quantity);
    };



    const totalPrice = cartItems.reduce((total, item) => total + item.productDetail.price * item.quantity, 0).toFixed(2);

    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-between px-5 mt-5">
                <p>Free shipping above ₹1999</p>
                <p>Free & flexible 15 days return</p>
                <p>Estimated delivery time: 2-7 days</p>
            </div>
            <h1 className="text-center">Shopping Bag</h1>
            <div className="container mt-5 d-flex">
                <div className="col-md-7 bg-white border p-3">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className="col-md-12 d-flex p-3 border rounded-1 shadow mt-3">
                                <div className="col-md-3">
                                    <img src={item.productDetail.card_pic} alt={item.productDetail.productName} className="img-fluid" />
                                </div>
                                <div className="col-md-8 p-3">
                                    <div>
                                        <h2>{item.productDetail.productName}</h2>
                                        <h6 className="text-muted mt-3">RS. {item.productDetail.price.toFixed(2)}</h6>
                                    </div>
                                    <div className="d-flex mt-5">
                                        <div>
                                            <h6>Size</h6>
                                            <p>{item.size}</p>
                                        </div>
                                        <div className="mx-5">
                                            <h6>Quantity</h6>
                                            <p>{item.quantity}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Quantity</h6>
                                        <select name="" id="" className="form-select w-25" value={item.quantity} onChange={(e) => handleQuantityChange(item.productId, item.size, e.target.value)}>
                                            {[1, 2, 3, 4, 5].map(num => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-1 p-3">
                                    <RiDeleteBinLine className="nav-icon" onClick={() => handleRemoveFromCart(item.productId, item.size)} />
                                </div>
                            </div>
                        ))
                    ) : (
                        /* From Uiverse.io by Sophiek9h */


                        <div className="main_wrapper">
                            <div className="main">
                                <div className="antenna">
                                    <div className="antenna_shadow"></div>
                                    <div className="a1"></div>
                                    <div className="a1d"></div>
                                    <div className="a2"></div>
                                    <div className="a2d"></div>
                                    <div className="a_base"></div>
                                </div>
                                <div className="tv">
                                    <div className="cruve">
                                        <svg
                                            class="curve_svg"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 189.929 189.929"
                                            xml:space="preserve"
                                        >
                                            <path
                                                d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="display_div">
                                        <div className="screen_out">
                                            <div className="screen_out1">
                                                <div className="screen">
                                                    <span className="notfound_text">Your Cart is Empty :(</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lines">
                                        <div className="line1"></div>
                                        <div className="line2"></div>
                                        <div className="line3"></div>
                                    </div>
                                    <div className="buttons_div">
                                        <div className="b1"><div></div></div>
                                        <div className="b2"></div>
                                        <div className="speakers">
                                            <div className="g1">
                                                <div className="g11"></div>
                                                <div className="g12"></div>
                                                <div className="g13"></div>
                                            </div>
                                            <div className="g"></div>
                                            <div className="g"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="base1"></div>
                                    <div className="base2"></div>
                                    <div className="base3"></div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
                <div className="col-md-4 bg-white border p-4 mx-4 total_price">
                    {!token && (
                        <div>
                            <div>
                                <p>Sign in before you checkout</p>
                                <button className="form_btn w-100 text-black bg-white border border-dark">
                                    Sign in
                                </button>
                            </div>
                            <hr />
                        </div>
                    )}

                    <div className="d-flex justify-content-between">
                        <div className="col-md-6">
                            <p>Order value</p>
                            <p>Shipping</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <p>RS. {totalPrice}</p>
                            <p>Free</p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div className="col-md-6">
                            <h6>Total</h6>
                        </div>
                        <div className="col-md-6 text-end">
                            <h6>RS. {totalPrice}</h6>
                        </div>
                    </div>
                    <button className="form_btn w-100 mt-3" onClick={checkout}>Continue to checkout</button>
                    <p className="mt-4 text-muted">
                        We offer a 15-day free returns policy to ensure your satisfaction. For more details, please read our comprehensive return and refund policy, which outlines the steps to take if you need to return an item. We strive to provide a seamless shopping experience, and our customer support team is always available to assist you.
                    </p>
                </div>
                <Order isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <Footer />
        </>
    );
};
