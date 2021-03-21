import styles from "./footer.module.css";

export type FooterProps = {
  favsBtn: string;
  homeBtn: string;
};

function Footer({ favsBtn, homeBtn, ...props }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <img className={styles.home} src={homeBtn} alt="home" />
      <img className={styles.home} src={homeBtn} alt="home" />
    </footer>
  );
}

export default Footer;
