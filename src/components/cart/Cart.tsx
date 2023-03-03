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
        <h1 className={styles["cart-heading"]}>No games added</h1>
        <div className={styles["cart-items"]}>
          {cart.map((item) => {
            return <h1 key={item.id}>{item.name}</h1>;
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
