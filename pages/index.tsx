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
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}></main>
          <div>
            <Greetings />
          </div>
          <div className={styles.btn}>
            <Link href="/Form">
              <a>
                <Btn label="Today I am out of ..." />
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
