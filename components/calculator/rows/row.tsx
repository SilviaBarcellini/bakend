//import { ChangeEventHandler } from "react";
import type { Ingredient } from "../../../src/utils/api";

type RowProps = {
  options: Ingredient[];
  selectedIng: string;
  onSelectChange: (selection: string) => void;
  amount: number;
  onAmountChange: (amount: number) => void;
};

function Row({
  options,
  selectedIng,
  onSelectChange,
  amount,
  onAmountChange,
}: RowProps) {
  return (
    <div>
      <div>
        <input
          value={amount}
          onChange={(e) => onAmountChange(+e.target.value)}
          type="number"
          placeholder="type here"
        />
        <select
          value={selectedIng}
          onChange={(e) => onSelectChange(e.target.value)}
        >
          {options.map((ingredient) => {
            return (
              <option key={ingredient._id}>
                {ingredient.name} {/* {ingredient.inst} */}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Row;
