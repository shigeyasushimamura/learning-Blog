import { describe, expect, it } from "vitest";
import { BlogBlock } from "../../../../../src/features/Blog/domain/models/blog/BlogBlock";

describe("test BlockBlock", () => {
  it("can create instance", () => {
    const block = new BlogBlock("heading", "", null, 1);
  });
});
