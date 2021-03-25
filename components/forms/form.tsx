import React, { useEffect } from "react";
import styles from "./form.module.css";
import { useState } from "react";
import { getIngredient } from "../../src/utils/api";

function Form() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = async () => {
    const response = await fetch(`/api/ingredients`);
    const ingredients = await response.json();
    setIngredients(ingredients);
    console.log(ingredients);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input className={styles.input} type="text" />
        <button className={styles.button} type="submit">
          Go!
        </button>
      </form>
    </div>
  );
}

export default Form;
