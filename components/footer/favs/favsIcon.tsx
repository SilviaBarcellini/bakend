import styles from "./favsIcon.module.css";

export type FavsIconProps = {
  imgSrc: string;
};

function FavsIcon({ imgSrc }: FavsIconProps) {
  return (
    <a href="#">
      <img className={styles.icon} src={imgSrc} />
    </a>
  );
}

export default FavsIcon;
