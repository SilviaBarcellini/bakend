import styles from "./btn.module.css";

export type BtnProps = {
  label: string;
};

function Btn({ label }: BtnProps) {
  return <button className={styles.btn}>{label}</button>;
}

export default Btn;
