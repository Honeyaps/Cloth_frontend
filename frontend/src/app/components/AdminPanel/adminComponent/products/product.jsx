import React, { useState, useEffect } from 'react';
import './product.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { DeleteConfirmationAlert, LoadingSpinner } from '../../../../shared/helpers/helper';
import UserAPIService from '../../../../services/user_service';
import { CiSearch } from "react-icons/ci";
import { toast } from 'sonner';
import AdminAPIService from '../../../../services/admin_service';

export const Products = ({ setActiveComponent }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const limit = 11;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await UserAPIService.getProducts({ limit, page });
        setProducts(response.data.product);
      } catch (err) {
        console.error('Error fetching products:', err);
        toast.error('Error fetching products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]); // Fetch products on page change

  const handleAddProductClick = () => {
    setActiveComponent('AddProduct');
  };

  const handleDelete = (productId, productName) => {
    DeleteConfirmationAlert({
      text: `You are about to delete ${productName}`,
      onConfirm: async () => {
        try {
          const response = await AdminAPIService.deleteProduct({ id: productId });
          if (response.status === 1) {
            toast.success(`${productName} has been deleted successfully.`);
            setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId)); 
          } else {
            toast.error('Failed to delete product.');
          }
        } catch (err) {
          console.error('Error deleting product:', err);
          toast.error('Error deleting product. Please try again later.');
        }
      },
    });
  };


  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const hasMoreProducts = products.length === limit;

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await UserAPIService.getProducts({
        limit,              
        page: 1,            
        productName: searchTerm 
      });
      setProducts(response.data.product); 
      setPage(1); 
    } catch (err) {
      console.error('Error searching products:', err);
      toast.error('Error searching products. Please try again later.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-md-12 bg-white shadow p-3 d-flex justify-content-between">
          <div className="d-flex">
            <h3 className="dashboard-title">Products</h3>
            <input
              type="text"
              className="mx-3"
              id="search"
              placeholder="Search by product name"
              value={searchTerm} // Bind search input to state
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
            />
            <button className='form_btn px-2' onClick={handleSearch}>
              <CiSearch className='nav-icon fs-3' />
            </button>
          </div>
          <div>
            <button className='form_btn mx-3 px-4' onClick={handleAddProductClick}>
              Add Product
            </button>
            <button
              className='form_btn mx-1 bg-transparent text-black border border-black'
              onClick={handlePreviousPage}
              disabled={page === 1} // Disable on first page
            >
              <IoIosArrowBack className='nav-icon' />
            </button>
            <button
              className='form_btn bg-transparent text-black border border-black'
              onClick={handleNextPage}
              disabled={!hasMoreProducts} // Disable if no more products to fetch
            >
              <IoIosArrowForward className='nav-icon' />
            </button>
          </div>
        </div>

        {/* Product list */}
        <div className="col-md-12 mt-2 p-0">
          <div className="card shadow">
            <div className="card-body table-responsive" style={{ height: '78vh' }}>
              {loading ? (
                <LoadingSpinner />
              ) : (
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Sr.No</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length > 0 ? (
                      products.map((product, index) => (
                        <tr key={product._id}>
                          <td>{index + 1 + (page - 1) * limit}</td>
                          <td>{product.productName}</td>
                          <td>{product.category}</td>
                          <td>${product.price}</td>
                          <td>{product.quantity}</td>
                          <td>
                            <button className="bg-transparent border-0">
                              <GrEdit className='nav-icon' />
                            </button>
                            <button
                              className="bg-transparent border-0"
                              onClick={() => handleDelete(product._id, product.productName)}
                            >
                              <RiDeleteBinLine className='nav-icon' />
                            </button>

                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">No products found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
