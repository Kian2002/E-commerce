import React from "react";
import { Link } from "react-router-dom";
import { Games } from "../../data";

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

      <div>
        {games.map((game) => (
          <Link to={`/store/item/${game.id}`} key={game.id}>
            <div>
              <img src={game.background_image} alt="" />
              <div>
                <h3>{game.platforms}</h3>
                <h3>{game.price}</h3>
              </div>
              <h3>{game.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoreMain;
