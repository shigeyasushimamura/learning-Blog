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
              className={styles["campaign__img"]}
              src="community_pc.webp"
              alt="コミュニティ参加案内"
            ></img>
          </a>
        </div>

        <div className={styles["campaign__btn-container"]}>
          <button
            className={styles["campaign__btn"]}
            aria-label="体験授業の申し込み"
          >
            無料で体験授業を受ける
          </button>
        </div>
      </div>
    </>
  );
};

export default Campaign;
