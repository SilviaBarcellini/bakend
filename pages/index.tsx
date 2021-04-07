import Head from "next/head";
import Link from "next/link";
import Greetings from "../components/greetings/greetings";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Btn from "../components/btn/btn";

export default function Home() {
  return (
    <div>
      <Header logo="bakend" imageSrc="/donuts.svg" />
      <div>
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/faviconn.ico" />
          </Head>
          <main className={styles.main}></main>
          <div>
            <Greetings />
          </div>
          <div className={styles.calc}>
            <Link href="/Sugars">
              <a>
                <Btn label="I am out of Sugar !! 🍭" />
              </a>
            </Link>
            <Link href="/Liquids">
              <a>
                <Btn label="I am out of Milk !! 🥛" />
              </a>
            </Link>
            <Link href="/Fats">
              <a>
                <Btn label="I am out of Butter !! 🧈" />
              </a>
            </Link>
          </div>
          <div className={styles.btn}>
            <Link href="/Form">
              <a>
                <Btn label="Explore 🦋" />
              </a>
            </Link>
            <Link href="/MainCard">
              <a>
                <Btn label="Discover New Ingredients!" />
              </a>
            </Link>
          </div>
        </div>
        <footer className={styles.footer}>
          <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
        </footer>
      </div>
    </div>
  );
}
