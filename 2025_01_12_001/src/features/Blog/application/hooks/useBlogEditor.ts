import { useState } from "react";
import { createPost } from "../services/blogService";
import { BlogBlock } from "../../domain/models/blog/BlogBlock";

export const useBlogEditor = () => {
  const [blocks, setBlocks] = useState<BlogBlock[]>([]);

  const addBlock = (block: BlogBlock) => setBlocks([...blocks, block]);
  const deleteBlock = (id: string) =>
    setBlocks(blocks.filter((block) => block.getId() !== id));

  const submitPost = async () => {
    await createPost();
  };

  return { blocks, addBlock, submitPost };
};
