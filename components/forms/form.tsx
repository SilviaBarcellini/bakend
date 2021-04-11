import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
import CardMain from "../cardMain/cardMain";
import CardNot from "../card/card";

function Search() {
  const [searchIng, setSearchIng] = useState("");
  const [ings, setIngs] = useState([]);

  const handleChange = (value) => {
    setSearchIng(value);
  };

  useEffect(() => {
    getIngs();
  }, [searchIng]);
  const getIngs = async () => {
    const response = await fetch(
      `/api/ingredients${searchIng ? `?search=${searchIng}` : ""}`
    );
    const ings = await response.json();
    setIngs(ings);
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
        placeholder="looking for anything?"
        type="text"
        value={searchIng}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className={styles.cardMain}>
        {ings.length === 0 && (
          <CardNot
            status="404"
            title="oh nuts, no ingredients found!"
            image="/ice-cream.svg"
          />
        )}
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
