import React, { Dispatch, SetStateAction, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { Games } from "../data";
import { useParams } from "react-router-dom";

type Props = {
  games: Games[];
  setGames: Dispatch<SetStateAction<Games[]>>;
};

const Item: React.FC<Props> = ({ games, setGames }) => {
  const params = useParams();
  const gameId = params.gameId;
  const game = games.find((game) => game.id.toString() === gameId);
  const gameIndex = games.findIndex((game) => game.id.toString() === gameId);

  if (game === undefined) {
    return <h1>Game Not Found</h1>;
  }

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const fetchData = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
      );
      const data = await response.json();
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
    };
    fetchData();
  }, [gameId]);

  return (
    <>
      {game.developers === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <button>[BACK BUTTON]</button>
          <h1>{game.name}</h1>
          <div>
            <div>
              <h1>About</h1>
              <p>{game.description}</p>

              <div>
                <h2>
                  {game.name} Website: {game.link}
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
              </div>

              <div>
                <h2>{game.price}</h2>
                <button>[ADD TO CART]</button>
              </div>
            </div>
            <span>IMAGES [CHANGE SPAN] [CAROUSEL]</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
