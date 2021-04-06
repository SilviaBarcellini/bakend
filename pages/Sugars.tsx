import Row from "../components/calculator/rows/row";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Welcome from "../components/welcome/welcome";

import { useState, useEffect } from "react";
import styles from "../styles/Sugars.module.css";

export default function SugarCalculator() {
  const [ingOptions, setIngOptions] = useState([]);
  //const [ingInst, setIngInst] = useState();
  const [toIng, setToIng] = useState(null);
  const [amount, setAmount] = useState<number>(1);
  const [total, setTotal] = useState(amount);
  const [resultMsg, setResultMsg] = useState("Solution will appear here");

  useEffect(() => {
    const getIngredients = async () => {
      const response = await fetch(`/api/ingredients/`);
      const ingOptions = await response.json();
      const basicIng = ingOptions[1];
      //const ingRate = toIng.inst;
      setIngOptions(ingOptions);
      setToIng(basicIng.name);
    };
    getIngredients();
  }, []);

  const solution = (
    <p>
      You can substitute <span className={styles.span}>{amount}</span>
      grams of sugar with <span className={styles.span}>{total}</span>
      of <span className={styles.span}>{toIng}</span>!
    </p>
  );
  function calculateTotal() {
    setTotal((amount * 75) / 100);
    setResultMsg(solution);
  }

  return (
    <div>
      <Header logo="bakend" imageSrc="/donuts.svg" />
      <div className={styles.container}>
        <Welcome label="SUGARS 🍭" />
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

        <button type="submit" className={styles.btn} onClick={calculateTotal}>
          Go!!
        </button>
        <div className={styles.resultContainer}>
          <h2 className={styles.result}>{resultMsg}</h2>
        </div>
      </div>

      <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
    </div>
  );
}
