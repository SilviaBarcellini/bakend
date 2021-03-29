import styles from "./favsIcon.module.css";
import Link from "next/link";

export type FavsIconProps = {
  imgSrc: string;
};

function FavsIcon({ imgSrc }: FavsIconProps) {
  return (
    <Link href="#">
      <a>
        <img className={styles.icon} src={imgSrc} />
      </a>
    </Link>
  );
}

export default FavsIcon;
