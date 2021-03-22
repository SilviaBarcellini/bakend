import React from "react";
import styles from "./greetings.module.css";

const date = new Date();
const currentTime = date.getHours();

let greetings;

if (currentTime < 12) {
  greetings = "Good Morning";
} else if (currentTime < 18) {
  greetings = "Good Afternoon";
} else if (currentTime < 22) {
  greetings = "Good Evening";
} else {
  greetings = "Good Night";
}

function Greetings() {
  return <h2 className={styles.greetings}>{greetings} Joan!</h2>;
}

export default Greetings;
