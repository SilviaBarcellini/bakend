import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./form.module.css";
//import { getIngredient } from "../../src/utils/api";
import CardMain from "../cardMain/cardMain";

type FormProps = {
  itemRequired: string;
};

function Form() {
  const { register, handleSubmit, errors } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = (data) => {
    alert(data);
  };
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("sugar");

  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = async () => {
    const response = await fetch(`/api/ingredients/`);
    const ingredients = await response.json();
    setIngredients(ingredients);
    console.log(ingredients);
  };

  const getIngredient = async () => {
    const response = await fetch(`/api/ingredients/${name}`);
    const ingredient = await response.json();
    setIngredient(ingredient);
    console.log(ingredient);
  };

  const updateSearch = (e) => {
    setFilter(e.target.value);
  };

  const getSearch = (e) => {
    setQuery(filter);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          className={styles.input}
          name="itemRequired"
          ref={register({ required: true, minLength: 4 })}
          type="text"
          value={filter}
          onChange={updateSearch}
        />
        {errors.itemRequired && <p>This field is required</p>}
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
