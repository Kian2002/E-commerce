import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";

const Cart: React.FC<{ onHandleCloseCart: () => void }> = ({
  onHandleCloseCart,
}) => {
  const { cart } = useContext(CartContext);

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
                  <button>X</button>
                </div>
              </button>
            );
          })}
        </div>
        <div className={styles["cart-footer"]}>
          <p className={styles["cart-footer__total"]}>Total</p>
          <button
            className={styles["cart-footer__checkout"]}
            onClick={onHandleCloseCart}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Cart;
