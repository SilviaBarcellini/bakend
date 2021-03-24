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
        <h4 className={styles.diet}>
          <span className={styles.span}>{vegan === "yes" ? "💚 " : "💔"}</span>
          Vegan
        </h4>
        <h4 className={styles.diet}>
          <span className={styles.span}>
            {vegetarian === "yes" ? "💚 " : "💔"}
          </span>
          Vegetarian
        </h4>
      </div>
      <div className={styles.allergensContainer}>
        <h4 className={styles.gluten}>
          <span className={styles.span}>
            {glutenFree === "yes" ? "💚 " : "💔"}
          </span>
          Gluten Free
        </h4>
        <h4 className={styles.dairy}>
          <span className={styles.span}>
            {dairyFree === "yes" ? "💚 " : "💔"}
          </span>
          Dairy Free
        </h4>
        <h4 className={styles.nuts}>
          <span className={styles.span}>
            {nutsFree === "yes" ? "💚 " : "💔"}
          </span>
          Nuts Free
        </h4>
        <h4 className={styles.soy}>
          <span className={styles.span}>
            {soyFree === "yes" ? "💚 " : "💔"}
          </span>
          Soy Free
        </h4>
      </div>
    </div>
  );
}

export default CardMain;
