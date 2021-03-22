import styles from "./btn.module.css";

export type BtnProps = {
  label: string;
};

function Btn({ label, ...props }: BtnProps) {
  return (
    <button className={styles.btn} {...props}>
      {label}
    </button>
  );
}

export default Btn;
