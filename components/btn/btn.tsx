import styles from "components/btn/btn.module.css";

export type BtnProps = {
  label: string;
};

function Btn({ label, ...props }: BtnProps) {
  return <button {...props}>{label}</button>;
}

export default Btn;
