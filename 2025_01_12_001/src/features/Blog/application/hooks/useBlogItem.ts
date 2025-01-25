import { useState } from "react";
import { createPost } from "../services/blogService";
import { BlogBlock } from "../../domain/models/blog/BlogBlock";
import { BlogPost } from "../../domain/models/blog/BlogPost";

export const useBlogItem = (initialPost: BlogPost) => {
  const [post, setPost] = useState<BlogPost>(initialPost);

  const updateTitle = (title: string) => {
    setPost(
      new BlogPost(
        title,
        post.getBlocks(),
        post.getId(),
        post.getCreatedAt(),
        new Date()
      )
    );
  };

  const addBlock = (block: BlogBlock) => {
    const updateBlocks = [...post.getBlocks(), block];
    setPost(
      new BlogPost(
        post.getTitle(),
        updateBlocks,
        post.getId(),
        post.getCreatedAt(),
        new Date()
      )
    );
  };
  const deleteBlock = (blockId: string) => {
    const updatedBlocks = post
      .getBlocks()
      .filter((block) => block.getId() !== blockId);
    setPost(
      new BlogPost(
        post.getTitle(),
        updatedBlocks,
        post.getId(),
        post.getCreatedAt(),
        new Date()
      )
    );
  };

  const submitPost = async () => {
    // applicationservice経由でrepositoryからAPI呼び出して、API内でDB更新
    await createPost();
  };

  return { post, addBlock, deleteBlock, updateTitle };
};
