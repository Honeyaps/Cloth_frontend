import React, { useState } from 'react';
import './product.css';
import { AddProduct } from './addProduct/addproduct';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { DeleteConfirmationAlert } from '../../../../shared/helpers/helper'; 

export const Products = () => {
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const handleAddProductClick = () => {
    setIsAddingProduct(true);
  };
  const handleDelete = () =>{
    DeleteConfirmationAlert({
      text: `You are about to delete ${'Product 1'}`,
      onConfirm: () => handleDeleteProduct('$Product 1'),
    })
  }
   
  

  return (
    <div className="container-fluid">
      {!isAddingProduct ? (
        <div className="row mb-4">
          <div className="col-md-12 rounded bg-white shadow p-3 d-flex justify-content-between">
            <div>
              <h3 className="dashboard-title">Products</h3>
            </div>
            <div>
              <button className='form_btn rounded mx-3 px-4' onClick={handleAddProductClick}>
                Add Product
              </button>
              <button className='form_btn rounded mx-1 bg-transparent text-black border border-black'>
                <IoIosArrowBack className='nav-icon' />
              </button>
              <button className='form_btn rounded bg-transparent text-black border border-black'>
                <IoIosArrowForward className='nav-icon' />
              </button>
            </div>
          </div>

          {/* Product list */}
          <div className="col-md-12 mt-2">
            <div className="card shadow">
              <div className="card-body table-responsive">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Product Image</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://via.placeholder.com/150"
                          alt="Product 1"
                          className="img-fluid"
                          style={{ maxWidth: "100px", borderRadius: "5px" }}
                        />
                      </td>
                      <td>Product 1</td>
                      <td>Category 1</td>
                      <td>$10.00</td>
                      <td>10</td>
                      <td>
                        <button className="bg-transparent border-0">
                          <GrEdit className='nav-icon' />
                        </button>

                        <button
                          className="bg-transparent border-0"
                          onClick={handleDelete}
                        >
                          <RiDeleteBinLine className='nav-icon' />
                        </button>
                      </td>
                    </tr>
                    {/* Additional rows can be added here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AddProduct />
      )}
    </div>
  );
};
