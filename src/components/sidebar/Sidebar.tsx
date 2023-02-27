import React, { Dispatch, SetStateAction } from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Games } from "../../data";
import { useEffect } from "react";
import getData from "../../data";
library.add(fab, fas);

interface Props {
  games: Games[];
  setGames: Dispatch<SetStateAction<Games[]>>;
}

const Sidebar: React.FC<Props> = ({ games, setGames }) => {
  const handleFilter = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent;
    const filteredGames = games.filter((game) => {
      return game.platforms.some((platform) => platform.platform.name === text);
    });

    setGames(filteredGames);
  };

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__menu"]}>
        <h1 className={styles["sidebar__title"]}>Platforms</h1>
        <div className={styles["sidebar__list"]}>
          <button className={styles["sidebar__item"]} onClick={handleFilter}>
            <span className={styles["logo"]}>
              <FontAwesomeIcon icon={["fab", "windows"]} size="lg" />
            </span>
            <span>PC</span>
          </button>
          <button className={styles["sidebar__item"]} onClick={handleFilter}>
            <span className={styles["logo"]}>
              <FontAwesomeIcon icon={["fab", "playstation"]} size="lg" />
            </span>
            <span>PlayStation 4</span>
          </button>
          <button className={styles["sidebar__item"]} onClick={handleFilter}>
            <span className={styles["logo"]}>
              <FontAwesomeIcon icon={["fab", "xbox"]} size="lg" />
            </span>
            <span>Xbox One</span>
          </button>
          <button className={styles["sidebar__item"]} onClick={handleFilter}>
            <span className={styles["logo"]}>
              <FontAwesomeIcon icon={["fas", "gamepad"]} size="lg" />
            </span>
            <span>Nintendo Switch</span>
          </button>
        </div>
      </div>

      <div className={styles["sidebar__menu"]}>
        <h1 className={styles["sidebar__title"]}>Genres</h1>
        <div className={styles["sidebar__list"]}>
          <button className={styles["sidebar__item"]}>
            <img
              className={styles["logo2"]}
              src="https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
              alt="Action image"
            />
            <span>Action</span>
          </button>
          <button className={styles["sidebar__item"]}>
            <img
              className={styles["logo2"]}
              src="https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
              alt="Adventure image"
            />
            <span>Adventure</span>
          </button>
          <button className={styles["sidebar__item"]}>
            <img
              className={styles["logo2"]}
              src="https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
              alt="RPG Games Image"
            />
            <span>RPG</span>
          </button>
          <button className={styles["sidebar__item"]}>
            <img
              className={styles["logo2"]}
              src="https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg"
              alt="Strategy Image"
            />
            <span>Strategy</span>
          </button>
          <button className={styles["sidebar__item"]}>
            <img
              className={styles["logo2"]}
              src="https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg"
              alt="Simulation Image"
            />
            <span>Simulation</span>
          </button>
          <button className={styles["sidebar__item"]}>
            <img
              className={styles["logo2"]}
              src="https://media.rawg.io/media/games/8c7/8c77cb878b8cafe0b5ee5b21d488393b.jpg"
              alt="Sports Image"
            />
            <span>Sports</span>
          </button>
          <button className={styles["sidebar__item"]}>
            <img
              className={styles["logo2"]}
              src="https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg"
              alt="Racing Image"
            />
            <span>Racing</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
