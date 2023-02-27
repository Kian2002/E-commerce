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
        <h1>SOME TITLE</h1>
        <h3>SUBTITLE</h3>
      </div>

      <div>SOME FILTERS</div>

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
                  <h3>platforms</h3>
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
