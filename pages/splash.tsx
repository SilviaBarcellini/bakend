import styles from "../styles/Splash.module.css";
import Logo from "../components/logo/logo";

export default function SplashPage() {
  return (
    <div>
      <div className={styles.logo}>
        <Logo logo="bakend" size="big" />
        <div className={styles.link}>
          <a href="/">press here to continue</a>
        </div>
      </div>
    </div>
  );
}
