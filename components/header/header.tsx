import styles from "./header.module.css";
import Logo from "../logo/logo";

export type HeaderProps = {
  logo: string;
  imageSrc: string;
};

function Header({ logo, imageSrc, ...props }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1 className={`${styles.logo}`} {...props}>
        {logo}
      </h1>
      <img className={styles.donut} src={imageSrc} alt="donut" />
    </div>
  );
}

export default Header;
