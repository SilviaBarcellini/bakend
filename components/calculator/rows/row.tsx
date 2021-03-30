import styles from "./row.module.css";

export type RowProps = {
  option: string;
};

function Row({ option }: RowProps) {
  return (
    <div>
      <input className={styles.input} type="number" placeholder="here" />
      <select>
        <option value={option}>Option</option>
      </select>
    </div>
  );
}

export default Row;
