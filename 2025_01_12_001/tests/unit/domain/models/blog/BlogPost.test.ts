import { BlogBlock } from "../../../../../src/features/Blog/domain/models/blog/BlogBlock";
import { BlogPost } from "../../../../../src/features/Blog/domain/models/blog/BlogPost";
import { expect, describe, it, vi, beforeEach } from "vitest";

describe("BlogPost", () => {
  let blogPost: BlogPost;

  beforeEach(() => {});

  it("addBlock", () => {
    let blocks = [new BlogBlock("1", "heading", "", { level: 1 })];
    const currentTime = new Date();
    blogPost = new BlogPost("title", blocks, "1", currentTime, currentTime);
    expect(blogPost.getId()).toEqual("1");
    expect(blogPost.getTitle()).toEqual("title");
    expect(blogPost.getBlocks()).toEqual(blocks);
    expect(blogPost.getCreatedAt()).toEqual(currentTime);
    expect(blogPost.getUpdatedAt()).toEqual(currentTime);
  });
});
