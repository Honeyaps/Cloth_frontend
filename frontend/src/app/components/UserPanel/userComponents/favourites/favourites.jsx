import { Footer } from "../footer/footer"
import { Navbar } from "../navbar/navbar"

export const Favourites = () => {
    return (
        <>
        <Navbar/>
        <div className="container-fluid">
            <h1 className="mt-3">Recommended Products Just for You</h1>
            <div className="row mt-3">
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
        <Footer/>  
        </>
        
    )
}