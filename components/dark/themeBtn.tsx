import styles from "./themeBtn.module.css";
import { useState } from "react";

function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <button onClick={() => setDark(!dark)} className={`${styles.btn}`}>
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default Theme;
