import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";
import Checkout from "./Checkout";

type Props = {
  onHandleCloseCart: () => void;
};

const Cart: React.FC<Props> = ({ onHandleCloseCart }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    cart.forEach((item) => {
      setTotal((prevTotal) => {
        return prevTotal + item.price;
      });
    });

    return () => {
      setTotal(0);
    };
  }, [cart]);

  return ReactDOM.createPortal(
    <div className={styles["backdrop"]} onClick={onHandleCloseCart}>
      <div className={styles["cart-wrapper"]}>
        <h1 className={styles["cart-heading"]}>
          {cart.length === 0
            ? "No Games Added"
            : cart.length === 1
            ? cart.length + " game"
            : cart.length + " games"}
        </h1>
        <div className={styles["cart-items"]}>
          {cart.map((item) => {
            return (
              <button className={styles["cart-item"]} key={item.id}>
                <h3>{item.name}</h3>
                <div className={styles["cart-item__div"]}>
                  <p>${item.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart(item);
                    }}
                  >
                    X
                  </button>
                </div>
              </button>
            );
          })}
        </div>
        <div className={styles["cart-footer"]}>
          <p className={styles["cart-footer__total"]}>Total: {total}</p>
          <Checkout cart={cart} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Cart;
