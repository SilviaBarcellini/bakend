import styles from "../styles/Calculator.module.css";
import Calc from "../components/calculator/calculator";
import Row from "../components/calculator/rows/row";

export default function SplashPage() {
  return (
    <div>
      <div className={styles.logo}>
        <div className={styles.link}>
          <a href="/">press here to continue</a>
          <h1>Calculate :)</h1>
          <Calc label="calc" />
          <div>
            <Row label="row" />
            <div>=</div>
            <Row label="row" />
          </div>
        </div>
      </div>
    </div>
  );
}
