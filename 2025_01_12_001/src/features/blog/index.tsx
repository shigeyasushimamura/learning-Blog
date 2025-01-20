import styles from "./Blog.module.css";
import BlogList from "./BlogList";
import Campaign from "./Campaign";
import Introduction from "./Introduction";
import SideEdge from "./SideEdge";

const Blog = () => {
  return (
    <div className={styles["blog"]}>
      <Campaign />
      <SideEdge>
        <Introduction />
      </SideEdge>
      <BlogList />
    </div>
  );
};
export default Blog;
