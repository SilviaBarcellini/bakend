import styles from "./footer.module.css";

export type FooterProps = {
  homeBtn: string;
  favsBtn: string;
};

function Footer({ favsBtn, homeBtn }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <img className={styles.favs} src={favsBtn} alt="heart" />
      <img className={styles.home} src={homeBtn} alt="home" />
    </footer>
  );
}

export default Footer;
