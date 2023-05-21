import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Games } from "../../types";
import styles from "./StoreMain.module.css";
import { CartContext } from "../../context/CartContext";
import Loader from "../../utils/Loader";

interface Props {
  games: Games[];
  loading: boolean;
}

const StoreMain: React.FC<Props> = ({ games, loading }) => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const clickHandler = (game: Games) => {
    navigate(`/store/item/${game.id}`);
  };

  return (
    <div>
      <div>
        <h1 className={styles["title"]}>New and trending</h1>
        <h2 className={styles["sub-title"]}>
          Based on plater counts and release date
        </h2>
      </div>

      <div className={styles["card-container"]}>
        {loading && <Loader />}
        {games.map((game) => (
          <div
            className={styles["card"]}
            key={game.id}
            onClick={() => {
              clickHandler(game);
            }}
          >
            <img
              loading="lazy"
              src={game.background_image}
              alt=""
              className={styles["card__img"]}
            />

            <div className={styles["card__info"]}>
              <button
                type="button"
                className={styles["card__info__button"]}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(game);
                }}
              >
                {cart.find((item) => item.id === game.id)
                  ? "Added"
                  : "Add to cart +"}
              </button>
              <h3>${game.price}</h3>
            </div>
            <h2 className={styles["card__name"]}>{game.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreMain;
