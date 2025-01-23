import styles from "./Blog.module.css";
const BlogItem = () => {
  return (
    <div className={styles["blogitem"]}>
      <div className={styles["blogitem__frame"]}>
        <img src="samplePage.webp" className={styles["blogitem__img"]} />
      </div>
      <h4 className={styles["blogitem__heading"]}>古き良き日本の冬へ❄</h4>
      <p className={styles["blogitem__date"]}>2025-01-19</p>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <div className={styles["blogitem__frame"]}>
        <img src="samplePage2.webp" className={styles["blogitem__img"]} />
      </div>
      <h4 className={styles["blogitem__heading"]}>古き良き日本の冬へ❄</h4>
      <p className={styles["blogitem__date"]}>2025-01-19</p>

      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <div className={styles["blogitem__frame"]}>
        <img src="samplePage3.JPG" className={styles["blogitem__img"]} />
      </div>
      <h4 className={styles["blogitem__heading"]}>古き良き日本の冬へ❄</h4>
      <p className={styles["blogitem__date"]}>2025-01-19</p>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <div className={styles["blogitem__frame"]}>
        <div className={styles["blogitem__video-container"]}>
          <iframe
            width="560"
            height="315"
            className={styles["blogitem__video"]}
            src="https://www.youtube.com/embed/tPTFTmVdQJQ?si=6d9X1rg8PFu5jy_F"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <h4 className={styles["blogitem__heading"]}>古き良き日本の冬へ❄</h4>
      <p className={styles["blogitem__date"]}>2025-01-19</p>
    </div>
  );
};
export default BlogItem;
