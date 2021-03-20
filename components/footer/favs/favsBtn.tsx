import styles from "./favsBtn.module.css";

export type FavsIconProps = {
  imgSrc: string;
};

function FavsIcon({ imgSrc, ...props }: FavsIconProps) {
  return (
    <a href="http://localhost:3000/">
      <img className={styles.icon} src={imgSrc} />
    </a>
  );
}

export default FavsIcon;
