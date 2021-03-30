import styles from "./row.module.css";
import { useEffect } from "react";

export type RowProps = {
  option: string;
};
const APIData = `/api/ingredients/`;

function Row({ option }: RowProps) {
  useEffect(() => {
    fetch(APIData)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

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
