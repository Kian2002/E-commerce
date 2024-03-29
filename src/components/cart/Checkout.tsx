import React from "react";
import styles from "./Cart.module.css";
import { Games } from "../../types";
import axios from "axios";

type Props = {
  cart: Games[];
};

const Checkout: React.FC<Props> = ({ cart }) => {
  const checkoutHandler = () => {
    const URL = import.meta.env.VITE_URL;
    axios
      .post(`${URL}/api/stripe/create-checkout-session`, {
        cart,
      })
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <button
        className={styles["cart-footer__checkout"]}
        onClick={checkoutHandler}
      >
        Checkout
      </button>
    </>
  );
};

export default Checkout;
