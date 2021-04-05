export {};

import styles from "../styles/Locals.module.css";
import { useState } from "react";
import type { Ingredient } from "../src/utils/api";

interface IngListProps {
  ings: Ingredient[];
}
export default function Add({ ings }: IngListProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Ingredient[]>(null);
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`/api/ingredients/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        console.log(data);
      });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search for ing"
          value={query}
          onChange={onChange}
        />
      </div>
      {ings && (
        <>
          <div>
            <ul className={styles.list}>
              {ings.map((ings) => (
                <h3 key={ings._id}>{ings.name}</h3>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
