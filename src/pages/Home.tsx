import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import styles from "./styles/Home.module.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className={styles["bg-img"]}
      initial={{ opacity: 0, y: -175 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { y: { type: "spring", duration: 0.9, bounce: 0.5 } },
      }}
      exit={{
        opacity: 0,
        transition: { y: { type: "tween", duration: 0.6, bounce: 0.3 } },
      }}
    >
      <Hero />
    </motion.div>
  );
};

export default Home;
