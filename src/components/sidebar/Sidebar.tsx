import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import styles from "./Sidebar.module.css";
import { Games } from "../../types";
import { platforms, genres } from "./SidebarData";
import { ResetLogo } from "../../assets";

interface Props {
  setGames: Dispatch<SetStateAction<Games[]>>;
  tempGames: Games[];
}

const Sidebar: React.FC<Props> = ({ setGames, tempGames }) => {
  const handleFilterPlatform = async (e: MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent;

    let filteredGames: Games[];
    filteredGames = tempGames.filter((game) => {
      return game.platforms.some((platform) => platform.platform.name === text);
    });

    setGames(filteredGames);
  };

  const handleFilterGenre = (e: MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent;

    const filteredGames = tempGames.filter((game) => {
      return game.genres.some((genre) => genre.name === text);
    });

    setGames(filteredGames);
  };

  const handleReset = () => {
    setGames(tempGames);
  };

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__menu"]}>
        <h1 className={styles["sidebar__title"]}>Platforms</h1>
        <div className={styles["sidebar__list"]}>
          <button className={styles["sidebar__item"]} onClick={handleReset}>
            <ResetLogo />
            <span>Reset Filters</span>
          </button>

          {platforms.map((platform) => (
            <button
              className={styles["sidebar__item"]}
              onClick={handleFilterPlatform}
              key={platform.name}
            >
              <span>{<platform.svg />}</span>
              <span>{platform.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles["sidebar__menu"]}>
        <h1 className={styles["sidebar__title"]}>Genres</h1>
        <div className={styles["sidebar__list"]}>
          {genres.map((genre) => (
            <button
              className={styles["sidebar__item"]}
              onClick={handleFilterGenre}
              key={genre.name}
            >
              <img
                className={styles["logo2"]}
                src={genre.src}
                alt={genre.alt}
              />
              <span>{genre.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
