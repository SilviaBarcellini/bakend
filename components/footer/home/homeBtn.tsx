import styles from "./homeBtn.module.css";

export type HomeIconProps = {
  imgSrc: string;
};

function HomeIcon({ imgSrc, ...props }: HomeIconProps) {
  return (
    
    <a href="#">
      <img
        className={styles.homeBtn}
        {...props}
        src="https://www.flaticon.com/svg/vstatic/svg/1946/1946436.svg?token=exp=1616184268~hmac=26a662933dec7e3109c54f9645dfdf0a"
        alt="takeme-home"
      />
    </a>
  );
}

export default HomeIcon;
