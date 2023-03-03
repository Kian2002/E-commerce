import React from "react";
import { Link } from "react-router-dom";
import { Games } from "../../data";
import styles from "./StoreMain.module.css";

interface Props {
  games: Games[];
}

const StoreMain: React.FC<Props> = ({ games }: Props) => {
  return (
    <div>
      <div>
        <h1 className={styles["title"]}>New and trending</h1>
        <h3 className={styles["sub-title"]}>
          Based on plater counts and release date
        </h3>
      </div>

      <div className={styles["card-container"]}>
        {games.map((game) => (
          <Link
            to={`/store/item/${game.id}`}
            key={game.id}
            className={styles["link"]}
          >
            <div className={styles["card"]}>
              <img
                src={game.background_image}
                alt=""
                className={styles["card__img"]}
              />
              <div className={styles["card__info__wrapper"]}>
                <div className={styles["card__info"]}>
                  <button>Add To Cart +</button>
                  <h3>${game.price}</h3>
                </div>
                <h3 className={styles["card__name"]}>{game.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoreMain;
