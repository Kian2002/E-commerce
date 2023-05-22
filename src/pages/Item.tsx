import React, { Dispatch, SetStateAction, useEffect, useContext } from "react";
import { Games } from "../types";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles/Item.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CartContext } from "../context/CartContext";
import { LeftArrow } from "../assets";
import axios from "axios";
import Loader from "../utils/Loader";

type Props = {
  games: Games[];
  setGames: Dispatch<SetStateAction<Games[]>>;
};

const Item: React.FC<Props> = ({ games, setGames }) => {
  const cartCtx = useContext(CartContext);
  const { cart, addToCart } = cartCtx;

  const navigate = useNavigate();
  const { gameId } = useParams();

  const game = games.find((game) => game.id.toString() === gameId);
  const gameIndex = games.findIndex((game) => game.id.toString() === gameId);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const getGame = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
    );
    const game = response.data;
    setGames((prevGames) => {
      const updatedGames = [...prevGames];
      updatedGames[gameIndex] = {
        ...updatedGames[gameIndex],
        developers: game.developers,
        publishers: game.publishers,
        link: game.website,
        description: game.description_raw,
      };
      return updatedGames;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getGame();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [gameIndex]);

  const clickHandler = () => {
    navigate("/store");
  };

  if (!game) {
    return <Loader />;
  }

  return (
    <>
      {!game?.developers ? (
        <Loader />
      ) : (
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <button className={styles["back-button"]} onClick={clickHandler}>
              <LeftArrow />
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
            </div>

            <Carousel
              className={styles["image-wrapper"]}
              autoPlay
              showThumbs={false}
              infiniteLoop
              dynamicHeight={true}
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

          <div className={styles["price"]}>
            <button onClick={() => addToCart(game)}>
              {cart.find((item) => item.id === game.id)
                ? "Added"
                : "Add to cart +"}
            </button>
            <h2>${game.price}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
