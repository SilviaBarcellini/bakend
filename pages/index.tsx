import Head from "next/head";
import Button from "../components/button/Button";
import Btn from "../components/btn/btn";
import Greetings from "../components/greetings/greetings";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div>
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
      <Footer
        homeBtn="https://image.flaticon.com/icons/png/128/535/535234.png"
        favsBtn="https://image.flaticon.com/icons/png/128/1946/1946436.png"
      />
    </div>
  );
}
