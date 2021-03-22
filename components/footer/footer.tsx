import styles from "./footer.module.css";

export type FooterProps = {
  homeIcon: string;
  favsIcon: string;
};

function Footer({ favsIcon, homeIcon }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <img className={styles.favs} src={favsIcon} alt="heart" />
      <img className={styles.home} src={homeIcon} alt="home" />
    </footer>
  );
}

export default Footer;
