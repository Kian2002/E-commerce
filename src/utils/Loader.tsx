import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles["lds-facebook"]}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
