import styles from "../styles/Form.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function MainCard() {
  return (
    <div>
      <div>
        <Header logo="bakend" imageSrc="/donuts.svg" />
      </div>
      <div className={styles.container}>
        <div className={styles.credits}>
          <h2>Icons</h2>
          <ul>
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

          <h2>Websites</h2>
          <h5>https://www.allrecipes.com</h5>
          <h5>https://www.nutritionvalue.org</h5>
          <h5>https://www.flaticon.com/</h5>
        </div>
      </div>
      <Footer homeIcon="/home.svg" />
    </div>
  );
}
