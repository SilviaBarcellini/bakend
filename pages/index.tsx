import Head from "next/head";
import Button from "../components/button/Button";
import Btn from "../components/btn/btn";
import Greetings from "../components/greetings/greetings";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import OpenNewPage from "../components/openNewPage/openNewPage";
import Form from "../components/forms/form";

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

          <main className={styles.main}>
            <Button primary label="Primary" />
            <Button primary={false} label="Secondary" />
            <OpenNewPage />
            <div>
              <a href="/mainCard">
                press here to navigate to the Main Card Page (temporary link)
              </a>
            </div>
          </main>
          <div>
            <Greetings />
          </div>
          <div>
            <Form />
          </div>
        </div>
        <footer className={styles.footer}>
          <Footer homeIcon="/home.svg" favsIcon="/heartf.svg" />
        </footer>
      </div>
    </div>
  );
}
