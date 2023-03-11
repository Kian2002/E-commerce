import React from "react";
import styles from "./Cart.module.css";
import { Games } from "../../data";
import axios from "axios";

type Props = {
  cart: Games[];
};

const Checkout: React.FC<Props> = ({ cart }) => {
  const checkoutHandler = () => {
    axios
      .post("http://localhost:3000/api/stripe/create-checkout-session", {
        cart,
      })
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button
        className={styles["cart-footer_checkout"]}
        onClick={checkoutHandler}
      >
        Checkout
      </button>
    </>
  );
};

export default Checkout;
