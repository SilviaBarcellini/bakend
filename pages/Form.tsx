//import styles from "../styles/Form.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Form from "../components/forms/form";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { searchIngs } from "../utils/api";

interface Ing {
  _id: string;
  name: string;
  image: string;
  fat: number;
  carbs: number;
  protein: number;
  family: "Sugars" | "Fats" | "Liquids" | "else";
  vegan: boolean;
  vegetarian: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  nutsFree: boolean;
  soyFree: boolean;
  inst: number;
  liq: number;
  sweetPower: number;
}

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const [ings, setIngs] = useState<Ing[]>(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    const timeoutId = setTimeout(async () => {
      const newIngs = await searchIngs(search);
      setIngs(newIngs);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <label>
          Search{" "}
          <input
            type="text"
            placeholder="name"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
        <ul>
          {ings?.map((ing) => (
            <li key={ing._id}>
              key={ing.name}
              name={ing.name}
              image={ing.image}
              fat={ing.fat}
              carbs={ing.carbs}
              protein={ing.protein}
              family={ing.family}
              vegan={ing.vegan}
              vegetarian={ing.vegetarian}
              glutenFree={ing.glutenFree}
              dairyFree={ing.dairyFree}
              nutsFree={ing.glutenFree}
              soyFree={ing.soyFree}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

/* export default function MainCard() {
  return (
    <div>
      <div>
        <Header logo="bakend" imageSrc="/donuts.svg" />
      </div>
      <div className={styles.container}>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
      <footer className={styles.footer}>
        <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
      </footer>
    </div>
  );
}
 */
