import styles from "./cardMain.module.css";
import { Ingredient } from "../../src/utils/api";

export type CardMainProps = {
  image: string;
  name: string;
  fat: number;
  carbs: number;
  protein: number;
  family: "Sugar" | "Amids" | "Liquids" | "else";
  vegan: string;
  vegetarian: string;
  glutenFree: string;
  dairyFree: string;
  nutsFree: string;
  soyFree: string;
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
      <div className={styles.cardIntro}>
        <h2 className={styles.name}>{name}</h2>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.factsContainer}>
        <div className={styles.factContainer}>
          <h3 className={styles.factTitle}>
            % Fat
            <h5 className={styles.factContent}>{fat}</h5>
          </h3>
        </div>
        <div className={styles.factContainer}>
          <h3 className={styles.factTitle}>
            % Carbs<h5 className={styles.factContent}>{carbs}</h5>
          </h3>
        </div>
        <div className={styles.factContainer}>
          <h3 className={styles.factTitle}>
            % Protein
            <h5 className={styles.factContent}>{protein}</h5>
          </h3>
        </div>
      </div>
      <div className={styles.familyContainer}>
        <h3>{family}</h3>
      </div>
      <div className={styles.dietContainer}>
        <h4 className={styles.dietFact}>Vegan</h4>
        <p>{vegan === "yes" ? "💚 " : "💔"}</p>
        <h4 className={styles.dietFact}>Vegetarian</h4>
        <p>{vegetarian === "yes" ? "💚 " : "💔"}</p>
      </div>
      <div className={styles.allergensContainer}>
        <h4 className={styles.Allergen}>Gluten Free</h4>
        <p>{glutenFree === "yes" ? "💚 " : "💔"}</p>
        <h4 className={styles.Allergen}>Dairy Free</h4>
        <p>{dairyFree === "yes" ? "💚 " : "💔"}</p>
        <h4 className={styles.Allergen}>Nuts Free</h4>
        <p>{nutsFree === "yes" ? "💚 " : "💔"}</p>
        <h4 className={styles.Allergen}>Soy Free</h4>
        <p>{soyFree === "yes" ? "💚 " : "💔"}</p>
      </div>
    </div>
  );
}

export default CardMain;
