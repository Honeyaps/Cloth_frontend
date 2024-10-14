import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { RiDeleteBinLine } from "react-icons/ri";
import './bag.css';
import { useEffect } from "react";
import UserAPIService from "../../../../services/user_service";
import { toast } from "sonner";
import { useCart } from "../../../../services/common_service";

export const ShoppingBag = () => {
    const { cartItems, removeFromCart, setCartItems } = useCart ();
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchCartItems = async () => {
            if (!userId) return;        

            try {
                const response = await UserAPIService.getCartItems({ userId });
                const filteredItems = response.data.product.filter((item) => item.status === 1);
                setCartItems(filteredItems);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, [userId, setCartItems]);

    const handleRemoveFromCart = async (productId) => {
        try {
            await UserAPIService.removeCartItem({ userId, productId });
            removeFromCart(productId); 
            toast.success("Item removed from cart");
        } catch (error) {
            console.error("Error removing item from cart:", error);
            toast.error("Error removing item from cart");
        }
    };

    const filteredCartItems = cartItems.filter(item => item.status === 1);

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
                    {filteredCartItems.length > 0 ? (
                        filteredCartItems.map((item) => (
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
                                        <select name="" id="" className="form-select w-25" value={item.quantity}>
                                            {[1, 2, 3, 4, 5].map(num => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-1 p-3">
                                    <RiDeleteBinLine className="nav-icon" onClick={() => handleRemoveFromCart(item.productId)} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Your shopping bag is empty.</p>
                    )}
                </div>
                <div className="col-md-4 bg-white border p-4 mx-4 total_price">
                    <div>
                        <p>Sign in before you checkout</p>
                        <button className="form_btn w-100 text-black bg-white border border-dark">
                            Sign in
                        </button>
                    </div>
                    <hr />
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
                    <button className="form_btn w-100 mt-3">Continue to checkout</button>
                    <p className="mt-4 text-muted">
                        Prices and delivery costs are not confirmed until you've reached the checkout.
                        15 days free returns. Read more about return and refund policy.
                        Customers would receive an SMS/WhatsApp notifications regarding 
                        deliveries on the registered phone number.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};
