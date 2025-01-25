type BlockType = "heading" | "paragraph" | "image";
type Metadata = {
  imageUrl?: string;
  alt?: string;
  level?: number;
} | null;

export class BlogBlock {
  constructor(
    private id: string,
    private type: BlockType,
    private content: string,
    private metadata: Metadata
  ) {
    this.validateType(type);
    this.validateMetadata(type, metadata);
    this.validateContent(type, content);
  }

  private validateType(type: BlockType): void {
    if (!type) {
      throw new Error("BlogBlock type cannnot be empty");
    }
  }
  private validateContent(type: BlockType, content: string): void {
    if (type == "paragraph" && (!content || content.trim().length === 0)) {
      throw new Error("BlogBlock content cannot be empty");
    }
  }

  private validateMetadata(type: BlockType, metadata: Metadata): void {
    switch (type) {
      case "heading":
        if (!metadata?.level) {
          throw new Error("BlogBlock heading require level");
        }
        break;
      case "image":
        if (!metadata?.imageUrl || !metadata?.alt) {
          throw new Error("BlogBlock heading require imageUrl and alt");
        }
        break;
      case "paragraph":
        this.validateContent(this.content);
        break;
      default:
        break;
    }
  }

  getId(): string {
    return this.id;
  }

  getType(): BlockType {
    return this.type;
  }

  getContent(): string {
    return this.content;
  }

  getMetadata(): Metadata {
    return this.metadata;
  }

  updateParagraph(newContent: string): void {
    this.validateContent(newContent);
    this.content = newContent;
  }
  updateHeading(newTitle: string, newLevel: number) {
    this.validateContent(newTitle);
    const type = "heading";
    this.validateMetadata(type, { level: newLevel });
    this.metadata = { ...this.metadata, level: newLevel };
  }
  updateImage(newImageUrl: string, newAlt: string): void {
    const type = "image";
    this.validateMetadata(type, { imageUrl: newImageUrl, alt: newAlt });
    this.metadata = { ...this.metadata, imageUrl: newImageUrl, alt: newAlt };
  }
}
