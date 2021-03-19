import React from "react";
import styles from "./greetings.module.css";

const date = new Date();
const currentTime = date.getHours();

function Greetings() {
  return <h2 className={styles.greetings}>Hello Joan!</h2>;
}

export default Greetings;
