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
}

export default function Home() {
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
            <li key={ing._id}>{ing.name}</li>
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
