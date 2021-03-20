import Head from "next/head";
import Button from "../components/button/Button";
import Btn from "../components/btn/btn";
import Greetings from "../components/greetings/greetings";
import styles from "../styles/Home.module.css";
import HomeBtn from "../components/footer/home/homeBtn";
import FavsIcon from "../components/footer/favs/favsBtn";

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
      <footer className={styles.footer}>
        <HomeBtn imgSrc="https://www.flaticon.com/svg/vstatic/svg/1946/1946436.svg?token=exp=1616271893~hmac=1ad26a501aec7b93543ee4b8794f94e4" />
        <FavsIcon imgSrc="https://www.flaticon.com/svg/vstatic/svg/535/535234.svg?token=exp=1616181165~hmac=c49e0ab0e50bb652f6d47a7ba840fc0c" />
      </footer>
    </div>
  );
}
