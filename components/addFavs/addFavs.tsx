import styles from "./addFavs.module.css";

export type AddFavsProps = {
  isFav: boolean;
  image: string;
};

function AddFavs({ isFav, image, ...props }: AddFavsProps) {
  return (
    <button className={`${styles.fav} ${isFav ? styles.isFav : ""}`} {...props}>
      <img src={image} alt="" />
    </button>
  );
}

export default AddFavs;
