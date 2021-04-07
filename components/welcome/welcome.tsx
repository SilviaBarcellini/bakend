import styles from "./welcome.module.css";

export type WelcomeProps = {
  label: string;
};

function Welcome({ label }: WelcomeProps) {
  return (
    <div>
      <h1 className={styles.welcome}>Welcome to the {label} Calculator!!</h1>
      <p className={styles.instructions}>
        No {label}❓ 😱 <br />
        Do not panic! Here you can find an alternative! <br />
        Just type here how much {label} you need according to your recipe.{" "}
        <br />
        Then look through the menu and find an option you like
        <br />
        Ready? Press the button!
        <br /> I will do the maths for you 🧮
      </p>
    </div>
  );
}

export default Welcome;
