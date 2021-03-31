import styles from "./row.module.css";
import type { Ingredient } from "../../../src/utils/api";

type RowProps = {
  options: Ingredient[];
};

function Row({ options }: RowProps) {
  return (
    <div>
      <div>
        <input type="number" placeholder="type here" />
        <select>
          {options.map((ingredient) => {
            return <option key={ingredient._id}>{ingredient.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Row;
