import { describe, expect, it } from "vitest";
import { BlogBlock } from "../../../../../src/features/Blog/domain/models/blog/BlogBlock";

describe("BlockBlock", () => {
  it("create heading", () => {
    const block = new BlogBlock("1", "heading", "", { level: 1 });
    expect(block.getType()).toEqual("heading");
  });
  it("create paragraph", () => {
    const block = new BlogBlock("1", "paragraph", "text", null);
  });

  it("create image", () => {
    const block = new BlogBlock("1", "image", "", {
      imageUrl: "sample.png",
      alt: "sample",
    });
  });

  it("should throw error for empty type", () => {
    expect(() => new BlogBlock("1", null as any, null as any, null)).toThrow();
  });
});
