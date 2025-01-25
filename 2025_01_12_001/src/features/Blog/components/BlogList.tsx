import BlogItem from "./BlogItem";
import styles from "./Blog.module.css";
import { BlogPost } from "../domain/models/blog/BlogPost";
import { BlogBlock } from "../domain/models/blog/BlogBlock";
import { useState } from "react";

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    new BlogPost("title1", [new BlogBlock("1", "heading", "", { level: 1 })]),
  ]);

  return (
    <div className={styles["bloglist"]}>
      <div className={styles["container"]}>
        <h3 className={styles["bloglist__heading"]}>Blog</h3>
        {/* <h2 className={styles["bloglist__heading-sub"]}>ブログ記事</h2> */}
      </div>
      {posts.map((post: BlogPost, key) => (
        <BlogItem key={key} post={post} />
      ))}

      <p>サンプル</p>
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <h4 className={styles["blogitem__heading"]}>古き良き日本の冬へ❄</h4>
        <p className={styles["blogitem__date"]}>2025-01-19</p>
      </div>
    </div>
  );
};
export default BlogList;
