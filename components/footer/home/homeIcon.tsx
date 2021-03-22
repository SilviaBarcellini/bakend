import styles from "./homeIcon.module.css";

export type HomeIconProps = {
  imgSrc: string;
};

function HomeIcon({ imgSrc }: HomeIconProps) {
  return (
    <a href="#">
      <img className={styles.icon} src={imgSrc} />
    </a>
  );
}

export default HomeIcon;
