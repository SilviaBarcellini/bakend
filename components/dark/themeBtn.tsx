import styles from "./themeBtn.module.css";
import { useState, useEffect } from "react";

function Theme() {
  //const [dark, setDark] = useState(false);
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setActiveTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <div className="button-container">
      <button
        onClick={() => setActiveTheme(inactiveTheme)}
        className={`${styles.btn}`}
      >
        🍦 switch mode 🍫
      </button>
    </div>
  );
}

export default Theme;
