import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
import CardMain from "../cardMain/cardMain";

function Search() {
  const [searchIng, setSearchIng] = useState("");
  const [ings, setIngs] = useState([]);

  const handleChange = (value) => {
    setSearchIng(value);
  };

  useEffect(() => {
    getIngs();
  }, []);
  const getIngs = async () => {
    const response = await fetch(`/api/ingredients`);
    const ings = await response.json();
    const filteredIngs = setIngs(ings);
    console.log(ings);
  };

  const filterIng = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setIngs([]);
    } else {
      const filteredIngs = [].filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setIngs(filteredIngs);
      console.log(ings);
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="type here"
        type="text"
        value={searchIng}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className={styles.cardMain}>
        {ings.length === 0 && "No item found :("}
        {ings.map((ingredient) => (
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
