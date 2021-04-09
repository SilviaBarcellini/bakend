import styles from "../styles/Credits.module.css";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Credits() {
  return (
    <div>
      <Head>
        <title>Credits</title>
        <link rel="icon" href="/faviconnn.ico" />
      </Head>
      <div>
        <Header logo="bakend" imageSrc="/donuts.svg" />
      </div>
      <div className={styles.container}>
        <div className={styles.credits}>
          <h1 className={styles.title}>Credits</h1>
          <h2 className={styles.subtitle}>Icons</h2>
          <ul className={styles.list}>
            <li>
              Icons made by
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{" "}
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by
              <a href="https://www.flaticon.com/authors/monkik" title="monkik">
                monkik
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by{" "}
              <a href="" title="Nikita Golubev">
                Nikita Golubev
              </a>{" "}
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by{" "}
              <a href="" title="Those Icons">
                Those Icons
              </a>{" "}
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/smashicons"
                title="Smashicons"
              >
                Smashicons
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/smashicons"
                title="Smashicons"
              >
                Smashicons
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/photo3idea-studio"
                title="photo3idea_studio"
              >
                photo3idea_studio
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              >
                Pixel perfect
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/icongeek26"
                title="Icongeek26"
              >
                Icongeek26
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by{" "}
              <a href="" title="smalllikeart">
                smalllikeart
              </a>{" "}
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by{" "}
              <a href="" title="mynamepong">
                mynamepong
              </a>{" "}
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
            <li>
              Icons made by{" "}
              <a href="" title="iconixar">
                iconixar
              </a>{" "}
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
          </ul>

          <h2 className={styles.subtitle}>Websites</h2>
          <ul className={styles.list}>
            <li>
              <a href="https://www.allrecipes.com" title="All Recipes">
                https://www.allrecipes.com
              </a>
            </li>
            <li>
              <a href="https://www.nutritionvalue.org" title="Nutrition Values">
                https://www.nutritionvalue.org
              </a>
            </li>
            <li>
              <a href="https://www.flaticon.com" title="Icons">
                https://www.flaticon.com/
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer homeIcon="/home.svg" />
    </div>
  );
}
