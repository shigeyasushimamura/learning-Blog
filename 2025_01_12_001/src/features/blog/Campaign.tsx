import styles from "./Blog.module.css";

const Campaign = () => {
  return (
    <>
      <div className={styles["campaign"]}>
        <img className={styles["campaign__img"]} src="fv_pc.webp"></img>

        <div className={styles["campaign__img-container"]}>
          <a href="/" className={styles["campaign__community-open"]}>
            <img
              className={styles["campaign__img"]}
              src="community_pc.webp"
            ></img>
          </a>
        </div>

        <div className={styles["campaign__btn-container"]}>
          <button className={styles["campaign__btn"]}>
            無料で体験授業を受ける
          </button>
        </div>
      </div>
    </>
  );
};

export default Campaign;
