import { useEffect, useState } from "react";
import UserAPIService from "../../../../services/user_service";
import { IoArrowForwardSharp } from "react-icons/io5";
import './card.css';
import { useNavigate } from "react-router-dom";

export const Card = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const limit = 12;

    useEffect(() => {
        const fetchProducts = async () => {
          setLoading(true);
          try {
            const response = await UserAPIService.getProducts({ limit });
            // const filteredProducts = response.data.product.filter(
            //   (product) => product.category !== 'Homecard'
            // );
            setProducts(response.data.product);
          } catch (err) {
            console.error('Error fetching products:', err);
            toast.error('Error fetching products. Please try again later.');
          } finally {
            setLoading(false);
          }
        };
    
        fetchProducts();
      }, []); 

      const handleProductClick = (productId) => {
        navigate(`/product-view/${productId}`); 
    };

    return (
        <div className="container-fluid mt-5">
            <h1>
               Shop the Collection
            </h1>
            <div className="row">
                {products.map((product) => (
                    <div 
                    className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4"
                    key={product.id} 
                    onClick={() => handleProductClick(product._id)} 
                    style={{ cursor: 'pointer' }} 
                    >
                    <img
                        src={product.card_pic}
                        alt="styles"
                        className="card_img img-fluid"
                    />
                    <h6>{product.productName}</h6>
                    <p className="price">{product.price}</p>
                </div>
                    
                ))}
                <div className="text-end">
                <a href="/newin" className="ext-decoration-none text-dark">
                    View All <IoArrowForwardSharp className="mb-1 mx-1 nav-icon" />
                </a>
                </div>
                
            </div>
        </div>
    );
};
