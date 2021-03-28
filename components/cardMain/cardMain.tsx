import styles from "./cardMain.module.css";

export type CardMainProps = {
  image: string;
  name: string;
  fat: number;
  carbs: number;
  protein: number;
  family: "Sugars" | "Fats" | "Liquids" | "else";
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
        <h3>{family}</h3>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.factsContainer}>
        <div className={styles.factContainer}>
          <h3 className={styles.factTitle}>
            % Fat
            <p className={styles.factContent}>{fat}</p>
          </h3>
        </div>
        <div className={styles.factContainer}>
          <h3 className={styles.factTitle}>
            % Carbs<p className={styles.factContent}>{carbs}</p>
          </h3>
        </div>
        <div className={styles.factContainer}>
          <h3 className={styles.factTitle}>
            % Protein
            <p className={styles.factContent}>{protein}</p>
          </h3>
        </div>
      </div>

      <div>
        <div className={styles.info}>
          <h4 className={styles.diet}>
            <span>{vegan === "yes" ? "💚 " : "💔"}</span>
            Vegan
          </h4>
          <h4 className={styles.diet}>
            <span>{vegetarian === "yes" ? "💚 " : "💔"}</span>
            Vegetarian
          </h4>
          <h4 className={styles.gluten}>
            <span className={styles.yes}>
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
              {nutsFree === "yes" ? "💚" : "💔"}
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
    </div>
  );
}

export default CardMain;
