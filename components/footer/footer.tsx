import styles from "./footer.module.css";

export type FooterProps = {
  homeIcon: string;
  favsIcon: string;
};

function Footer({ favsIcon, homeIcon }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <a href="#">
        <img className={styles.favs} src={favsIcon} alt="heart" />
      </a>
      <a href="#">
        <img className={styles.home} src={homeIcon} alt="home" />
      </a>
    </footer>
  );
}

export default Footer;
