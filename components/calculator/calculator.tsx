import styles from "./calculator.module.css";

export type CalcProps = {
  label: string;
};

function Calc({ label }: CalcProps) {
  return <button className={styles.calc}>{label}</button>;
}

export default Calc;
