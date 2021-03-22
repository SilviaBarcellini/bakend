import styles from "./card.module.css";

export type CardProps = {
  title: string;
  image: string;
};

function Card({ title, image }: CardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="" />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default Card;
