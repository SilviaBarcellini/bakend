import styles from "../styles/Splash.module.css";
import Logo from "../components/logo/logo";

export default function SplashPage() {
  return (
    <div>
      <div className={styles.logo}>
        <Logo logo="bakend" size="big" />
      </div>
      <div>
        <a className={styles.link} href="http://localhost:3000">
          Press here to continue
        </a>
      </div>
    </div>
  );
}
