import styles from "./footer.module.css";
import Link from "next/link";

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
    </footer>
  );
}

export default Footer;
