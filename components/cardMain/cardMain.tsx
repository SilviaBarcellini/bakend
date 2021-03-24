import styles from "./cardMain.module.css";
import { Ingredient } from "../../src/utils/api";

export type CardMainProps = {
  image: string;
  name: string;
  fat: number;
  carbs: number;
  protein: number;
  family: "Sugar" | "Amids" | "Liquids" | "else";
  vegan: boolean;
  vegetarian: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  nutsFree: boolean;
  soyFree: boolean;
};

function CardMain({
  name,
  image,
  fat,
  carbs,
  protein,
  family,
  vegan,
  vegetarian,
  glutenFree,
  dairyFree,
  nutsFree,
  soyFree,
}: CardMainProps) {
  return (
    <div className={styles.cardMain}>
      <img className={styles.image} src={image} alt="" />
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.factsContainer}>
        <div className={styles.factContainer}>
          <h3 className={styles.factTitle}>% Fat</h3>
          <h5 className={styles.factContent}>{fat}</h5>
        </div>
        <div className={styles.factContainer}>
          <h3 className={styles.factTitle}>% Carbs</h3>
          <h5 className={styles.factContent}>{carbs}</h5>
        </div>
        <div className={styles.factContainer}>
          <h3 className={styles.factTitle}>% Protein</h3>
          <h5 className={styles.factContent}>{protein}</h5>
        </div>
      </div>
      <div className={styles.dietContainer}>
        <h4 className={styles.dietFact}>Vegan</h4>
        <p>{vegan}</p>
        <h4 className={styles.dietFact}>Vegetarian</h4>
        <p>{vegan}</p>
      </div>
      <div className={styles.allergensContainer}>
        <h4 className={styles.Allergen}>Gluten Free</h4>
        <p>{glutenFree}</p>
        <h4 className={styles.Allergen}>Dairy Free</h4>
        <p>{dairyFree}</p>
        <h4 className={styles.Allergen}>Nuts Free</h4>
        <p>{nutsFree}</p>
        <h4 className={styles.Allergen}>Soy Free</h4>
        <p>{soyFree}</p>
      </div>
    </div>
  );
}

export default CardMain;
