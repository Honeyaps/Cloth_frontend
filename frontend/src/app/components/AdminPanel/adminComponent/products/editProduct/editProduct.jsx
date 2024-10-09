import { Alert } from "react-bootstrap";


export const EditProduct = ({ productId }) => {

    console.log("EditProduct page for product ID:",productId);

   

    return (
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-md-12 card rounded-0 shadow p-3">
                    <h3 className="dashboard-title">Edit Product</h3>
                </div>
            </div>

            <div className="row card shadow p-3">
                <div className="col-md-12">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="productName" className="col-md-12 text-start">
                                Product Name <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="col-md-12"
                                id="productName"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="col-md-12 text-start">
                                Description <span className="text-danger">*</span>
                            </label>
                            <textarea
                                className="col-md-12"
                                id="description"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="col-md-12 text-start">
                                Price <span className="text-danger">*</span>
                            </label>
                            <input
                                type="number"
                                className="col-md-12"
                                id="price"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="category" className="col-md-12 text-start">
                                Category <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="col-md-12"
                                id="category"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="quantity" className="col-md-12 text-start">
                                Quantity <span className="text-danger">*</span>
                            </label>
                            <input
                                type="number"
                                className="col-md-12"
                                id="quantity"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="card_pic" className="col-md-12 text-start">
                                Product Image <span className="text-danger">*</span>
                            </label>
                            <input
                                type="file"
                                className="col-md-12 p-2"
                                id="card_pic"
                                required
                            />
                        </div>

                        <div className="row">
                            {Array(4).fill().map((_, index) => (
                                <div className="mb-3 col-md-6" key={index}>
                                    <label className="col-md-12 text-start">
                                        Additional Image {index + 1} <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="col-md-12 p-2"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <Alert variant="info"><strong>NOTE :</strong> Please upload images smaller than 500KB.</Alert>

                        <button type="submit" className="form_btn mt-2 px-5">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
