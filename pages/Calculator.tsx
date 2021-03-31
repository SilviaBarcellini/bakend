import Row from "../components/calculator/rows/row";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [ingOptions, setIngOptions] = useState([]);
  const [fromIng, setFromIng] = useState();
  const [toIng, setToIng] = useState();

  useEffect(() => {
    const getIngredients = async () => {
      const response = await fetch(`/api/ingredients/`);
      const ingOptions = await response.json();
      const basicIng = ingOptions[1];

      setIngOptions(ingOptions);
      setFromIng(basicIng.name);
      setToIng(ingOptions);
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
            <Row options={ingOptions} selectedIng={fromIng} />
            <div>=</div>
            <Row options={ingOptions} selectedIng={toIng} />
          </>
        )}
      </div>
      <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
    </div>
  );
}
