import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import StoreMain from "../components/main/StoreMain";
import styles from "./styles/Store.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import getData, { Games } from "../data";

const Store = () => {
  const initalState: Games[] = [];
  const [games, setGames] = useState(initalState);

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getData();
      setGames(games);
    };
    fetchGames();
  }, []);

  return (
    <motion.div
      className={styles["store"]}
      initial={{ opacity: 1, y: 150 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { y: { type: "spring", duration: 0.9, bounce: 0.4 } },
      }}
      exit={{
        opacity: 0,
        y: 150,
        transition: { y: { type: "tween", duration: 0.4, bounce: 0.3 } },
      }}
    >
      <Sidebar />
      <StoreMain games={games} />
    </motion.div>
  );
};

export default Store;
