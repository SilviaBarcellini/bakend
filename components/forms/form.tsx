import React, { useEffect } from "react";
import styles from "./form.module.css";
import { useState } from "react";
import { getIngredient } from "../../src/utils/api";

function Form() {
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
