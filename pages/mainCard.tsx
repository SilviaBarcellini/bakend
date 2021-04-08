import styles from "../styles/MainCard.module.css";
import Header from "../components/header/header";
import CardMain from "../components/cardMain/cardMain";
import Footer from "../components/footer/footer";

export default function MainCard() {
  return (
    <div>
      <div>
        <Header logo="bakend" imageSrc="/donuts.svg" />
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <CardMain
            name="Milk"
            image="/milk.svg"
            fat={3.6}
            carbs={4.8}
            protein={3.6}
            family="Liquids"
            vegan={false}
            vegetarian={false}
            glutenFree={false}
            dairyFree={false}
            nutsFree={true}
            soyFree={true}
          />
        </div>
        <div className={styles.card}>
          <CardMain
            name="Sugar"
            image="/sugar-cubes.svg"
            fat={0}
            carbs={98}
            protein={0}
            family="Sugars"
            vegan={true}
            vegetarian={true}
            glutenFree={true}
            dairyFree={true}
            nutsFree={true}
            soyFree={true}
          />
        </div>
      </div>
      <footer className={styles.footer}>
        <Footer homeIcon="/home.svg" />
      </footer>
    </div>
  );
}
