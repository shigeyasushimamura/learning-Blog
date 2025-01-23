import React, { FC } from "react";
import styles from "./Blog.module.css";

interface Props {
  children: React.ReactNode;
}

const SideEdge: FC<Props> = ({ children }) => {
  return (
    <div className={styles["edge__root"]}>
      <img src="edge_pc.webp" className={styles["edge"]}></img>
      <img src="edge_pc.webp" className={styles["edge__reverse"]}></img>

      {children}
    </div>
  );
};

export default SideEdge;
