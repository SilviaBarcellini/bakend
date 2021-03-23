import React, { useEffect, useState } from "react";
import styles from "./greetings.module.css";

function Greetings() {
  const [greeting, setGreeting] = useState(null);
  useEffect(() => {
    const date = new Date();
    const currentTime = date.getHours();

    if (currentTime < 12) {
      setGreeting("Good Morning");
    } else if (currentTime < 18) {
      setGreeting("Good Afternoon");
    } else if (currentTime < 22) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  return <h2 className={styles.greetings}>Hey There, {greeting}!</h2>;
}

export default Greetings;
