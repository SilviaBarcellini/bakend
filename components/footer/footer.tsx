import styles from "./footer.module.css";
import Theme from "../dark/themeBtn";
import Link from "next/link";
import Btn from "../btn/btn";

export type FooterProps = {
  homeIcon: string;
};

function Footer({ homeIcon }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          <img className={styles.home} src={homeIcon} alt="home" />
        </a>
      </Link>

      <Theme />
    </footer>
  );
}

export default Footer;
