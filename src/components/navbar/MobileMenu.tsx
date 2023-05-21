import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Cart from "../cart/Cart";

const MobileMenu = () => {
  const [menuDisplayed, setMenuDisplayed] = useState(false);

  const [cartDisplayed, setCartDisplayed] = useState(false);

  const toggleCart = () => {
    setCartDisplayed(!cartDisplayed);
  };

  const toggleMenu = () => {
    setMenuDisplayed(!menuDisplayed);
  };

  return (
    <>
      <div className={styles["navbar__burger"]} onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>

      {menuDisplayed && (
        <div className={styles["navbar__mobile__menu"]}>
          <ul className={styles["navbar__mobile__menu__list"]}>
            <li className={styles["navbar__mobile__menu__list__item"]}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles["navbar__mobile__menu__list__item"]}>
              <Link to="/store">Store</Link>
            </li>
            <li
              className={styles["navbar__mobile__menu__list__item"]}
              onClick={toggleCart}
            >
              Cart
            </li>
          </ul>
        </div>
      )}

      {cartDisplayed && <Cart onHandleCloseCart={toggleCart} />}
    </>
  );
};

export default MobileMenu;
