import styles from "./Blog.module.css";

const Campaign = () => {
  return (
    <>
      <div className={styles["campaign"]}>
        <img
          className={styles["campaign__img"]}
          src="fv_pc.webp"
          alt="キャンペーンメインビジュアル"
        ></img>

        <div className={styles["campaign__img-container"]}>
          <a
            href="/"
            className={styles["campaign__community-open"]}
            aria-label="コミュニティを開く"
          >
            <img
              className={styles["campaign__img-community"]}
              src="community_pc.webp"
              alt="コミュニティ参加案内"
            ></img>
          </a>
        </div>

        <div className={styles["campaign__container"]}>
          <button
            className={styles["campaign__btn"]}
            aria-label="体験授業の申し込み"
          >
            無料で体験授業を受ける
          </button>
        </div>

        <div className={styles["campaign__container"]}>
          <a>
            <img
              src="banner.webp"
              alt="バナー"
              className={`${styles["campaign__img"]} ${styles["img__transparent"]}`}
            ></img>
          </a>
        </div>

        <div className={styles["campaign__container"]}>
          <img
            src="accent.webp"
            alt="アクセント"
            className={styles["campaign__img-accent"]}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Campaign;
