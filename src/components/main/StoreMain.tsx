import React from "react";
import { Link } from "react-router-dom";

const StoreMain = () => {
  const itemId = 1;
  return (
    <div>
      StoreMain
      <p>
        <Link to={`item/${itemId}`}>
          Item number {itemId} [will be a component]
        </Link>
      </p>
    </div>
  );
};

export default StoreMain;
