import styles from "./footer.module.css";
import Link from "next/link";

export type FooterProps = {
  homeIcon: string;
  favsIcon: string;
};

function Footer({ favsIcon, homeIcon }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Link href="#">
        <a>
          <img className={styles.favs} src={favsIcon} alt="heart" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <img className={styles.home} src={homeIcon} alt="home" />
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
