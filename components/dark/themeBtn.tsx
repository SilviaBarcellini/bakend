import styles from "./themeBtn.module.css";
import { useState, useEffect } from "react";

function Theme() {
  //const [dark, setDark] = useState(false);
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <button
      onClick={() => setActiveTheme(inactiveTheme)}
      className={`${styles.btn}`}
    >
      {inactiveTheme ? "☀️" : "🌙"}
    </button>
  );
}

export default Theme;
