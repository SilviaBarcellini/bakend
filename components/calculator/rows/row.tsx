//import { ChangeEventHandler } from "react";
import type { Ingredient } from "../../../src/utils/api";

type RowProps = {
  options: Ingredient[];
  selectedIng: string;
  onChangeIng: string;
  //onChangeIng: ChangeEventHandler<HTMLSelectElement>;
};

function Row({ options, selectedIng, onChangeIng }: RowProps) {
  return (
    <div>
      <div>
        <input type="number" placeholder="type here" />
        <select
          value={selectedIng}
          onChange={onChangeIng}

          /* onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            e.target.value;
          }} */
        >
          {options.map((ingredient) => {
            return <option key={ingredient._id}>{ingredient.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Row;
