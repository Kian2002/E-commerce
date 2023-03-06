import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Games } from "../data";
import { useParams } from "react-router-dom";

type Props = {
  games: Games[];
};

const Item: React.FC<Props> = ({ games }) => {
  const params = useParams();
  console.log(params.itemId);

  return (
    <>
      <h1>SingleItem</h1>
    </>
  );
};

export default Item;
