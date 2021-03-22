import styles from "./favsBtn.module.css";

export type FavsIconProps = {
  imgSrc: string;
};

function FavsIcon({ imgSrc }: FavsIconProps) {
  return (
    <a href="#">
      <img
        className={styles.favsImg}
        src="https://www.flaticon.com/svg/vstatic/svg/535/535234.svg?token=exp=1616181165~hmac=c49e0ab0e50bb652f6d47a7ba840fc0c"
      />
    </a>
  );
}

export default FavsIcon;
