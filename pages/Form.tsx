import styles from "../styles/Form.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Form from "../components/forms/form";

export default function MainCard() {
  return (
    <div>
      <div>
        <Header logo="bakend" imageSrc="/donuts.svg" />
      </div>
      <div className={styles.container}>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
      <footer className={styles.footer}>
        <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
      </footer>
    </div>
  );
}
