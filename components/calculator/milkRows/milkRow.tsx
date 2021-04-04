import type { Ingredient } from "../../../src/utils/api";
import styles from "../rows/row.module.css";

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
            .filter((ingredient) => ingredient.family === "Liquids")
            .map((filteredIngredient) => {
              return (
                <option key={filteredIngredient._id}>
                  {filteredIngredient.name} {/* {ingredient.inst} */}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default Row;
