import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
//import { getIngredient } from "../../src/utils/api";
import CardMain from "../cardMain/cardMain";

function Form() {
  const [ingredients, setIngredients] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = async () => {
    const response = await fetch(`/api/ingredients`);
    const ingredients = await response.json();
    setIngredients(ingredients);
    console.log(ingredients);
  };

  const updateSearch = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={updateSearch}
        />
        <button className={styles.button} type="submit">
          Go!
        </button>
      </form>
      {ingredients.map((ingredient) => (
        <CardMain
          key={ingredient.name}
          name={ingredient.name}
          /* image={ingredient.image} */
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
  );
}

export default Form;
