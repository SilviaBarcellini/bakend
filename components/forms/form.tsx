import React, { useState } from "react";
import styles from "./form.module.css";
import { getIngredients } from "../../src/utils/api";
import CardMain from "../cardMain/cardMain";

/* type FormProps = {
  itemRequired: string;
};
 */
function Form() {
  const [ingredients, setIngredients] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.filter);
  };

  const getIngredients = async () => {
    const response = await fetch(`/api/ingredients/`);
    const ingredients = await response.json();
    setIngredients(ingredients);
    console.log(ingredients);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("you have searched for - " + filter);
  };
  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.startsWith(filter)
  );

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          placeholder="today I am out of ..."
          name={filter}
          //ref={register({ required: true, minLength: 4 })}
          type="text"
          value={filter}
          onChange={handleChange}
        />
        {/* //{errors.itemRequired && <p>This field is required</p>} */}
        <button className={styles.button} onClick={handleSubmit} type="submit">
          Go!
        </button>
      </form>
      <div className={styles.cardMain}>
        {filteredIngredients.map((ingredient) => (
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

export default Form;
