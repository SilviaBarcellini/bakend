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
          <div className={styles.calc}>
            <Link href="/Sugar">
              <a>
                <Btn label="I am out of Sugar !! 🍭" />
              </a>
            </Link>
            <Link href="/Milk">
              <a>
                <Btn label="I am out of Milk !! 🥛" />
              </a>
            </Link>
            <Link href="/Butter">
              <a>
                <Btn label="I am out of Butter !! 🧈" />
              </a>
            </Link>
          </div>
          <div className={styles.btn}>
            <Link href="/Explore">
              <a>
                <Btn label="Explore 🦋" />
              </a>
            </Link>
            <Link href="/Credits">
              <a>
                <Btn label="Credits 💘" />
              </a>
            </Link>
          </div>
        </div>
        <footer className={styles.footer}>
          <Footer homeIcon="/home.svg" />
        </footer>
      </div>
    </div>
  );
}
