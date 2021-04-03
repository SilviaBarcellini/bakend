import Row from "../components/calculator/rows/row";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useState, useEffect } from "react";

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
      <h1>Welcome to the Sugar Calculator! 🍭</h1>
      {ingOptions && (
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="type how much sugar"
          />
          <Row
            options={ingOptions}
            onSelectChange={setToIng}
            selectedIng={toIng}
          />
        </div>
      )}

      <button onClick={calculateTotal}>Calc!</button>

      <h2>
        You can substitute {amount} grams of sugar with
        {total} of <span>{toIng}</span>!
      </h2>
      <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
    </div>
  );
}
