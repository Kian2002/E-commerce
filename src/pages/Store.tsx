import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import StoreMain from "../components/main/StoreMain";
import styles from "./styles/Store.module.css";

const Store = () => {
  return (
    <>
      <Navbar />
      <div className={styles["store"]}>
        <Sidebar />
        <StoreMain />
      </div>
    </>
  );
};

export default Store;
