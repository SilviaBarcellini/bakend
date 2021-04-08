import styles from "./addFavs.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function AddFavs() {
  const router = useRouter();
  const { name: nameQuery } = router.query;
  const [fav, setFav] = useState(false);

  useEffect(() => {
    /* if (fav) {
      localStorage.setItem("lovedIt", { name });
    } */
    if (!fav) {
      localStorage.removeItem("lovedIt");
    }
  }, [fav]);

  return (
    <button onClick={() => setFav(!fav)} className={`${styles.fav}`}>
      {fav ? "yes" : "no"}
    </button>
  );
}

export default AddFavs;
