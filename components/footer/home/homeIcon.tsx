import styles from "./homeIcon.module.css";
import Link from "next/link";

export type HomeIconProps = {
  imgSrc: string;
};

function HomeIcon({ imgSrc }: HomeIconProps) {
  return (
    <Link href="/">
      <a>
        <img className={styles.icon} src={imgSrc} />
      </a>
    </Link>
  );
}

export default HomeIcon;
