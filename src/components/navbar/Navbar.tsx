import { useState } from "react";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import MobileMenu from "./MobileMenu";

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
      <h1 className={styles["navbar__logo"]}>GameStore</h1>

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

      <MobileMenu />
      {cartDisplayed && <Cart onHandleCloseCart={handleCloseCart} />}
    </nav>
  );
};

export default Navbar;
