import Row from "../components/calculator/rows/row";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Welcome from "../components/welcome/welcome";
import { useState, useEffect } from "react";
import styles from "../styles/Alternatives.module.css";

export default function SugarCalculator() {
  const [ingOptions, setIngOptions] = useState([]);
  const [toIng, setToIng] = useState<string>(null);
  const [amount, setAmount] = useState<number>(1);
  const [total, setTotal] = useState<number>(null);

  useEffect(() => {
    const getIngredients = async () => {
      const response = await fetch(`/api/ingredients/`);
      const ingOptions = await response.json();
      const basicIng = ingOptions[1];
      setIngOptions(ingOptions);
      setToIng(basicIng.name);
      console.log(ingOptions);
    };
    getIngredients();
  }, []);

  function calculateTotal() {
    const ing = ingOptions.find((ing) => ing.name === toIng);
    setTotal((amount * ing.inst) / 100);
  }

  return (
    <div>
      <Header logo="bakend" imageSrc="/donuts.svg" />
      <div className={styles.container}>
        <Welcome label="sugar 🍭" />
        {ingOptions && (
          <div>
            <input
              className={styles.input}
              type="number"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
            />
            <div>
              <Row
                options={ingOptions}
                onSelectChange={setToIng}
                selectedIng={toIng}
              />
            </div>
          </div>
        )}

        <button className={styles.btn} onClick={calculateTotal}>
          Go!!
        </button>
        <div className={styles.resultContainer}>
          {!total ? (
            <h2 className={styles.result}>Solution will appear here</h2>
          ) : (
            <p className={styles.solution}>
              You can substitute <span className={styles.span}>{amount}</span>
              grams of sugar with <span className={styles.span}>{total}</span>
              of <span className={styles.span}>{toIng}</span>! Happy baking!🧁
            </p>
          )}
        </div>
      </div>

      <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
    </div>
  );
}
