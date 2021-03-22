import styles from "./header.module.css";

export type HeaderProps = {
  logo: string;
  imageSrc: string;
};

function Header({ logo, imageSrc }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1 className={`${styles.logo}`}>{logo}</h1>
      <img className={styles.donut} src={imageSrc} alt="donut" />
    </div>
  );
}

export default Header;
