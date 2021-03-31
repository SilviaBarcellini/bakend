import Row from "../components/calculator/rows/row";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [ingOptions, setIngOptions] = useState([]);
  const [fromIng, setFromIng] = useState(null);
  const [amountFromIng, setAmountFromIng] = useState<number>(1);
  const [toIng, setToIng] = useState(null);
  const [amountToIng, setAmountToIng] = useState<number>(null);
  //const [exchangeRate, setExchangeRate] = useState(null);

  //const [ingRate, setIngRate] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const response = await fetch(`/api/ingredients/`);
      const ingOptions = await response.json();
      const basicIng = ingOptions[1];

      setIngOptions(ingOptions);
      setFromIng(basicIng.name);
      setToIng(basicIng.name);
      console.log(basicIng.name);
    };
    getIngredients();
  }, []);

  return (
    <div>
      <Header logo="bakend" imageSrc="/donuts.svg" />
      <h1>Calculate :)</h1>
      <div>
        {ingOptions && (
          <>
            <Row
              options={ingOptions}
              onAmountChange={setAmountFromIng}
              amount={amountFromIng}
              onSelectChange={setFromIng}
              selectedIng={fromIng}
            />
            <div>=</div>
            <Row
              options={ingOptions}
              onAmountChange={setAmountToIng}
              amount={amountToIng}
              onSelectChange={setToIng}
              selectedIng={toIng}
            />
          </>
        )}
      </div>
      <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
    </div>
  );
}
