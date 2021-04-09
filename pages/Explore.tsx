import styles from "../styles/Form.module.css";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Search from "../components/forms/form";

export default function MainCard() {
  return (
    <div>
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/faviconnn.ico" />
      </Head>
      <div>
        <Header logo="bakend" imageSrc="/donuts.svg" />
      </div>
      <div className={styles.container}>
        <div className={styles.form}>
          <Search />
        </div>
      </div>
      <footer className={styles.footer}>
        <Footer homeIcon="/home.svg" />
      </footer>
    </div>
  );
}
