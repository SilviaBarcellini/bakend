import styles from "./homeBtn.module.css";

export type HomeIconProps = {
  imgSrc: string;
};

function HomeIcon({ imgSrc, ...props }: HomeIconProps) {
  return (
    <a href="http://localhost:3000/">
      <img className={styles.icon} src={imgSrc} />
    </a>
  );
}

export default HomeIcon;
