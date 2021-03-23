import styles from "../openNewPage/openNewPage.module.css";

export default function OpenNewPage() {
  return (
    <a href="/splash">
      <button className={styles.btn}>To new Page</button>
    </a>
  );
}
