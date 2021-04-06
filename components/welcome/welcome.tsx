import styles from "./welcome.module.css";

export type WelcomeProps = {
  label: string;
};

function Welcome({ label }: WelcomeProps) {
  return (
    <h1 className={styles.welcome}>Welcome to the {label} Calculator!!</h1>
  );
}

export default Welcome;
