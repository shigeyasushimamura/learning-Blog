import BlogItem from "./BlogItem";
import styles from "./Blog.module.css";

const BlogList = () => {
  return (
    <div className={styles["bloglist"]}>
      <div className={styles["container"]}>
        <h3 className={styles["bloglist__heading"]}>Blog</h3>
        {/* <h2 className={styles["bloglist__heading-sub"]}>ブログ記事</h2> */}
      </div>
      <BlogItem />
    </div>
  );
};
export default BlogList;
