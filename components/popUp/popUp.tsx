import styles from "./popUp.module.css";

export type PopUpProps = {
  label: string;
  content: string;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function PopUp({ label, content, handleClose }: PopUpProps) {
  return (
    <div className={styles.popup}>
      <div className={styles.box}>
        <h5>{content}</h5>
        <button className={styles.esc} onClick={handleClose}>
          {label}
        </button>
      </div>
    </div>
  );
}

export default PopUp;

/* function Btn({ label }: BtnProps) {
    return <button className={styles.btn}>{label}</button>;
  } */
