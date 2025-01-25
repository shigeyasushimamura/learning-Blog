import { FC } from "react";
import { BlogPost } from "../domain/models/blog/BlogPost";
import styles from "./Blog.module.css";

interface Props {
  post: BlogPost;
}

const BlogItem: FC<Props> = ({ post }) => {
  console.log(post);

  return (
    <div>
      item
      <article>
        <div>title:{post.getTitle()}</div>
      </article>
    </div>
  );
};
export default BlogItem;
