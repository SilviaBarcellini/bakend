import Row from "../components/calculator/rows/row";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useState, useEffect } from "react";
import styles from "../styles/Sugars.module.css";

export default function SugarCalculator() {
  const [ingOptions, setIngOptions] = useState([]);
  //const [ingInst, setIngInst] = useState();
  const [toIng, setToIng] = useState(null);
  const [amount, setAmount] = useState<number>(1);
  const [total, setTotal] = useState(amount);

  useEffect(() => {
    const getIngredients = async () => {
      const response = await fetch(`/api/ingredients/`);
      const ingOptions = await response.json();
      const basicIng = ingOptions[1];
      //const ingRate = toIng.inst;
      setIngOptions(ingOptions);
      setToIng(basicIng.name);
      console.log(ingOptions);
    };
    getIngredients();
  }, []);

  function calculateTotal() {
    setTotal((amount * 75) / 100);
  }

  return (
    <div>
      <Header logo="bakend" imageSrc="/donuts.svg" />
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Sugar Calculator! 🍭</h1>
        {ingOptions && (
          <div>
            <input
              className={styles.input}
              type="number"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              placeholder="type how much sugar"
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
          Calc!
        </button>

        <h2 className={styles.result}>
          You can substitute <span className={styles.span}>{amount}</span> grams
          of sugar with <span className={styles.span}>{total}</span>
          of <span className={styles.span}>{toIng}</span>!
        </h2>
      </div>

      <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
    </div>
  );
}
