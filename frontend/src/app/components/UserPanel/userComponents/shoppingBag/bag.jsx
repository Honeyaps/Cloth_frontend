import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar"
import { RiDeleteBinLine } from "react-icons/ri";
import './bag.css';

export const ShoppingBag = () => {

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
                    {/* one shopping bag */}
                    <div className="col-md-12 d-flex p-3 border rounded-1 shadow mt-3">
                        <div className="col-md-3">
                            <img src="https://image.hm.com/assets/hm/cc/b1/ccb1ef84a84c8ea8b7d3296d08449baf9c7fee92.jpg?imwidth=1260" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8 p-3">
                            <div>
                                <h2>Loli Bahia wears</h2>
                                <h6>RS. 450,00</h6>
                            </div>
                            <div className="d-flex mt-5">
                                <div>
                                    <h6>Size</h6>
                                    <p>XS</p>
                                </div>
                                <div className="mx-5">
                                    <h6>Price</h6>
                                    <p>2,450.00</p>
                                </div>
                            </div>
                            <div>
                                <h6>Quantity</h6>
                                <select name="" id="" className="form-select w-25">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                        </div>
                        <div className="col-md-1 p-3">
                            <RiDeleteBinLine className="nav-icon" />
                        </div>
                    </div>
                    
        
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
                            <p>RS. 450,00</p>
                            <p>Free</p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div className="col-md-6">
                            <h6>Total</h6>
                        </div>
                        <div className="col-md-6 text-end">
                            <h6>RS. 450,00</h6>
                        </div>
                    </div>
                    <button className="form_btn w-100 mt-3">Continue to checkout</button>
                    <p className="mt-4" style={{ color: "gray" }}>
                        Prices and delivery costs are not confirmed until you've reached the checkout.
                        15 days free returns. Read more about return and refund policy.
                        Customers would receive an SMS/WhatsApp notifications regarding 
                        deliveries on the registered phone number
                    </p>
                </div>
            </div>
            <Footer />
        </>

    )
}