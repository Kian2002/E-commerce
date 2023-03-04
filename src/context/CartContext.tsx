import React, { createContext, useContext, useState } from "react";
import { Games } from "../data";

type CartContextType = {
  cart: Games[];
  addToCart: (game: Games) => void;
  removeFromCart: (game: Games) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

type Props = {
  children: React.ReactNode;
};

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Games[]>([]);

  const addToCart = (game: Games) => {
    if (cart.find((item) => item.id === game.id)) {
      return;
    } else {
      setCart([...cart, game]);
    }
  };

  const removeFromCart = (game: Games) => {
    setCart(cart.filter((item) => item.id !== game.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
