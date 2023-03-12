import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const [redirectTime, setRedirectTime] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setRedirectTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (redirectTime === 0) {
    navigate("/store");
  }

  return (
    <div className={styles["success"]}>
      <h1>Thank you for your purchase!</h1>
      <p>Check your email for more details.</p>
      <p>Redirecting in {redirectTime}</p>
    </div>
  );
};

export default Success;
