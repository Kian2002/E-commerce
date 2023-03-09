import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Games } from "../data";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles/Item.module.css";
import { useQuery } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  games: Games[];
  setGames: Dispatch<SetStateAction<Games[]>>;
};

const Item: React.FC<Props> = ({ games, setGames }) => {
  const navigate = useNavigate();
  const params = useParams();
  const gameId = params.gameId;
  const game = games.find((game) => game.id.toString() === gameId);
  const gameIndex = games.findIndex((game) => game.id.toString() === gameId);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data, isLoading } = useQuery("singleGame", () => {
    return fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`).then(
      (res) => res.json()
    );
  });

  if (game === undefined) {
    return <h1>Game Not Found</h1>;
  }

  useEffect(() => {
    if (data) {
      setGames((prevGames) => {
        return prevGames.map((game, index) => {
          if (index === gameIndex) {
            return {
              ...game,
              description: data.description_raw,
              link: data.website,
              developers: data.developers,
              publishers: data.publishers,
            };
          }
          return game;
        });
      });
    }
  }, [gameId, isLoading]);

  const clickHandler = () => {
    navigate("/store");
  };

  return (
    <>
      {game.developers === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <button className={styles["back-button"]} onClick={clickHandler}>
              <i>
                <FontAwesomeIcon icon={["fas", "arrow-left"]} size={"lg"} />
              </i>{" "}
              Back
            </button>
            <h1 className={styles["title"]}>{game.name}</h1>
          </div>

          <div className={styles["about-section"]}>
            <div className={styles["about"]}>
              <div className={styles["about-wrapper"]}>
                <div>
                  <h2>
                    <a href={game.link}>{game.name} Website</a>
                  </h2>
                  <p>Released: {game.released}</p>
                  <p>
                    Platforms:{" "}
                    {game.platforms.map(
                      (platform) => platform.platform.name + ", "
                    )}
                  </p>
                  <p>Main Genre: {game.genres[0].name}</p>
                  <p>
                    Developers: {game.developers.map((dev) => dev.name + ", ")}
                  </p>
                  <p>
                    Publishers:{" "}
                    {game.publishers.map((publisher) => publisher.name)}
                  </p>
                  <h1>About:</h1>
                  <p>{game.description}</p>
                </div>
              </div>

              <div className={styles["price"]}>
                <button>Add to cart +</button>
                <h2>${game.price}</h2>
              </div>
            </div>

            <Carousel
              className={styles["image-wrapper"]}
              autoPlay
              showThumbs={false}
              infiniteLoop
            >
              {game.short_screenshots.map((screenshot) => (
                <div key={screenshot.id}>
                  <img
                    className={styles["carousel-image"]}
                    src={screenshot.image}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
