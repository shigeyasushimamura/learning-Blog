import styles from "./Blog.module.css";
import Campaign from "./Campaign";

const Blog = () => {
  return (
    <div className={styles["blog"]}>
      <Campaign />
    </div>
  );
};
export default Blog;
