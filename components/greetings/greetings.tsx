import styles from "./greetings.module.css";

type GreetingsProps = {
  greetings: string;
};

function Greetings(greetings, ...props) {
  return <p className={styles.greetings}>{greetings}</p>;
}

export default Greetings;
