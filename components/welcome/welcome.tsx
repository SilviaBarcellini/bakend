import styles from "./welcome.module.css";

export type WelcomeProps = {
  label: string;
};

function Welcome({ label }: WelcomeProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.welcome}>Welcome to the {label} Calculator!!</h1>
      <div className={styles.message}>
        <p className={styles.instructions}>
          No {label}❓ 😱 <br />
          Do not panic! Here you can find an alternative! <br />
          Just type here how much {label} you need according to your recipe.{" "}
          <br />
          <br /> I will do the maths for you 🧮
        </p>
      </div>
    </div>
  );
}

export default Welcome;
