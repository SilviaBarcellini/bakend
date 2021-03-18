import styles from "./btn.stories";

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
