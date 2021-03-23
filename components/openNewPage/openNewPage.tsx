import styles from "../openNewPage/openNewPage.module.css";

export default function OpenNewPage() {
  return (
    <a href="http://localhost:3000/splash">
      <button className={styles.btn}>To new Page</button>
    </a>
  );
}
