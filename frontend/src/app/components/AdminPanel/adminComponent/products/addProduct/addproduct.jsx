import { AddConfirmationAlert } from "../../../../../shared/common/common_service";

export const AddProduct = () => {

    const handleAddProduct = () =>{
        console.log('Product added successfully!');
        AddConfirmationAlert('Product added successfully!');
    }
       
    return (
        <div className="container-fluid">
            {/* Row for the Dashboard title */}
            <div className="row mb-4">
                <div className="col-md-12 card shadow p-3">
                    <h3 className="dashboard-title">Add Product</h3>
                </div>
            </div>

            <div className="row card shadow p-3">
                <div className="col-md-12">
                    <form className="" >
                        <div className="mb-3">
                            <label htmlFor="productName" className="col-md-12 text-start">
                                Product Name <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                name="productName"
                                className="col-md-12"
                                id="productName"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="productPrice" className="col-md-12 text-start">
                                Product Price <span className="text-danger">*</span>
                            </label>
                            <input
                                type="number"
                                name="productPrice"
                                className="col-md-12"
                                id="productPrice"
                                required
                            />
                        </div>


                        <div className="mb-3">
                            <label
                                htmlFor="productDescription"
                                className="col-md-12 text-start"
                            >
                                Product Description
                            </label>
                            <textarea
                                type="text"
                                name="productDescription"
                                rows="4"
                                className="col-md-12"
                                id="productDescription"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="productQuantity" className="col-md-12 text-start">
                                Product Quantity <span className="text-danger">*</span>
                            </label>
                            <input
                                type="number"
                                name="productQuantity"
                                className="col-md-12"
                                id="productQuantity"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cardImage" className="col-md-12 text-start">
                                Card Image <span className="text-danger">*</span>
                            </label>
                            <input
                                type="file"
                                name="cardImage"
                                className="col-md-12 p-2"
                                id="cardImage"
                                required
                            />
                        </div>

                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label htmlFor="Image" className="col-md-12 text-start">
                                    Image1 <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="file"
                                    name="Image"
                                    className="col-md-12 p-2"
                                    id="Image"
                                    required
                                />
                            </div>

                            <div className="mb-3 col-md-6">
                                <label htmlFor="Image" className="col-md-12 text-start">
                                    Image1 <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="file"
                                    name="Image"
                                    className="col-md-12 p-2"
                                    id="Image"
                                    required
                                />
                            </div>

                            <div className="mb-3 col-md-6">
                                <label htmlFor="Image" className="col-md-12 text-start">
                                    Image1 <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="file"
                                    name="Image"
                                    className="col-md-12 p-2"
                                    id="Image"
                                    required
                                />
                            </div>

                            <div className="mb-3 col-md-6">
                                <label htmlFor="Image" className="col-md-12 text-start">
                                    Image1 <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="file"
                                    name="Image"
                                    className="col-md-12 p-2"
                                    id="Image"
                                    required
                                />
                            </div>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="category" className="col-md-12 text-start">
                                Category <span className="text-danger">*</span>
                            </label>
                            <input type="text" name="category" className="col-md-12" id="category" />
                        </div>

                        <button type="submit" className="form_btn mt-2 px-5" onClick={handleAddProduct}>
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
