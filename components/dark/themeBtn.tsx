import styles from "./themeBtn.module.css";

export type ThemeBtnProps = {
  light: boolean;
};

function ThemeBtn({ light, ...props }: ThemeBtnProps) {
  return (
    <button
      //onClick={() => setDark(!light)}
      className={`${styles.btn} ${light ? styles.light : ""}`}
      {...props}
    >
      {light ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeBtn;
