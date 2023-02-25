import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Store = () => {
  const itemId = 1;
  return (
    <>
      <Navbar />
      <h1>Store</h1>
      <p>
        <Link to={`item/${itemId}`}>Item number {itemId}</Link>
      </p>
    </>
  );
};

export default Store;
