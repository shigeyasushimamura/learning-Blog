import { BlogBlock } from "./BlogBlock";

export class BlogPost {
  constructor(
    private title: string,
    private blocks: BlogBlock[],
    private id?: string,
    private createdAt?: Date,
    private updatedAt?: Date
  ) {
    this.validateTitle(title);
    this.validateBlocs(blocks);
  }

  private validateTitle(title: string) {
    if (!title || title.trim().length === 0) {
      throw new Error("title cannnot be empty");
    }
  }

  private validateBlocs(blocks: BlogBlock[]) {
    if (!Array.isArray(blocks)) {
      throw new Error("blocs should be array");
    }
  }

  getTitle(): string {
    return this.title;
  }

  getBlocks(): BlogBlock[] {
    return this.blocks;
  }
  getId(): string | undefined {
    if (this.id) {
      return this.id;
    }
  }

  getCreatedAt(): Date | undefined {
    if (this.createdAt) {
      return this.createdAt;
    }
  }

  getUpdatedAt(): Date | undefined {
    if (this.updatedAt) {
      return this.updatedAt;
    }
  }
}
