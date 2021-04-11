import styles from "./card.module.css";

export type CardProps = {
  status: string;
  title: string;
  image: string;
};

function CardNot({ status, title, image }: CardProps) {
  return (
    <div className={styles.card}>
      <h1 className={styles.status}>{status}</h1>
      <img className={styles.image} src={image} alt="" />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default CardNot;
