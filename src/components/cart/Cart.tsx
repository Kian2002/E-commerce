import React from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";

const Cart: React.FC<{ onHandleCloseCart: () => void }> = (props) => {
  const { onHandleCloseCart } = props;
  return ReactDOM.createPortal(
    <div className={styles["backdrop"]} onClick={onHandleCloseCart}>
      <div
        className={styles["cart-wrapper"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className={styles["cart-heading"]}>No games added</h1>
        <div className={styles["cart-items"]}>
          <p>item 1</p>
          <p>item 2</p>
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
