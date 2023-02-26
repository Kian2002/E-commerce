import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles["bg-img"]} />
      <Hero />
    </>
  );
};

export default Home;
