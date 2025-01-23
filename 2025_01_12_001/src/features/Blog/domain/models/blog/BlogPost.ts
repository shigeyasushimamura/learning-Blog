import { BlogBlock } from "./BlogBlock";

export class BlogPost {
  constructor(
    private title: string,
    private blocks: BlogBlock[],
    private id?: string,
    private createdAt?: Date,
    private updatedAt?: Date
  ) {}

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
