import React, { useState } from "react";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [cartDisplayed, setCartDisplayed] = useState(false);

  const handleOpenCart = () => {
    setCartDisplayed(true);
  };

  const handleCloseCart = () => {
    setCartDisplayed(false);
  };

  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar__list"]}>
        <li>
          <Link className={styles["navbar__list__item"]} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles["navbar__list__item"]} to="store">
            Store
          </Link>
        </li>
        <li className={styles["navbar__list__item"]} onClick={handleOpenCart}>
          Cart
        </li>
      </ul>
      {cartDisplayed && <Cart onHandleCloseCart={handleCloseCart} />}
    </nav>
  );
};

export default Navbar;
