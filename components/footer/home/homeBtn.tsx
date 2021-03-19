import styles from "./homeBtn.module.css";

const homeImg = (home) => {
  return require(`./${home}`);
};

function HomeBtn() {
  return (
    <a className={styles.homeBtn} href="http://www.google.com/">
      <img
        className={styles.homeImg}
        src="https://www.flaticon.com/svg/vstatic/svg/1946/1946436.svg?token=exp=1616180196~hmac=c6fda90f786ed79a878546f959dc74cc"
      />
    </a>
  );
}

export default HomeBtn;