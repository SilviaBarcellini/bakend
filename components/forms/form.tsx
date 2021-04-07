import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
//import { getIngredient } from "../../src/utils/api";
import CardMain from "../cardMain/cardMain";

function Search() {
  const [ingredients, setIngredients] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getIngredients();
  }, []);
  const getIngredients = async () => {
    const response = await fetch(`/api/ingredients/`);
    const ingredients = await response.json();
    setIngredients(ingredients);
    console.log(ingredients);
  };

  const updateSearch = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="today I am out of ..."
        type="text"
        value={filter}
        onChange={updateSearch}
      />
      {/* <button className={styles.button} type="submit">
        Go!
      </button> */}
      <div className={styles.cardMain}>
        {ingredients.map((ingredient) => (
          <CardMain
            key={ingredient.name}
            name={ingredient.name}
            image={ingredient.image}
            fat={ingredient.fat}
            carbs={ingredient.carbs}
            protein={ingredient.protein}
            family={ingredient.family}
            vegan={ingredient.vegan}
            vegetarian={ingredient.vegetarian}
            glutenFree={ingredient.glutenFree}
            dairyFree={ingredient.dairyFree}
            nutsFree={ingredient.glutenFree}
            soyFree={ingredient.soyFree}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
