import type { Ingredient } from "../../../utils/api";
import styles from "./row.module.css";

type RowProps = {
  options: Ingredient[];
  selectedIng: string;
  onSelectChange: (selection: string) => void;
};

function Row({ options, selectedIng, onSelectChange }: RowProps) {
  return (
    <div>
      <div>
        <select
          value={selectedIng}
          onChange={(e) => onSelectChange(e.target.value)}
          className={styles.row}
        >
          {options
            .filter((ingredient) => ingredient.family === "Sugars")
            .map((filteredIngredient) => {
              return (
                <option key={filteredIngredient._id}>
                  {filteredIngredient.name}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default Row;
