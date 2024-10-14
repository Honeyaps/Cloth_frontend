import { createContext, useState, useContext, useEffect } from 'react'; // Create CartContext
import UserAPIService from './user_service';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!userId) return; // Ensure userId exists

      try {
        const response = await UserAPIService.getCartItems({ userId });
        // Filter the cart items to get only those with status === 1
        const filteredItems = response.data.product.filter(item => item.status === 1);
        
        setCartItems(filteredItems);
        setCartCount(filteredItems.length); 
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [userId]);

  const addToCart = (newItem) => {
    setCartItems(prevItems => [...prevItems, newItem]);
    setCartCount(prevCount => prevCount + 1);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCart);
    setCartCount(updatedCart.length);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
