import Head from "next/head";
import Button from "../components/button/Button";
import Btn from "../components/btn/btn";
import Greetings from "../components/greetings/greetings";
import styles from "../styles/Home.module.css";
import HomeBtn from "../components/footer/home/homeBtn";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button primary label="Primary" />
        <Button primary={false} label="Secondary" />
      </main>
      <div>
        <Greetings />
        <Btn label="Go!" />
      </div>
    </div>
  );
}
