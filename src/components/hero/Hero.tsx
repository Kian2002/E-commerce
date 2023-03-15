import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <h1 className={styles["hero__heading"]}>Welcome!</h1>
      <p className={styles["hero__p"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos
        fuga esse reprehenderit aliquam velit quis adipisci aliquid quaerat.
        Enim eligendi corporis aperiam nesciunt recusandae veritatis odio
        reprehenderit animi nam?
      </p>
    </div>
  );
};

export default Hero;
