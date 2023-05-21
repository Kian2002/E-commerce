import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <h1 className={styles["hero__heading"]}>Welcome!</h1>
      <p className={styles["hero__p"]}>
        Welcome to the Game Store! Here you can find all the latest games and
        their information. Click on the store button to get started!
      </p>
    </div>
  );
};

export default Hero;
