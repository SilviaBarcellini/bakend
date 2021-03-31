import type { Ingredient } from "../../../src/utils/api";

type RowProps = {
  options: Ingredient[];
  selectedIng: string;
};

function Row({ options, selectedIng }: RowProps) {
  return (
    <div>
      <div>
        <input type="number" placeholder="type here" />
        <select value={selectedIng}>
          {options.map((ingredient) => {
            return <option key={ingredient._id}>{ingredient.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Row;
