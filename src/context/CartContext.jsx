import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  //Cart drawer state
   const [cartOpen, setCartOpen] = useState(false);
  // Add Product
  const addToCart = (product, size = "", quantity = 1) => {
    setCartItems((prev) => {
    
      const existingItem = prev.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          size,
          quantity,
        },
      ];
    });
    // set Cart Drawer Open
      setCartOpen(true);
  };

  // Remove Product
  const removeFromCart = (id, size = "") => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  };

  // Increase Quantity
  const increaseQty = (id, size = "") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id, size = "") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.size === size &&
        item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Total Items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  
 

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalItems,
        totalPrice, 
        
        cartOpen,
      setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
    
  );
}
